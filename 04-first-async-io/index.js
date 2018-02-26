require('fs')
  .readFile(process.argv[2],(_,d)=>console.log(--(''+d).split('\n').length))
