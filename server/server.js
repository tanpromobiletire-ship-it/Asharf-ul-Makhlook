const http=require('http');
const crypto=require('crypto');
const {Pool}=require('pg');
const {createProviderAuth}=require('./provider-auth');
const providerAuth=createProviderAuth();

const PORT=process.env.PORT||10000;
const FRONTEND_ORIGIN=process.env.FRONTEND_ORIGIN||'https://asharf-ul-makhlook.onrender.com';
const pool=process.env.DATABASE_URL?new Pool({connectionString:process.env.DATABASE_URL,ssl:{rejectUnauthorized:false}}):null;

function json(res,status,data,extra={}){res.writeHead(status,{'content-type':'application/json; charset=utf-8','access-control-allow-origin':FRONTEND_ORIGIN,'access-control-allow-credentials':'true','access-control-allow-headers':'content-type,authorization','access-control-allow-methods':'GET,POST,OPTIONS',...extra});res.end(JSON.stringify(data))}
function readBody(req){return new Promise((resolve,reject)=>{let s='';req.on('data',c=>{s+=c;if(s.length>1e6){req.destroy();reject(new Error('body too large'))}});req.on('end',()=>{try{resolve(s?JSON.parse(s):{})}catch(e){reject(e)}});req.on('error',reject)})}
function normEmail(v){return String(v||'').trim().toLowerCase()}
function cleanPhone(v){return String(v||'').replace(/[^+0-9]/g,'').slice(0,20)}
function hashPassword(password,salt=crypto.randomBytes(16).toString('hex')){const hash=crypto.scryptSync(password,salt,64).toString('hex');return {salt,hash}}
function token(){return crypto.randomBytes(32).toString('base64url')}
function tokenHash(v){return crypto.createHash('sha256').update(v).digest('hex')}

async function init(){
 if(!pool)return;
 await pool.query(`create table if not exists users(
  id uuid primary key default gen_random_uuid(),
  email text unique not null,
  phone text unique not null,
  display_name text not null,
  password_salt text not null,
  password_hash text not null,
  email_verified boolean not null default false,
  phone_verified boolean not null default false,
  member_status text not null default 'pending_verification',
  created_at timestamptz not null default now()
 )`);
 await pool.query(`create table if not exists sessions(
  id bigserial primary key,
  user_id uuid not null references users(id) on delete cascade,
  token_hash text unique not null,
  created_at timestamptz not null default now(),
  expires_at timestamptz not null
 )`);
 await pool.query(`create table if not exists visits(
  id bigserial primary key,
  visitor_key text not null,
  path text not null default '/',
  is_member boolean not null default false,
  created_at timestamptz not null default now()
 )`);
 await pool.query('create index if not exists idx_visits_created_at on visits(created_at)');
}

async function auth(req){
 if(!pool)return null;
 const h=req.headers.authorization||'';
 if(!h.startsWith('Bearer '))return null;
 const t=h.slice(7);
 const r=await pool.query(`select u.id,u.email,u.phone,u.display_name,u.member_status,u.email_verified,u.phone_verified
 from sessions s join users u on u.id=s.user_id
 where s.token_hash=$1 and s.expires_at>now() and u.member_status='active'`,[tokenHash(t)]);
 return r.rows[0]||null;
}

