### MAKE IT MODULAR (Exercise 6 of 13)
#### Problem:
This problem is the same as the previous but introduces the concept of **modules**. You will need to create two files to solve this.

Create a program that prints a list of files in a given directory, filtered by the extension of the files. The first argument is the directory name and the second argument is the extension filter. Print the list of files (one file per line) to the console. You **must** use asynchronous I/O.

You must write a *module* file to do most of the work. The module must *export* a single function that takes **three** arguments: the directory name, the filename extension string and a callback function, in that order. The filename extension argument must be the same as what was passed to your program. Don't turn it into a RegExp or prefix with "." or do anything except pass it to your module where you can do what you need to make your filter work.

The callback function must be called using the idiomatic node(err, data) convention. This convention stipulates that unless there's an error, the first argument passed to the callback will be null, and the second will be your data. In this exercise, the data will be your filtered list of files, as an Array. If you receive an error, e.g. from your call to  `fs.readdir()`, the callback must be called with the error, and only the error, as the first argument.

You **must** not print directly to the console from your module file, only from your original program.

In the case of an error bubbling up to your original program file, simply check for it and print an informative message to the console.

These four things are the contract that your module must follow.

1. Export a single function that takes exactly the arguments described.
2. Call the callback exactly once with an error or some data as described.
3. Don't change anything else, like global variables or stdout.
4. Handle all the errors that may occur and pass them to the callback.

The benefit of having a contract is that your module can be used by anyone who expects this contract. So your module could be used by anyone else who does learnyounode, or the verifier, and just work.

#### Solution:
index.js
```js
a=process.argv;require('./m')(a[2],a[3],(_,l)=>l.map(f=>console.log(f)))
```
m.js
```js
module.exports=(a,b,c)=>
  require('fs').readdir(a,(e,f)=>c(e,e?null:f.filter(f=>f.endsWith('.'+b))))
```
