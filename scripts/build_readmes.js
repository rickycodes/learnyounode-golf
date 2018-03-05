// this will build nice READMEs for all the problems
const fs = require('fs')
const meta = require('./meta')
const ex = './tmp/node_modules/learnyounode/exercises/'

const readProblemText = (ex, path) => {
  const problem = fs.readFileSync(`${ex}${path}/problem.md`).toString()
  // hope this never changes ¯\_(ツ)_/¯
  return problem.substring(0, problem.indexOf(Array(70).join('-')))
}

const writeReadme = (path, md) => {
  const mdFile = `${path}/README.md`
  fs.writeFileSync(mdFile, md)
  console.log(`wrote ${mdFile} README file`)
}

module.exports = (m, index) => {
  const num = index + 1
  const lnum = num < 10 ? `0${num}` : num
  const title = `${m.name} (Exercise ${num} of ${meta.length})`
  const localFolder = `${lnum}-${m.path}`
  const problem = readProblemText(ex, m.path)
  const files = fs.readdirSync(localFolder).filter(file => /\.js$/.test(file))

  let md = `### ${title}
#### Problem:
${problem}#### Solution:
`

  for (let file of files) {
    const js = fs.readFileSync(`${localFolder}/${file}`).toString()
    md += `${file}\n`
    md += '```js\n'
    md += js
    md += '```\n'
  }

  writeReadme(localFolder, md)
}
