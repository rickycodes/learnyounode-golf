## HTTP FILE SERVER (Exercise 11 of 13)

  Write an HTTP **server** that serves the same text file for each request it
  receives.

  Your server should listen on the port provided by the first argument to
  your program.

  You will be provided with the location of the file to serve as the second
  command-line argument. You **must** use the `fs.createReadStream()` method to
  stream the file contents to the response.

## ANSWER

```js
r=require;a=process.argv;r('http').Server((_,s)=>
  s.writeHead(200)&r('fs').ReadStream(a[3]).pipe(s)
).listen(a[2])
```
