### HTTP COLLECT (Exercise 8 of 13)
#### Problem:
Write a program that performs an HTTP GET request to a URL provided to you as the first command-line argument. Collect **all** data from the server (not just the first "data" event) and then write two lines to the console (stdout).

The first line you write should just be an integer representing the number of characters received from the server. The second line should contain the complete String of characters sent by the server.

#### Solution:
index.js
```js
s='';require('http')
.get(process.argv[2],r=>r.on('data',d=>s+=d).on('end',_=>console.log(s.length+`
`+s)))
```
