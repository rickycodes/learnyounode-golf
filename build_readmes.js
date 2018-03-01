// this will build nice READMEs for all the problems
const fs = require('fs')

// location of globally instealled learnyounode
const ex = '/usr/local/lib/node_modules/learnyounode/exercises/'

const meta = [
  { path: 'hello_world', name: 'HELLO WORLD' },
  { path: 'baby_steps', name: 'BABY STEPS' },
  { path: 'my_first_io', name: 'MY FIRST I/O!' },
  { path: 'my_first_async_io', name: 'MY FIRST ASYNC I/O!' },
  { path: 'filtered_ls', name: 'FILTERED LS' },
  { path: 'make_it_modular', name: 'MAKE IT MODULAR' },
  { path: 'http_client', name: 'HTTP CLIENT' },
  { path: 'http_collect', name: 'HTTP COLLECT' },
  { path: 'juggling_async', name: 'JUGGLING ASYNC' },
  { path: 'time_server', name: 'TIME SERVER' },
  { path: 'http_file_server', name: 'HTTP FILE SERVER' },
  { path: 'http_uppercaserer', name: 'HTTP UPPERCASERER' },
  { path: 'http_json_api_server', name: 'HTTP JSON API SERVER' }
]

const readProblemText = (ex, path) => {
  const ex_problem_md = fs.readFileSync(`${ex}${path}/problem.md`)
  // hope this never changes ¯\_(ツ)_/¯
  const _ = Array(70).join('-')
  return ex_problem_md.toString().split(_)[0]
}

const writeReadme = (path, md) => fs.writeFileSync(`${path}/README.md`, md)

const buildReadme = (m, index) => {
  const num = ++index
  const lnum = num < 10 ? `0${num}` : num
  const title = `${m.name} (Exercise ${num} of ${meta.length})`
  const local_folder = `${lnum}-${m.path}`
  const problem_txt = readProblemText(ex, m.path)
  const files = fs.readdirSync(local_folder).filter(file => /\.js$/.test(file))

  let md = `### ${title}
#### Problem:
${problem_txt}#### Solution:
`

  for (let file of files) {
    const js = fs.readFileSync(`${local_folder}/${file}`).toString()
    md += `${file}\n`
    md += '```js\n'
    md += js
    md += '```\n'
  }

  writeReadme(local_folder, md)
}

meta.map(buildReadme)
