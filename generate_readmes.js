const fs = require('fs')
const util = require('util')

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

async function writeMd (m, index) {
  const num = ++index
  const lnum = num < 10 ? `0${num}` : num
  const title = `${m.name} (Exercise ${num} of ${meta.length})`

  let md = `### ${title}\n`

  const local_folder = `${lnum}-${m.path}`
  const ex_problem_md = await fs.readFileSync(`${ex}${m.path}/problem.md`)
  const _ = '----------------------------------------------------------------------'
  const problem_txt = ex_problem_md.toString().split(_)[0]
  const files = await fs.readdirSync(local_folder).filter(file => /\.js$/.test(file))

  md += `#### Problem:\n`
  md += problem_txt

  md += `#### Solution:\n`
  for (let file of files) {
    const js = await fs.readFileSync(`${local_folder}/${file}`).toString()
    md += `${file}\n`
    md += '```js\n'
    md += js
    md += '```\n'
  }

  fs.writeFileSync(`${local_folder}/README.md`, md)
}

meta.map((m, index) => {
  writeMd(m, index)
})
