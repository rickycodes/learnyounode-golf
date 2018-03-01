const fs = require('fs')

// const { exercises } = require('/usr/local/lib/node_modules/learnyounode/i18n/en.json')
// console.log(exercises)

const titles = [
  'HELLO WORLD',
  'BABY STEPS',
  'MY FIRST I/O!',
  'MY FIRST ASYNC I/O!',
  'FILTERED LS',
  'MAKE IT MODULAR',
  'HTTP CLIENT',
  'HTTP COLLECT',
  'JUGGLING ASYNC',
  'TIME SERVER',
  'HTTP FILE SERVER',
  'HTTP UPPERCASERER',
  'HTTP JSON API SERVER'
]

console.log(titles)

const ex = '/usr/local/lib/node_modules/learnyounode/exercises/'
fs.readdir(ex, (error, files) => {
  files.map((file, index) => {
    let num = ++index
    if (num < 10) {
      num = `0${num}`
    }
    console.log(num+file)
  })
}) && process.exit()

// TODO: fix this up a bit so it isn't complete trash
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
