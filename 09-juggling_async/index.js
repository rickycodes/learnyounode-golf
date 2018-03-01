j=0;process.argv.slice(2).map((u,i,c)=>{
c[i]='';require('http').get(u,r=>
  r.on('data',r=>c[i]+=r).on('end',_=>j++&&j==3&&c.map(r=>console.log(r)))
)})
