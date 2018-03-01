## HTTP COLLECT (Exercise 8 of 13)
```js
s='';require('http')
  .get(process.argv[2],r=>r.on('data',d=>s+=d).on('end',_=>console.log(s.length+'\n'+s)))
```
