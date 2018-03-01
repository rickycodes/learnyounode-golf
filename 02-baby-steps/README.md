## BABY STEPS (Exercise 2 of 13)

  Write a program that accepts one or more numbers as command-line arguments
  and prints the sum of those numbers to the console (stdout).

## ANSWER

```js
s=0,process.argv.slice(2).map(v=>s+=+v),console.log(s)
```
