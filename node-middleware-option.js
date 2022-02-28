const express = require('express')
const app = express()
const morgan = require('morgan')
const logger = require('./logger')
const authorize = require('./authorize')

// using a middleware called tiny 
app.use(morgan('tiny'))
// get request for '/' route
app.get('/', (req, res) => {
  res.send('Home')
})






// get request for '/about' route
app.get('/about', (req, res) => {
  res.send('About')
})

// get request for '/api/products' route
app.get('/api/products', (req, res) => {
  res.send('Products')
})

// get request for '/api/items' route
app.get('/api/items', (req, res) => {
  console.log(req.user)
  res.send('Items')
})

// listening on port 5000
app.listen(5000, () => {
  console.log('Server is listening on port 5000....')
})