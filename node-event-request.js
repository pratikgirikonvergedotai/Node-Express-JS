const http = require('http')


const server = http.createServer()
// listening for request event
server.on('request', (req, res) => {
  res.end('Welcome')
})

server.listen(5000)