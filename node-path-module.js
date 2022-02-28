const path = require('path')

// returns platform specific sperater
console.log(path.sep)

// join different paths
const Path = path.join('/content/', 'subfolder', 'test.txt')
console.log(Path)

// returns the base name. 
const base = path.basename(Path)
console.log(base)

// resolving in a absolute path
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
console.log(absolute)

