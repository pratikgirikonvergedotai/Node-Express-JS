const express = require('express')
const app = express()

const people = require('./routes/people')
const auth = require('./routes/auth')

// static files
app.use(express.static('./methods-public'))
// parse incoming form data
app.use(express.urlencoded({ extended: false }))
// parse  incoming json data
app.use(express.json())

// using routers of people, auth
app.use('/api/people', people)
app.use('/login', auth)

app.listen(5000, () => {
  console.log('Server is listening on port 5000....')
})