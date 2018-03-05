const fs = require('fs')
const meta = require('./meta')
const buildReadme = require('./build_readmes')
const { buildMock, writeMock } = require('./build_mock')
const testMock = require('./test_mock')
const args = process.argv.slice(2)
const checkArgs = (a, b) => args && args[0] === a && args[1] === b
const ex = './tmp/node_modules/learnyounode/exercises/'

if (!fs.existsSync(ex)) {
  console.log('please run `npm run setup` first!')
  process.exit(1)
}

checkArgs('build', 'readmes') && meta.map(buildReadme)
checkArgs('build', 'mock') && meta.map(buildMock) && writeMock()
checkArgs('test', 'mock') && testMock()
