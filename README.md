#### learnyounode as code golf ⛳

my attempt at solving [`learnyounode`](https://github.com/workshopper/learnyounode) with the least amount of code possible

#### why?

for fun!

#### notes
- kill spaces and semicolons where possible
- make use of one letter variable names, eg: `a=[]`
- drop `var`,`let`,`const`,`new` keywords where possible
- utilize ternary and `&&` to do ["FP"](https://en.wikipedia.org/wiki/Functional_programming) _things_
- concat vs using `toString()`, eg: `''+d` vs `d.toString()`
- store as ref if something is being used more than once, eg: `l=console.log;l(a);l(b)`
- consider above when accessing object methods, eg: `f='map';a[f](a=>…);b[f](b=>…)`
- use multiple lines if the column gets too wide
- loose equality vs strict

#### can you do better?
make a PR!
