module:  
```js
module.exports=(a,b,c)=>require('fs').readdir(a,(_,f)=>_?c(_):c(null,f.filter(f=>RegExp('.'+b).test(f))))
```
index:  
```js
a=process.argv,m=require('./m');m(a[2],a[3],(_,l)=>l&&l.map(f=>console.log(f)))
```
