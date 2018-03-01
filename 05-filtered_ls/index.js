a=process.argv;require('fs')
  .readdir(a[2],(_,f)=>f.map(f=>f.endsWith('.'+a[3])&&console.log(f)))
