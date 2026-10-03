const SCHEMA=`create table if not exists provider_flows(
 state_hash text primary key, provider text not null,
 browser_hash text not null, nonce text not null, verifier text not null,
 expires_at timestamptz not null
)`;
function createMemoryFlowStore(){
 const rows=new Map();
 return {kind:'test_memory',async ready(){return true},async init(){},
 async create(key,flow,max,now){for(const[k,v]of rows)if(v.expires<=now)rows.delete(k);if(rows.size>=max)return false;if(rows.has(key))throw Error('duplicate flow');rows.set(key,{...flow});return true},
 async consume(key,id,browser,now){const f=rows.get(key);if(!f||f.id!==id||f.browser!==browser||f.expires<=now)return null;rows.delete(key);return {...f}}};
}
function createPostgresFlowStore(pool){
 return {kind:'postgres',async ready(){if(!pool)return false;try{await pool.query('select 1 from provider_flows limit 0');return true}catch{return false}},
 async init(){if(!pool)return;await pool.query(SCHEMA);await pool.query('create index if not exists idx_provider_flows_expiry on provider_flows(expires_at)');await pool.query('delete from provider_flows where expires_at<=now()')},
 async create(key,flow,max,now){
  if(!pool)throw Error('store unavailable');
  const c=await pool.connect();try{
   await c.query('BEGIN');
   await c.query('select pg_advisory_xact_lock(1462026)');
   await c.query('delete from provider_flows where expires_at<=to_timestamp($1/1000.0)',[now]);
   const count=await c.query('select count(*)::int total from provider_flows');
   if(count.rows[0].total>=max){await c.query('COMMIT');return false}
   await c.query('insert into provider_flows(state_hash,provider,browser_hash,nonce,verifier,expires_at) values($1,$2,$3,$4,$5,to_timestamp($6/1000.0))',[key,flow.id,flow.browser,flow.nonce,flow.verifier,flow.expires]);
   await c.query('COMMIT');return true;
  }catch(e){await c.query('ROLLBACK').catch(()=>{});throw e}finally{c.release()}
 },
 async consume(key,id,browser,now){
  if(!pool)throw Error('store unavailable');
  const r=await pool.query('delete from provider_flows where state_hash=$1 and provider=$2 and browser_hash=$3 and expires_at>to_timestamp($4/1000.0) returning provider as id,browser_hash as browser,nonce,verifier,extract(epoch from expires_at)*1000 as expires',[key,id,browser,now]);
  return r.rows[0]||null;
 }};
}
module.exports={createMemoryFlowStore,createPostgresFlowStore};
