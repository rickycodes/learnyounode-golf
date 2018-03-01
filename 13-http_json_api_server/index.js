q=require;q('http').Server((_,s)=>{
  t=new Date(q('url').parse(u=_.url,1).query.iso)
  r=(/^\/api\/parsetime/.test(u))&&({
    hour:t.getHours(),
    minute:t.getMinutes(),
    second:t.getSeconds()
  })||(/^\/api\/unixtime/.test(u))&&({
    unixtime:t.getTime()
  })
  r?s.end(JSON.stringify(r)):s.end()
}).listen(process.argv[2])
