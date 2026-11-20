import {createHmac,timingSafeEqual} from 'node:crypto';

// Verifies the exact wire format documented by the Yandex Games SDK:
// base64(hmac_sha256(secret, decoded_json_bytes)).base64(json_bytes)
export function verifyYandexSignature(value,secret){
 if(typeof value!=='string'||value.length>131072||typeof secret!=='string'||!secret)throw Error('Invalid signature input');
 const parts=value.split('.');
 if(parts.length!==2||parts.some(x=>!x||!/^[A-Za-z0-9+/]+={0,2}$/.test(x)))throw Error('Invalid signature format');
 const [macB64,dataB64]=parts;
 const bytes=Buffer.from(dataB64,'base64');
 if(bytes.length===0||bytes.length>65536||bytes.toString('base64')!==dataB64)throw Error('Malformed signed data');
 const actual=Buffer.from(macB64,'base64');
 if(actual.length!==32||actual.toString('base64')!==macB64)throw Error('Malformed MAC');
 const expected=createHmac('sha256',secret).update(bytes).digest();
 if(!timingSafeEqual(expected,actual))throw Error('Invalid signature');
 let payload;
 try{payload=JSON.parse(bytes.toString('utf8'))}catch{throw Error('Invalid JSON')}
 if(!payload||payload.algorithm!=='HMAC-SHA256'||!Number.isFinite(payload.issuedAt))throw Error('Unexpected signed payload');
 return payload;
}

export function inspectPurchase(payload, allowedIds){
 if(!payload||Array.isArray(payload.data)||!payload.data||typeof payload.data!=='object')throw Error('Expected single purchase');
 const data=payload.data;
 const productId=data.product?.id;
 if(typeof data.token!=='string'||data.token.length<8||data.token.length>256)throw Error('Invalid token');
 if(typeof productId!=='string'||!allowedIds.includes(productId))throw Error('Unknown product');
 if(data.status!=='success')throw Error('Purchase is not confirmed');
 return {token:data.token,productId};
}
