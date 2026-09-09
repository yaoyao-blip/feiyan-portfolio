const http = require('http');
const fs = require('fs');
const path = require('path');
const root = __dirname;
const mime = {'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.webp':'image/webp','.jpg':'image/jpeg','.png':'image/png','.mp4':'video/mp4','.svg':'image/svg+xml','.ico':'image/x-icon'};
http.createServer((req,res)=>{
  let pathname;
  try { pathname=decodeURIComponent(new URL(req.url,'http://localhost').pathname); } catch {res.writeHead(400).end();return;}
  const target=path.resolve(root,'.'+(pathname==='/'?'/index.html':pathname));
  if(target!==root&&!target.startsWith(root+path.sep)){res.writeHead(403).end();return;}
  fs.stat(target,(err,stat)=>{
    if(err||!stat.isFile()){res.writeHead(404).end('Not found');return;}
    const headers={'Content-Type':mime[path.extname(target)]||'application/octet-stream','Cache-Control':'no-cache','Accept-Ranges':'bytes'};
    let start=0,end=stat.size-1,status=200;
    if(req.headers.range){
      const range=/^bytes=(\d*)-(\d*)$/.exec(req.headers.range);
      if(!range||(!range[1]&&!range[2])){res.writeHead(416,{'Content-Range':`bytes */${stat.size}`}).end();return;}
      if(!range[1]){start=Math.max(0,stat.size-Number(range[2]));}
      else{start=Number(range[1]);if(range[2])end=Math.min(end,Number(range[2]));}
      if(!Number.isSafeInteger(start)||!Number.isSafeInteger(end)||start<0||start>=stat.size||end<start){res.writeHead(416,{'Content-Range':`bytes */${stat.size}`}).end();return;}
      headers['Content-Range']=`bytes ${start}-${end}/${stat.size}`;status=206;
    }
    headers['Content-Length']=Math.max(0,end-start+1);res.writeHead(status,headers);
    if(req.method==='HEAD'||stat.size===0){res.end();return;}
    const stream=fs.createReadStream(target,{start,end});stream.on('error',()=>res.destroy());res.on('close',()=>stream.destroy());stream.pipe(res);
  });
}).listen(4173,'127.0.0.1',()=>console.log('Portfolio ready: http://localhost:4173'));
