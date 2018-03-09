const fs = require('fs')
const mockFile = './scripts/chars.mock'

module.exports = () => {
  const mocks = fs.readFileSync(mockFile)
    .toString()
    .split('\n')
    .filter(m => m !== '')

  mocks.map((m, index) => {
    const localFile = m.substring(0, m.indexOf(','))
    const count = m.substring(m.indexOf(' ') + 1, m.length)
    const js = fs.readFileSync(localFile).toString()
    const { length } = js.replace('\n', '')
    if (length > +count) {
      console.log(`your solution for ${localFile} is bigger than mine! ;)`)
      process.exit(1)
    }
  })

  console.log('character counts match mock!')
}
