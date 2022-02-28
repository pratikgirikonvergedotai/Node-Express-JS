const express = require('express')
const path = require('path')

const app = express()

// setup static and middleware
app.use(express.static('./public'))

// get request for '/' route
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, './navbar-app/index.html'))
})

// for non-defined routes aka 404 
app.all('*', (req, res) => {
  res.status(404).send('resource not found')
})

// listening on port 5000
app.listen(5000, () => {
  console.log('server is listening on port 5000....')
})