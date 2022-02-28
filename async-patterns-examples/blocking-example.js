require('http')
 // creating server
 .createServer((req, res) => {
     // get request for route '/'
     if (req.url === '/'){
         res.end("Home Page")
     }
     // get request for route '/about'
     else if (req.url === '/about'){
         for (let i = 0; i < 1000 ; i ++){
             for (let j = 0; j < 1000 ; j++){
                 console.log(`${i} ${j}`)
             }
         }
         res.end("about page")
     }
     else{
         res.end("error page")
     }
 })
  // listening on port 5000
 .listen(5000)

