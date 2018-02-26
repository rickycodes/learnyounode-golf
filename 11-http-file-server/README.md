## HTTP FILE SERVER (Exercise 11 of 13)
```js
r=require;a=process.argv;r('http').Server((_,s)=>
  s.writeHead(200)&r('fs').ReadStream(a[3]).pipe(s)
).listen(a[2])
```
