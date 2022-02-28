const http = require('http')
// creating a server 
http.createServer((req, res) => {
    // sending response for get request on '/' route
    if (req.url === '/'){
        res.end('Welcome to home page')
    }
    // sending response for get request on '/about' route
    else if (req.url === '/about'){
        res.end('Here is our short history') 
    }
    else{
        // 404
        res.end(
            `<h1>Oops!</h1>
            <p>We can't seem to find the page you are looking for</p>
            <a href="/">back home</a>`
        )
    }
}).listen(5000)