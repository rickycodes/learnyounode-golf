const fs = require('fs')
const mockFile = './scripts/chars.mock'

let lines = ''

const buildMock = (m, index) => {
  const num = index + 1
  const lnum = num < 10 ? `0${num}` : num
  const localFolder = `${lnum}-${m.path}`
  const files = fs.readdirSync(localFolder).filter(file => /\.js$/.test(file))

  for (let file of files) {
    const localFile = `${localFolder}/${file}`
    const js = fs.readFileSync(localFile).toString()
    const { length } = js.replace('\n', '')
    lines += `${localFile}, ${length}\n`
  }
}

const writeMock = () => {
  fs.writeFileSync(mockFile, lines)
  console.log(`wrote mock file: ${mockFile}`)
}

module.exports = {
  buildMock,
  writeMock
}
