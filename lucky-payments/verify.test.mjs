import test from 'node:test';
import assert from 'node:assert/strict';
import {createHmac} from 'node:crypto';
import {verifyYandexSignature,inspectPurchase} from './verify.mjs';
const secret='only-a-test-secret';
function signed(data){const raw=Buffer.from(JSON.stringify(data));return createHmac('sha256',secret).update(raw).digest('base64')+'.'+raw.toString('base64')}
const purchase={algorithm:'HMAC-SHA256',issuedAt:1790000000,data:{token:'token-123456789',status:'success',product:{id:'vip_gold'}}};
test('valid signature and recognized completed product',()=>{
 assert.deepEqual(inspectPurchase(verifyYandexSignature(signed(purchase),secret),['vip_gold']),{token:'token-123456789',productId:'vip_gold'});
});
test('wrong secret is rejected',()=>assert.throws(()=>verifyYandexSignature(signed(purchase),'bad'),/Invalid signature/));
test('tampered payload is rejected',()=>assert.throws(()=>verifyYandexSignature(signed(purchase).replace('vip','other'),secret)));
test('non-success purchase is rejected',()=>assert.throws(()=>inspectPurchase(verifyYandexSignature(signed({...purchase,data:{...purchase.data,status:'waiting'}}),secret),['vip_gold']),/not confirmed/));
test('unknown product is rejected',()=>assert.throws(()=>inspectPurchase(purchase,['vip_silver']),/Unknown product/));
test('purchase list cannot masquerade as single purchase',()=>assert.throws(()=>inspectPurchase({...purchase,data:[purchase.data]},['vip_gold']),/single purchase/));
