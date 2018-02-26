## HTTP COLLECT (Exercise 8 of 13)
```js
s='',l=console.log;require('http')
  .get(process.argv[2],r=>r.on('data',d=>s+=d).on('end',_=>l(s.length)&l(s)))
```
