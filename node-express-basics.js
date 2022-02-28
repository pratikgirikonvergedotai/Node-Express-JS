const express = require('express')
const app = express()

// root route 
app.get('/', (req, res) => {
  console.log('user hit the resource')
  res.status(200).send('Home Page')
})

// about route
app.get('/about', (req, res) => {
  res.status(200).send('About Page')
})

// 404
app.all('*', (req, res) => {
  res.status(404).send('<h1>resource not found</h1>')
})

// listening
app.listen(5000, () => {
  console.log('server is listening on port 5000...')
})