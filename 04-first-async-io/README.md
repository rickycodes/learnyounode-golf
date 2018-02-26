## MY FIRST ASYNC I/O! (Exercise 4 of 13)
```js
require('fs')
  .readFile(process.argv[2],(_,d)=>console.log(--(''+d).split('\n').length))
```
