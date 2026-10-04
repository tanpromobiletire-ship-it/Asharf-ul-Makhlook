const SOURCE='CoinGecko',TTL_MS=300000;
const ENDPOINTS=['https://api.coingecko.com/api/v3/exchange_rates','https://api.coingecko.com/api/v3/simple/price?ids=tether&vs_currencies=usd&include_last_updated_at=true'];
function decimalRational(value){if(typeof value!=='number'||!Number.isFinite(value)||value<=0||value>1e15)throw Error('invalid_rate');const [mantissa,expText='0']=String(value).toLowerCase().split('e'),exp=Number(expText),parts=mantissa.split('.');let n=BigInt(parts.join('')),d=10n**BigInt(parts[1]?.length||0);if(exp>0)n*=10n**BigInt(exp);if(exp<0)d*=10n**BigInt(-exp);return {n,d}}
function divided(a,b){return {n:String(a.n*b.d),d:String(a.d*b.n)}}
function normalizeRates(exchange,tether,now=Date.now()){const data=exchange?.rates;if(!data||!tether?.tether)throw Error('missing_rates');const usd=decimalRational(data.usd?.value),cad=decimalRational(data.cad?.value),mxn=decimalRational(data.mxn?.value),eth=decimalRational(data.eth?.value),btc=decimalRational(data.btc?.value),usdt=decimalRational(tether.tether.usd);if(data.usd.type!=='fiat'||data.cad.type!=='fiat'||data.mxn.type!=='fiat'||data.eth.type!=='crypto'||data.btc.value!==1)throw Error('invalid_rate_types');const updated=tether.tether.last_updated_at*1000;if(!Number.isFinite(updated)||updated>now+60000||now-updated>900000)throw Error('stale_source');return {source:SOURCE,sourceURLs:ENDPOINTS,retrievedAt:new Date(now).toISOString(),expiresAt:new Date(now+TTL_MS).toISOString(),usdtUpdatedAt:new Date(updated).toISOString(),unitsPerUSD:{USD:{n:'1',d:'1'},CAD:divided(cad,usd),MXN:divided(mxn,usd),BTC:divided(btc,usd),ETH:divided(eth,usd),USDT:divided({n:1n,d:1n},usdt)},method:'CAD/MXN/BTC/ETH use CoinGecko BTC cross-rates divided by its BTC/USD rate. USDT uses the reciprocal of CoinGecko tether/USD. No alternative provider or fixed USDT peg is substituted.'}}

const DIAGNOSTIC_CODES=['source_unavailable','access_required','access_refused','rate_limited','upstream_unavailable','network_timeout','network_unavailable','invalid_source_data','stale_source_data'];
const ENDPOINT_LABELS=['exchange_rates','tether_usd'];
function safeDiagnostic(value={}){value=value&&typeof value==='object'?value:{};return {code:DIAGNOSTIC_CODES.includes(value.code)?value.code:'source_unavailable',upstreamStatus:Number.isInteger(value.upstreamStatus)&&value.upstreamStatus>=400&&value.upstreamStatus<=599?value.upstreamStatus:null,endpoint:ENDPOINT_LABELS.includes(value.endpoint)?value.endpoint:null,retryAfterSeconds:Number.isInteger(value.retryAfterSeconds)?Math.max(1,Math.min(300,value.retryAfterSeconds)):30}}
class RateSourceError extends Error{constructor(diagnostic){super('rate_source_unavailable');this.name='RateSourceError';this.diagnostic=safeDiagnostic(diagnostic)}}
function publicRateFailure(error){return safeDiagnostic(error?.diagnostic)}
function retrySeconds(header,now){if(typeof header!=='string')return null;const value=/^\d+$/.test(header.trim())?Number(header):Math.ceil((Date.parse(header)-now)/1000);return Number.isFinite(value)&&value>0?Math.max(30,Math.min(300,Math.ceil(value))):null}
function statusCode(status){return status===401?'access_required':status===403?'access_refused':status===429?'rate_limited':status>=500?'upstream_unavailable':'source_unavailable'}
function createAdvertisingRates({fetchImpl=fetch,now=Date.now,apiKey='',onFailure=()=>{}}={}){
 let cached=null,inflight=null,lastFailure=null,failureCount=0;
 return {async get(){
  const time=now();if(cached&&Date.parse(cached.expiresAt)>time)return cached;
  if(inflight)return inflight;
  if(lastFailure&&time<lastFailure.retryAt)throw new RateSourceError({...lastFailure.diagnostic,retryAfterSeconds:Math.max(1,Math.ceil((lastFailure.retryAt-time)/1000))});
  inflight=(async()=>{try{
   const options={headers:apiKey?{'x-cg-demo-api-key':apiKey}:{},signal:AbortSignal.timeout(12000)};
   const settled=await Promise.allSettled(ENDPOINTS.map(url=>fetchImpl(url,options)));
   const failures=settled.flatMap((part,i)=>part.status==='rejected'?[{code:['TimeoutError','AbortError'].includes(part.reason?.name)?'network_timeout':'network_unavailable',endpoint:ENDPOINT_LABELS[i]}]:!part.value.ok?[{code:statusCode(part.value.status),upstreamStatus:part.value.status,endpoint:ENDPOINT_LABELS[i],retryAfterSeconds:retrySeconds(part.value.headers?.get?.('retry-after'),now())}]:[]);
   if(failures.length)throw new RateSourceError(failures[0]);
   let parts;try{parts=await Promise.all(settled.map(part=>part.value.json()))}catch{throw new RateSourceError({code:'invalid_source_data'})}
   try{cached=normalizeRates(...parts,now())}catch(error){throw new RateSourceError({code:error?.message==='stale_source'?'stale_source_data':'invalid_source_data'})}
   lastFailure=null;failureCount=0;return cached;
  }catch(error){
   const diagnostic=publicRateFailure(error);failureCount++;const base=diagnostic.code==='rate_limited'?60:30;
   diagnostic.retryAfterSeconds=Math.min(300,Math.max(diagnostic.retryAfterSeconds,base*2**Math.min(failureCount-1,4)));
   lastFailure={diagnostic,retryAt:now()+diagnostic.retryAfterSeconds*1000};
   try{onFailure({...diagnostic})}catch{}
   throw new RateSourceError(diagnostic);
  }finally{inflight=null}})();return inflight;
 }}
}
module.exports={createAdvertisingRates,normalizeRates,decimalRational,SOURCE,ENDPOINTS,TTL_MS,RateSourceError,publicRateFailure,retrySeconds};
