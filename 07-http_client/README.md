### HTTP CLIENT (Exercise 7 of 13)
#### Problem:
Write a program that performs an HTTP GET request to a URL provided to you as the first command-line argument. Write the String contents of **each** "data" event from the response to a new line on the console (stdout).

#### Solution:
index.js
```js
require('http').get(process.argv[2],r=>r.on('data',d=>console.log(''+d)))
```
