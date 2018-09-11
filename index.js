// Express
const express = require('express')
const app = express()

// Router
const messanger = require('./route/messages')
const profile = require('./route/profile')
const logreg = require('./route/log-reg')
const blog = require('./route/blog')

// Database
const mongoose = require('mongoose')
const User = require('./models/User')
const db = mongoose.connection
mongoose.connect('mongodb://localhost/user')

// Passport Initialise
const passport = require('passport')
app.use(passport.initialize())

// Body Parser
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Express Validator
const expressValidator = require('express-validator')
app.use(expressValidator())

// Database - Mongodb Initialise.
db.on('error', err => {
  throw err
})

db.once('open', () => {
  console.log('MongoDB connected')
})

// Setting the API to accept form 3000 localhost

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )
  next()
})

app.get(
  '/users',
  passport.authenticate('jwt', { session: false }),
  async (req, res) => {
    const users = await User.find({})
    return res.send(users)
  }
)

app.listen(8080, () => {
  console.log(`The server is running in ${8080} port.`)
})

// Router URLs
app.use('/messages', messanger)
app.use('/profile', profile)
app.use('/login', logreg)
app.use('/blog', blog)
