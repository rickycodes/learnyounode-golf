### HTTP UPPERCASERER (Exercise 12 of 13)
#### Problem:
Write an HTTP **server** that receives only POST requests and converts incoming POST body characters to upper-case and returns it to the client.

Your server should listen on the port provided by the first argument to your program.

#### Solution:
index.js
```js
r=require;r('http').Server((_,s)=>
_.pipe(r('through2-map')(c=>(''+c).toUpperCase())).pipe(s)
).listen(process.argv[2])
```
