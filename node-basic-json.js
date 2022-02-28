const express = require('express')
const app = express()
// getting products from data.js
const { products } = require('./data')

// get request on route '/'
app.get('/', (req, res) => {
  res.json(products)
})

// listening on port 5000
app.listen(5000, () => {
  console.log('Server is listening on port 5000....')
})