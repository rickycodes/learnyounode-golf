## HTTP UPPERCASERER (Exercise 12 of 13)
```js
r=require;r('http').Server((_,s)=>
  _.pipe(r('through2-map')(c=>(''+c).toUpperCase())).pipe(s)
).listen(process.argv[2])
```
