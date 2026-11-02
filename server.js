'use strict';

// SearchLink 5.7 — optional event-ingest API starter.
// This is a deployable starter, NOT a claim of a hosted production service.
// For public deployment add managed storage, TLS, authentication, monitoring,
// backups and a secrets manager appropriate to your hosting platform.
const http = require('http');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const VERSION = '5.7';
const SCHEMA = 10;
const API = '/api/v1';
const PORT = Number(process.env.PORT || 8787);
const HOST = process.env.HOST || '0.0.0.0';
const DATA_DIR = process.env.DATA_DIR || path.join(__dirname, 'data');
const EVENTS_FILE = path.join(DATA_DIR, 'events.jsonl');
const MAX_BODY = 1024 * 1024;
const RATE_WINDOW = 60_000;
const RATE_LIMIT = Number(process.env.RATE_LIMIT || 120);
const CORS_ORIGIN = process.env.CORS_ORIGIN || '';
const ADMIN_TOKEN = process.env.ADMIN_TOKEN || '';
const hits = new Map();
fs.mkdirSync(DATA_DIR, { recursive: true });

const EVENT_TYPES = new Set(['search','partner_click','conversion','payout','copy','share','sync_attempt','sync_success','sync_error','export_json','export_csv','export_report_csv']);
function requestId(){ return crypto.randomUUID(); }
function securityHeaders(){ return {'X-Content-Type-Options':'nosniff','X-Frame-Options':'DENY','Referrer-Policy':'no-referrer','Permissions-Policy':'geolocation=(),camera=(),microphone=()','Cache-Control':'no-store'}; }
function json(res,status,body,extra={}){ const raw=JSON.stringify(body); res.writeHead(status,{'Content-Type':'application/json; charset=utf-8','Content-Length':Buffer.byteLength(raw),...securityHeaders(),...extra}); res.end(raw); }
function clientIp(req){ return String(req.headers['x-forwarded-for']||req.socket.remoteAddress||'unknown').split(',')[0].trim(); }
function originOk(req){ if(!CORS_ORIGIN)return true; const o=req.headers.origin; return !o || o===CORS_ORIGIN; }
function rateOk(req){ const now=Date.now(),key=clientIp(req); let x=hits.get(key); if(!x||now-x.start>=RATE_WINDOW)x={start:now,count:0}; x.count++; hits.set(key,x); if(hits.size>5000) for(const [k,v] of hits) if(now-v.start>=RATE_WINDOW)hits.delete(k); return x.count<=RATE_LIMIT; }
function parseBody(req){ return new Promise((resolve,reject)=>{let size=0,raw=''; req.on('data',c=>{size+=c.length;if(size>MAX_BODY){reject(new Error('Payload too large'));req.destroy();return;}raw+=c;});req.on('end',()=>{try{resolve(JSON.parse(raw||'{}'));}catch{reject(new Error('Invalid JSON'));}});req.on('error',reject);}); }
function validEvent(e){ return !!e && typeof e==='object' && typeof e.id==='string' && e.id.length>=8&&e.id.length<=120&&EVENT_TYPES.has(e.type)&&Number.isFinite(Number(e.at))&&Number(e.at)>0&&Number(e.at)<Date.now()+86400000&&typeof e.campaign==='string'&&e.campaign.length<=120&&(!e.partnerId||(typeof e.partnerId==='string'&&e.partnerId.length<=120))&&(!('amount'in e)||(e.amount===''||(Number.isFinite(Number(e.amount))&&Number(e.amount)>=0&&Number(e.amount)<=100000000))); }
function existingIds(){ const set=new Set(); if(!fs.existsSync(EVENTS_FILE))return set; for(const line of fs.readFileSync(EVENTS_FILE,'utf8').split('\n')){if(!line.trim())continue;try{const x=JSON.parse(line);if(x.id)set.add(x.id);}catch{}} return set; }
function adminOk(req){ if(!ADMIN_TOKEN)return false; return String(req.headers.authorization||'')===`Bearer ${ADMIN_TOKEN}`; }
function writeEvents(events){ fs.appendFileSync(EVENTS_FILE,events.map(e=>JSON.stringify(e)).join('\n')+'\n','utf8'); }
function route(req){ const u=new URL(req.url,`http://${req.headers.host||'localhost'}`); return {path:u.pathname,query:u.searchParams}; }

