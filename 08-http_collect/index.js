s='';require('http')
.get(process.argv[2],r=>r.on('data',d=>s+=d).on('end',_=>console.log(s.length+`
`+s)))
