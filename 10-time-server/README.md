## TIME SERVER (Exercise 10 of 13)
```js
u='-',z=i=>(i<10?'0':'')+i,d=new Date();require('net').createServer(s=>s.end(
  d.getFullYear()+u+z(d.getMonth()+1)+u+z(d.getDate())+' '
  +z(d.getHours())+':'+z(d.getMinutes())
+'\n')).listen(process.argv[2])
```
