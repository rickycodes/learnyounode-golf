#### learnyounode as code golf ⛳

my attempt at solving [`learnyounode`](https://github.com/workshopper/learnyounode) with the least amount of code possible

#### why?

for fun!

#### notes
- drop spaces and semicolons where possible
- drop `var`,`let`,`const`,`new`,`function` keywords where possible
- make use of one letter variable names, eg: `a=[]`
- utilize ternary and `&&` to do ["FP"](https://en.wikipedia.org/wiki/Functional_programming) _things_, eg: `x&&y()` vs `if(x)y()`
- concat vs using `toString()`, eg: `''+d` vs `d.toString()`
- `+` vs `Number()`, eg: `+'200'` vs `Number('200')`
- store as ref if something is being used more than once, eg: `l=console.log;l(a);l(b)`
- consider above when accessing object methods, eg: `f='forEach';a[f](a=>…);b[f](b=>…)`
- use node internals, eg: `.Server()` vs `.createServer()`
- use multiple lines if the column gets too wide
- loose equality vs strict
- replace `true` and `false` with `1` and `0`

#### can you do better?
make a PR!
