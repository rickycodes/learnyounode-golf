module.exports=(a,b,c)=>
  require('fs').readdir(a,(_,f)=>_?c(_):c(null,f.filter(f=>RegExp('.'+b)
  .test(f))))
