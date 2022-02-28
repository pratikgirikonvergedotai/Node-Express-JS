const http = require('http')
// creating a server 
const server = http.createServer((req, res) => {

    // setting content-type as text/html for get request on '/' route
    if (req.url === '/') {
        res.writeHead(200, { 'content-type': 'text/html' })
        res.write('<h1>home page</h1>')
        res.end()
    }
    // setting content-type as text/html for get request on '/about' route
    else if (req.url === '/about') {
        res.writeHead(200, { 'content-type': 'text/html' })
        res.write('<h1>about page</h1>')
        res.end()
    }
    else{
        // 404
        res.writeHead(404, { 'content-type': 'text/html' })
        res.write('<h1>page not found</h1>')
        res.end()
    }
})

server.listen(8080)