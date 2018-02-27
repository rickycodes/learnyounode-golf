// TODO: fix this up a bit so it isn't complete trash
const fs = require('fs')
fs.readdir('.', (error, files) => {
  const folders = files.filter(file => /\d\d-\D/.test(file))
  folders.map(folder => {
    const md_file = `${folder}/README.md`
    fs.readFile(`${folder}/index.js`, (error, js) => {
      fs.readFile(md_file, (error, md) => {
        const title = md.toString().split('\n')[0]
        const _md = `${title}
\`\`\`js
${js.toString()}\`\`\`
`
        fs.writeFile(md_file, _md, error => {
          if (error) throw error
        })
      })
    })
  })
})
