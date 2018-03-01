require('http').get(process.argv[2],r=>r.on('data',d=>console.log(''+d)))