const server=http.createServer(async(req,res)=>{
  const rid=requestId();
  res.setHeader('X-Request-ID',rid);
  if(!originOk(req)) return json(res,403,{ok:false,error:'Origin not allowed',requestId:rid});
  if(req.method==='OPTIONS') return json(res,204,{} ,CORS_ORIGIN?{'Access-Control-Allow-Origin':CORS_ORIGIN,'Access-Control-Allow-Headers':'Content-Type,Accept,X-SearchLink-Client,Authorization','Access-Control-Allow-Methods':'GET,POST,OPTIONS'}:{});
  if(!rateOk(req)) return json(res,429,{ok:false,error:'Rate limit exceeded',requestId:rid});
  const {path:pathname,query}=route(req);
  const prefix=API;

  if(req.method==='GET'&&pathname===prefix+'/health') return json(res,200,{ok:true,service:'SearchLink API',version:VERSION,schema:SCHEMA,time:new Date().toISOString(),requestId:rid});
  if(req.method==='GET'&&pathname===prefix+'/ready'){
    let writable=true; try{fs.accessSync(DATA_DIR,fs.constants.W_OK);}catch{writable=false;}
    return json(res,writable?200:503,{ok:writable,service:'SearchLink API',storage:writable?'file':'unavailable',requestId:rid});
  }
  if(req.method==='GET'&&pathname===prefix+'/capabilities') return json(res,200,{ok:true,version:VERSION,schema:SCHEMA,eventIngest:true,idempotency:true,rateLimit:RATE_LIMIT,adminReports:Boolean(ADMIN_TOKEN),requestId:rid});

  if(req.method==='POST'&&pathname===prefix+'/events'){
    try{
      const payload=await parseBody(req);
      if(payload.app!=='SearchLink'||Number(payload.schema)!==SCHEMA||!Array.isArray(payload.events)) return json(res,400,{ok:false,error:'Invalid SearchLink event envelope',requestId:rid});
      if(payload.events.length>100)return json(res,413,{ok:false,error:'Maximum 100 events per batch',requestId:rid});
      if(payload.clientId&&String(payload.clientId).length>120)return json(res,400,{ok:false,error:'Invalid clientId',requestId:rid});
      const events=payload.events.map(e=>({...e,serverReceivedAt:new Date().toISOString()}));
      if(events.some(e=>!validEvent(e)))return json(res,400,{ok:false,error:'One or more events failed validation',requestId:rid});
      const ids=existingIds(),accepted=[],duplicate=[];
      for(const e of events){ if(ids.has(e.id))duplicate.push(e.id); else {ids.add(e.id);accepted.push(e);} }
      if(accepted.length)writeEvents(accepted);
      return json(res,200,{ok:true,requestId:rid,accepted:accepted.length,duplicates:duplicate.length,acceptedIds:accepted.map(e=>e.id),schema:SCHEMA});
    }catch(err){return json(res,400,{ok:false,error:String(err.message||err),requestId:rid});}
  }

  if(req.method==='GET'&&pathname===prefix+'/admin/summary'){
    if(!adminOk(req))return json(res,401,{ok:false,error:'Admin authentication required',requestId:rid});
    let events=[]; if(fs.existsSync(EVENTS_FILE)){for(const line of fs.readFileSync(EVENTS_FILE,'utf8').split('\n')){if(line.trim())try{events.push(JSON.parse(line));}catch{}}}
    const counts={}; for(const e of events)counts[e.type]=(counts[e.type]||0)+1;
    return json(res,200,{ok:true,requestId:rid,version:VERSION,schema:SCHEMA,totalEvents:events.length,counts});
  }
  return json(res,404,{ok:false,error:'Not found',requestId:rid});
});
server.listen(PORT,HOST,()=>console.log(`SearchLink ${VERSION} API listening on ${HOST}:${PORT}`));
