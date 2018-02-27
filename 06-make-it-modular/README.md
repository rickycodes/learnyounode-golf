## MAKE IT MODULAR (Exercise 6 of 13)
m.js:  
```js
module.exports=(a,b,c)=>require('fs').readdir(a,(_,f)=>_?c(_):c(null,f.filter(f=>~f.indexOf('.'+b))))
```
index.js:  
```js
a=process.argv,m=require('./m');m(a[2],a[3],(_,l)=>l.map(f=>console.log(f)))
```
