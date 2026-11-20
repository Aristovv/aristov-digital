import http from 'node:http';

// Fail closed: deployment itself does not activate payments or grant entitlements.
// Signed Yandex purchase payload format, player-account binding, and durable storage
// must be verified before checkout can be enabled.
const port = Number(process.env.PORT || 3000);
const allowOrigin = process.env.ALLOWED_ORIGIN || '';
const products = Object.freeze([
  'vip_silver','vip_gold','vip_diamond','golden_skyscraper','diamond_tower',
  'royal_casino','neon_legend','royal_elite','black_card','premium_pack',
  'starter_pack','lucky_pass'
]);
const json = (res,status,payload,extra={}) => {
  res.writeHead(status, {'Content-Type':'application/json; charset=utf-8','Cache-Control':'no-store','X-Content-Type-Options':'nosniff',...extra});
  res.end(JSON.stringify(payload));
};
const server=http.createServer((req,res)=>{
  if(req.method==='GET'&&req.url==='/health')return json(res,200,{status:'ok',app:'lucky-city-payments',mode:'staging',checkoutEnabled:false,entitlementsEnabled:false});
  if(req.method==='GET'&&req.url==='/api/catalog')return json(res,200,{products,checkoutEnabled:false,mode:'staging'});
  if(req.method==='OPTIONS'&&req.url==='/api/entitlements/sync'){
    if(!allowOrigin||req.headers.origin!==allowOrigin)return json(res,403,{error:'Origin not allowed'});
    res.writeHead(204,{'Access-Control-Allow-Origin':allowOrigin,'Access-Control-Allow-Methods':'POST, OPTIONS','Access-Control-Allow-Headers':'content-type','Vary':'Origin'});return res.end();
  }
  if(req.url==='/api/entitlements/sync'||req.url==='/api/purchase')return json(res,503,{error:'Payments not enabled: secure validation and persistent storage are not configured'});
  return json(res,404,{error:'Not found'});
});
server.listen(port,'0.0.0.0');
