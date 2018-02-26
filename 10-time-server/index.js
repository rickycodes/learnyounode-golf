u='-',z=i=>(i<10?'0':'')+i,d=new Date();require('net').Server(s=>s.end(
  d.getFullYear()+u+z(d.getMonth()+1)+u+z(d.getDate())+' '
  +z(d.getHours())+':'+z(d.getMinutes())
+'\n')).listen(process.argv[2])
