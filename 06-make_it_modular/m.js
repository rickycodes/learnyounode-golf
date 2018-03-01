module.exports=(a,b,c)=>
  require('fs').readdir(a,(e,f)=>c(e,e?null:f.filter(f=>f.endsWith('.'+b))))
