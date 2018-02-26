## HTTP JSON API SERVER (Exercise 13 of 13)
```js
q=require;q('http').Server((_,s)=>{
  p=q('url').parse(_.url,1),t=new Date(p.query.iso),u=_.url
  r=(/^\/api\/parsetime/.test(u))&&({
    hour:t.getHours(),
    minute:t.getMinutes(),
    second:t.getSeconds()
  })||(/^\/api\/unixtime/.test(u))&&({
    unixtime:t.getTime()
  })
  r?s.end(JSON.stringify(r)):s.end()
}).listen(process.argv[2])
```
