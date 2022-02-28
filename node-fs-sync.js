// importing readFileSync, writeFileSync via destructing
const { readFileSync, writeFileSync} = require('fs')

// reading first and second files via readfilesync
const first_file = readFileSync('./content/first.txt', 'utf8')
const second_file = readFileSync('./content/second.txt', 'utf8')

// writing content of first and second in result-sync
writeFileSync(
    './content/result-sync.txt',
    `Here is the result : ${first_file}, ${second_file}`,
    // for appending content rather than overwriting 
    {flag : 'a'}
)

