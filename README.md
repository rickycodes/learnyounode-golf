[![build status](https://api.travis-ci.org/rickycodes/learnyounode-golf.svg?branch=master)](https://travis-ci.org/rickycodes/learnyounode-golf/) [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

## Learnyounode as code golf ⛳

My attempt at solving [`learnyounode`](https://github.com/workshopper/learnyounode) with the least amount of code possible

![](https://media.giphy.com/media/Zn7rsVqBTPAly/giphy.gif)

### Why?

For fun!

### Notes
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

### Contributing

Can you do better? Make a PR! If you can get the solutions down to less characters, be sure to run `npm run build:mock && npm run test:mock && npm run test:solutions` (this will create a new mock file with character counts and ensure both tests pass!). After that be sure to run `npm run build:readmes` to generate new README.md files for your newly added solutions.

### Tests

run all tests:  
`npm t`

test all solutions:  
`npm run test:solutions`

test character counts:  
`npm run test:mock`

### License

MIT License

Copyright © 2018 Ricky Miller

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
