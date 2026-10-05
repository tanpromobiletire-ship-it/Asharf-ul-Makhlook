'use strict';
const SID={account:/^AC[0-9a-f]{32}$/i,key:/^SK[0-9a-f]{32}$/i,service:/^VA[0-9a-f]{32}$/i,verification:/^VE[0-9a-f]{32}$/i};
class VerificationError extends Error{constructor(code,status=503){super(code);this.code=code;this.status=status}}
function createContactProvider({env=process.env,fetchImpl=global.fetch}={}){
 const account=env.TWILIO_ACCOUNT_SID||'',key=env.TWILIO_API_KEY||'',secret=env.TWILIO_API_SECRET||'',service=env.TWILIO_VERIFY_SERVICE_SID||'';
 const configured=SID.account.test(account)&&SID.key.test(key)&&typeof secret==='string'&&secret.length>=20&&secret.length<=200&&SID.service.test(service);
 const flags={sms:env.TWILIO_VERIFY_SMS_ENABLED==='true',email:env.TWILIO_VERIFY_EMAIL_ENABLED==='true'};
 const prefixes=String(env.VERIFY_SMS_PREFIXES||'+1').split(',').map(s=>s.trim()).filter(s=>/^\+[1-9][0-9]{0,3}$/.test(s));
 function available(channel){return configured&&flags[channel]===true}
 function validate(channel,to){if(!available(channel))throw new VerificationError('verification_not_connected');if(channel==='sms'&&(!/^\+[1-9][0-9]{7,14}$/.test(to)||!prefixes.some(p=>to.startsWith(p))))throw new VerificationError('phone_country_not_enabled',400);if(channel==='email'&&(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(to)||to.length>160))throw new VerificationError('invalid_destination',400)}
 async function request(path,body){let r;try{r=await fetchImpl('https://verify.twilio.com/v2/Services/'+service+'/'+path,{method:'POST',redirect:'error',headers:{Authorization:'Basic '+Buffer.from(key+':'+secret).toString('base64'),'Content-Type':'application/x-www-form-urlencoded'},body:new URLSearchParams(body).toString(),signal:AbortSignal.timeout(10000)})}catch{throw new VerificationError('verification_provider_unavailable')}
  if(!r.ok){if(r.status===429)throw new VerificationError('verification_rate_limited',429);if(r.status===404&&path==='VerificationCheck')throw new VerificationError('verification_expired',410);throw new VerificationError('verification_provider_unavailable')}
  let data;try{data=await r.json()}catch{throw new VerificationError('verification_provider_unavailable')}return data;
 }
 function binding(d,channel,to,sid){return d&&SID.verification.test(d.sid)&&(!sid||d.sid===sid)&&d.service_sid===service&&d.account_sid===account&&d.channel===channel&&typeof d.to==='string'&&(channel==='email'?d.to.toLowerCase()===to.toLowerCase():d.to===to)}
 return{readiness:()=>({provider:'Twilio Verify',configured,channels:{sms:available('sms'),email:available('email')},emailSetupRequired:'Configure the SendGrid integration in the Verify service'}),validate,
  async start(channel,to){validate(channel,to);const d=await request('Verifications',{To:to,Channel:channel});if(!binding(d,channel,to)||d.status!=='pending')throw new VerificationError('verification_provider_unavailable');return{sid:d.sid}},
  async check(channel,to,sid,code){validate(channel,to);if(!SID.verification.test(sid)||!/^\d{4,10}$/.test(code))throw new VerificationError('invalid_verification_input',400);const d=await request('VerificationCheck',{VerificationSid:sid,Code:code});if(!binding(d,channel,to,sid))throw new VerificationError('verification_provider_unavailable');if(d.status==='approved')return{approved:true};if(d.status==='pending')return{approved:false};throw new VerificationError('verification_expired',410)}
 };
}
module.exports={createContactProvider,VerificationError};
