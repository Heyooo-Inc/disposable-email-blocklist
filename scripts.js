const readline = require('readline')
const fs = require('fs')

const input = fs.createReadStream('./disposable-email-domains/disposable_email_blocklist.conf')
const output = []
const rl = readline.createInterface({ input })

// PROCESS LINES
rl.on('line', (line) => {
  console.log(`Processing line ${output.length}`)
  output.push(line)
})

// SAVE AS JSON
rl.on('close', () => {
  try {
    const json = JSON.stringify(output)
    fs.writeFile('blocklist.json', json, () => console.log('--- FINISHED ---'))
  } catch (e) {
    console.log(e)
  }
})