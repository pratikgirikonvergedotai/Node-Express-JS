// console.log runs on every refresh . when server is up and listening
require('http')
 .createServer((req, res) => {
     console.log("request event")
     res.end("hello world")
 })
 .listen(5000)