// this will build nice READMEs for all the problems
const fs = require('fs')
const meta = require('./meta')
const args = process.argv.slice(2)
const ex = './tmp/node_modules/learnyounode/exercises/'
const mockFile = './scripts/lines.mock'

let lines = ''

if (!fs.existsSync(ex)) {
  console.log('please run `npm run setup` first!')
  process.exit(1)
}

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

const buildMock = (m, index) => {
  const num = index + 1
  const lnum = num < 10 ? `0${num}` : num
  const localFolder = `${lnum}-${m.path}`
  const files = fs.readdirSync(localFolder).filter(file => /\.js$/.test(file))

  for (let file of files) {
    const localFile = `${localFolder}/${file}`
    const js = fs.readFileSync(localFile).toString()
    const length = js.replace('\n').length
    lines += `${localFile}, ${length}\n`
  }
}

const writeMock = () => {
  fs.writeFileSync(mockFile, lines)
  console.log('wrote mock file')
}

const testMock = () => {
  const mocks = fs.readFileSync(mockFile)
    .toString()
    .split('\n')
    .filter(m => m !== '')

  mocks.map((m, index) => {
    const localFile = m.substring(0, m.indexOf(','))
    const count = m.substring(m.indexOf(' ') + 1, m.length)
    const js = fs.readFileSync(localFile).toString()
    const length = js.replace('\n').length
    if (length > +count) {
      console.log(`your solution for ${localFile} is bigger than mine! ;)`)
      process.exit(1)
    }
  }) && console.log('character counts match mock!')
}

const buildReadme = (m, index) => {
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

const checkArgs = (a, b) => args && args[0] === a && args[1] === b

checkArgs('build', 'readmes') && meta.map(buildReadme)
checkArgs('build', 'mock') && meta.map(buildMock) && writeMock()
checkArgs('test', 'mock') && testMock()
