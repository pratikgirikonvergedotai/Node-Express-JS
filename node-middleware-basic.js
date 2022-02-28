const express = require('express')
const app = express()

//  request => middleware => response

// defing logger middleware and call next() to move on to the next middleware
const logger = (req, res, next) => {
  const method = req.method
  const url = req.url
  const time = new Date().getFullYear()
  console.log(method, url, time)
  next()
}

// get reqest for '/' route
app.get('/', logger, (req, res) => {
  res.send('Home')
})
// get reqest for '/about' route
app.get('/about', logger, (req, res) => {
  res.send('About')
})

// listening on port 5000
app.listen(5000, () => {
  console.log('Server is listening on port 5000....')
})