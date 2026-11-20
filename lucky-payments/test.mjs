import test from 'node:test';
import assert from 'node:assert/strict';
import {spawn} from 'node:child_process';

test('staging endpoints never grant purchases', async()=>{
  const port=39177;
  const child=spawn(process.execPath,['server.mjs'],{cwd:new URL('.',import.meta.url),env:{...process.env,PORT:String(port)}});
  try {
    let health;
    for(let n=0;n<40;n++){
      try{health=await fetch('http://127.0.0.1:'+port+'/health');break}catch{await new Promise(r=>setTimeout(r,50))}
    }
    assert.ok(health,'server should start');
    const h=await health.json();assert.equal(h.checkoutEnabled,false);
    assert.equal(h.entitlementsEnabled,false);
    const p=await fetch('http://127.0.0.1:'+port+'/api/purchase',{method:'POST'});
    assert.equal(p.status,503);
    const e=await fetch('http://127.0.0.1:'+port+'/api/entitlements/sync',{method:'POST'});
    assert.equal(e.status,503);
  } finally {child.kill()}
});
