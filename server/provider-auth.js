const crypto=require('node:crypto');
const DEFINITIONS={
 google:{label:'Google',prefix:'GOOGLE',discovery:'https://accounts.google.com/.well-known/openid-configuration'},
 microsoft:{label:'Microsoft (Hotmail / Outlook)',prefix:'MICROSOFT',discovery:'https://login.microsoftonline.com/consumers/v2.0/.well-known/openid-configuration'},
 apple:{label:'Apple',prefix:'APPLE',discovery:'https://appleid.apple.com/.well-known/openid-configuration'}
};
const hash=v=>crypto.createHash('sha256').update(v).digest('hex');
const random=()=>crypto.randomBytes(32).toString('base64url');
function safeOrigin(v){try{const u=new URL(v);return u.protocol==='https:'&&!u.username&&!u.password&&u.pathname==='/'&&!u.search&&!u.hash?u.origin:null}catch{return null}}
function cookieName(id){return '__Host-asharf_oidc_'+id}
function cookieValue(req,id){const parts=String(req.headers.cookie||'').split(';').map(s=>s.trim()).filter(s=>s.startsWith(cookieName(id)+'='));return parts.length===1?parts[0].slice(cookieName(id).length+1):''}
function cookie(id,value,expire=false){return cookieName(id)+'='+value+'; Path=/; HttpOnly; Secure; SameSite=None; Max-Age='+(expire?0:600)}
async function formBody(req){let body='';for await(const c of req){body+=c;if(Buffer.byteLength(body)>65536)throw Error('body_limit')}return body}
function createProviderAuth({env=process.env,loadOIDC=()=>import('openid-client'),now=()=>Date.now(),maxFlows=400,flowStore}={}){
 const apiOrigin=safeOrigin(env.OAUTH_PUBLIC_ORIGIN||'https://asharf-ul-makhlook-api.onrender.com');
 const frontOrigin=safeOrigin(env.FRONTEND_ORIGIN||'https://asharf-ul-makhlook.onrender.com');
 const configs=new Map(),ttl=600000;
 const store=flowStore||{kind:'unavailable',ready:async()=>false};
 function providerSettings(id){const d=DEFINITIONS[id];if(!Object.hasOwn(DEFINITIONS,id))return null;const clientId=env[d.prefix+(id==='apple'?'_SERVICES_ID':'_CLIENT_ID')],secret=env[d.prefix+'_CLIENT_SECRET'];return {...d,id,clientId,secret,configured:!!(clientId&&secret&&apiOrigin&&frontOrigin),enabled:env.OAUTH_PROVIDER_PROOF_ENABLED==='true',callback:apiOrigin?apiOrigin+'/api/auth/provider/'+id+'/callback':null}}
 async function status(){const storageReady=await store.ready();return {transactionStorage:{kind:store.kind,ready:storageReady},mode:'identity_check_only',membershipSignupConnected:false,phoneVerificationRequired:true,providers:Object.keys(DEFINITIONS).map(id=>{const p=providerSettings(id);return {id,label:p.label,configured:p.configured,enabled:p.enabled,available:p.configured&&p.enabled&&storageReady,status:p.configured&&p.enabled&&storageReady?'identity_check_only':'not_connected'}})}}
 async function configFor(p){if(configs.has(p.id))return configs.get(p.id);const oidc=await loadOIDC();const config=await oidc.discovery(new URL(p.discovery),p.clientId,p.secret);oidc.enableNonRepudiationChecks(config);configs.set(p.id,{oidc,config});return {oidc,config}}
 function reply(res,json,status,data,extra={}){json(res,status,data,{'cache-control':'no-store','referrer-policy':'no-referrer',...extra})}
 function returned(res,id,result){const location=frontOrigin+'/?provider_result='+result+'&provider='+id+'#cloudAccount';res.writeHead(303,{'location':location,'set-cookie':cookie(id,'',true),'cache-control':'no-store','referrer-policy':'no-referrer'});res.end()}
 async function handle(req,res,json){
  let url;try{url=new URL(req.url,'https://internal.invalid')}catch{if(String(req.url).startsWith('/api/auth/provider')){reply(res,json,400,{error:'invalid_provider_request'});return true}return false}
  if(url.pathname==='/api/auth/providers'){
   if(req.method!=='GET')reply(res,json,405,{error:'method_not_allowed'});else reply(res,json,200,await status());return true;
  }
  if(!url.pathname.startsWith('/api/auth/provider/'))return false;
  const match=url.pathname.match(/^\/api\/auth\/provider\/(google|microsoft|apple)\/(start|callback)$/);
  if(!match){reply(res,json,404,{error:'unknown_provider_route'});return true}
  const [,id,action]=match,p=providerSettings(id);
  if(!p.configured||!p.enabled){reply(res,json,503,{error:'provider_not_connected',provider:id,membershipActivated:false});return true}
  if(action==='start'){
   if(req.method!=='GET'){reply(res,json,405,{error:'method_not_allowed'});return true}
   if(!await store.ready()){reply(res,json,503,{error:'provider_storage_unavailable',membershipActivated:false});return true}
   try{
    const {oidc,config}=await configFor(p),state=random(),browser=random(),nonce=random(),verifier=oidc.randomPKCECodeVerifier();
    const parameters={redirect_uri:p.callback,response_type:'code',scope:'openid email',state,nonce,code_challenge:await oidc.calculatePKCECodeChallenge(verifier),code_challenge_method:'S256'};
    if(id==='apple')parameters.response_mode='form_post';
    const redirect=oidc.buildAuthorizationUrl(config,parameters);
    if(redirect.protocol!=='https:')throw Error('invalid_redirect');
    if(!await store.create(hash(state),{id,browser:hash(browser),nonce,verifier,expires:now()+ttl},maxFlows,now())){reply(res,json,429,{error:'provider_flow_capacity'});return true}
    res.writeHead(302,{'location':redirect.href,'set-cookie':cookie(id,browser),'cache-control':'no-store','referrer-policy':'no-referrer'});res.end();
   }catch{reply(res,json,502,{error:'provider_setup_or_network_error',provider:id,membershipActivated:false})}
   return true;
  }
  if(!['GET','POST'].includes(req.method)){reply(res,json,405,{error:'method_not_allowed'});return true}
  let consumed=false;
  try{
   let callback=new URL(p.callback),params;
   if(req.method==='POST'){if(!String(req.headers['content-type']||'').startsWith('application/x-www-form-urlencoded'))throw Error('invalid_form');params=new URLSearchParams(await formBody(req))}
   else params=url.searchParams;
   const state=params.get('state')||'',browser=cookieValue(req,id);
   if(params.getAll('state').length!==1||!/^[A-Za-z0-9_-]{43}$/.test(state)||!/^[A-Za-z0-9_-]{43}$/.test(browser))throw Error('invalid_state');
   const flow=await store.consume(hash(state),id,hash(browser),now());
   if(!flow)throw Error('invalid_state');
   consumed=true; // A matching callback consumes its state once, including cancellation/error.
   if(params.has('error')){returned(res,id,params.get('error')==='access_denied'?'cancelled':'failed');return true}
   if(params.getAll('code').length!==1||!params.get('code')||params.get('code').length>8192)throw Error('missing_code');
   let response;
   if(req.method==='POST')response=new Request(callback,{method:'POST',headers:{'content-type':'application/x-www-form-urlencoded'},body:params.toString()});
   else{callback.search=params.toString();response=callback}
   const {oidc,config}=await configFor(p);
   const tokens=await oidc.authorizationCodeGrant(config,response,{pkceCodeVerifier:flow.verifier,expectedState:state,expectedNonce:flow.nonce,idTokenExpected:true});
   const claims=tokens.claims();
   if(!claims||typeof claims.sub!=='string'||!claims.sub||typeof claims.iss!=='string'||!claims.iss)throw Error('identity_missing');
   // Deliberately no user/session creation, email-based linking, persistence or token disclosure.
   returned(res,id,'verification_pending');
  }catch{reply(res,json,400,{error:'provider_callback_rejected',provider:id,membershipActivated:false},consumed?{'set-cookie':cookie(id,'',true)}:{})}
  return true;
 }
 return {handle,status};
}
module.exports={createProviderAuth,safeOrigin};
