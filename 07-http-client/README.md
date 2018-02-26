## HTTP CLIENT (Exercise 7 of 13)
```js
require('http').get(process.argv[2],r=>r.on('data',d=>console.log(''+d)))
```