async function handler(req,res){
 if(req.method==='OPTIONS')return json(res,204,{});
 try{
  if(await providerAuth.handle(req,res,json))return;
  if(req.url==='/health'&&req.method==='GET'){
   let db=false;if(pool){try{await pool.query('select 1');db=true}catch{}}
   return json(res,200,{ok:true,service:'asharf-ul-makhlook-api',databaseConnected:db});
  }

  if(req.url==='/api/public/stats'&&req.method==='GET'){
   if(!pool)return json(res,200,{visitors:null,databaseConnected:false});
   const v=await pool.query(`select
      count(distinct visitor_key)::int total,
      count(distinct visitor_key) filter(where created_at>=current_date)::int today,
      count(distinct visitor_key) filter(where created_at>=now()-interval '7 days')::int week
      from visits`);
   return json(res,200,{databaseConnected:true,visitors:v.rows[0]});
  }

  if(req.url==='/api/member/stats'&&req.method==='GET'){
   if(!pool)return json(res,503,{error:'database_not_connected'});
   const u=await auth(req);if(!u)return json(res,401,{error:'unauthorized'});
   const [m,a]=await Promise.all([
    pool.query(`select count(*)::int total,
      count(*) filter(where created_at>=current_date)::int new_today,
      count(*) filter(where created_at>=now()-interval '7 days')::int new_week
      from users where member_status='active'`),
    pool.query(`select count(distinct user_id)::int active_week from sessions where created_at>=now()-interval '7 days'`)
   ]);
   return json(res,200,{members:{...m.rows[0],activeWeek:a.rows[0].active_week}});
  }

  if(req.url==='/api/visit'&&req.method==='POST'){
   if(!pool)return json(res,503,{error:'database_not_connected'});
   const b=await readBody(req),key=String(b.visitorKey||'').slice(0,120);
   if(!key)return json(res,400,{error:'visitor_key_required'});
   const u=await auth(req);
   await pool.query('insert into visits(visitor_key,path,is_member) values($1,$2,$3)',[key,String(b.path||'/').slice(0,500),!!u]);
   return json(res,201,{ok:true});
  }

  if(req.url==='/api/auth/register'&&req.method==='POST'){
   if(!pool)return json(res,503,{error:'database_not_connected'});
   const b=await readBody(req),email=normEmail(b.email),phone=cleanPhone(b.phone),name=String(b.displayName||'').trim().slice(0,80),password=String(b.password||'');
   if(!/^\S+@\S+\.\S+$/.test(email)||email.length>160||!/^\+?[0-9]{8,15}$/.test(phone)||!name||password.length<10||password.length>128)return json(res,400,{error:'valid_email_phone_name_and_10_char_password_required'});
   const hp=hashPassword(password);
   try{
    const r=await pool.query(`insert into users(email,phone,display_name,password_salt,password_hash)
      values($1,$2,$3,$4,$5)
      returning id,email,phone,display_name,member_status,email_verified,phone_verified,created_at`,
      [email,phone,name,hp.salt,hp.hash]);
    return json(res,201,{user:r.rows[0],verificationRequired:true,smsConnected:false,emailVerificationConnected:false});
   }catch(e){if(e.code==='23505')return json(res,409,{error:'account_already_exists'});throw e}
  }

  if(req.url==='/api/auth/login'&&req.method==='POST'){
   if(!pool)return json(res,503,{error:'database_not_connected'});
   const b=await readBody(req),email=normEmail(b.email),password=String(b.password||'');
   if(!email||password.length>128)return json(res,401,{error:'invalid_credentials'});
   const r=await pool.query('select * from users where email=$1',[email]),u=r.rows[0];
   if(!u)return json(res,401,{error:'invalid_credentials'});
   const hp=hashPassword(password,u.password_salt);
   if(typeof u.password_hash!=='string'||u.password_hash.length!==hp.hash.length||!crypto.timingSafeEqual(Buffer.from(hp.hash),Buffer.from(u.password_hash)))return json(res,401,{error:'invalid_credentials'});
   if(u.member_status!=='active')return json(res,403,{error:'verification_required',phoneVerified:u.phone_verified,emailVerified:u.email_verified});
   const t=token();
   await pool.query(`insert into sessions(user_id,token_hash,expires_at) values($1,$2,now()+interval '30 days')`,[u.id,tokenHash(t)]);
   return json(res,200,{token:t,user:{id:u.id,email:u.email,phone:u.phone,displayName:u.display_name}});
  }

  if(req.url==='/api/auth/logout'&&req.method==='POST'){
   if(!pool)return json(res,503,{error:'database_not_connected'});
   const h=req.headers.authorization||'';
   if(!h.startsWith('Bearer ')||h.length<=7)return json(res,401,{error:'unauthorized'});
   await pool.query('delete from sessions where token_hash=$1',[tokenHash(h.slice(7))]);
   return json(res,200,{ok:true});
  }

  if(req.url==='/api/me'&&req.method==='GET'){
   const u=await auth(req);
   return u?json(res,200,{user:u}):json(res,401,{error:'unauthorized'});
  }

  return json(res,404,{error:'not_found'});
 }catch(e){
  if(e instanceof SyntaxError)return json(res,400,{error:'invalid_json'});
  console.error('API request failed',e.code||e.name||'unknown');
  return json(res,500,{error:'server_error'});
 }
}

init().then(()=>http.createServer(handler).listen(PORT,()=>console.log('Asharf API listening on '+PORT))).catch(e=>{console.error('startup',e);process.exit(1)});
