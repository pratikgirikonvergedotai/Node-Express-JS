const http = require('http')
const fs = require('fs')

// creating server and creating read stream for the file big.txt and encoding in utf8 for readability
http
 .createServer(function (req, res) {
     const stream = fs.createReadStream('./content/big.txt', 'utf8')
     // piping full content into stream
     stream.on('open', () => {
         stream.pipe(res)
     })
     stream.on('error', (err) => {
         res.end(err)
     })
 })
 .listen(5000)