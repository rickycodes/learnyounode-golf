z=i=>(i<10?'0':'')+i,d=new Date();require('net').Server(s=>s.end(
  d.getFullYear()+'-'+z(d.getMonth()+1)+'-'+z(d.getDate())+' '
  +z(d.getHours())+':'+z(d.getMinutes())
+'\n')).listen(process.argv[2])
