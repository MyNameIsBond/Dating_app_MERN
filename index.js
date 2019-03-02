// Express
const express = require('express')
const app = express()
const port = 8080
// Router
const messanger = require('./route/messages')
const profile = require('./route/profile')
const logreg = require('./route/log-reg')
const blog = require('./route/blog')

// Database
const mongoose = require('mongoose')
const User = require('./models/User')
const Chat = require('./models/messages_model')
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

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})

// Sockets
const server = app.listen(port, () => {
  console.log(`server is on port: ${port}`)
})
const io = require('socket.io').listen(server)
const ioChat = require('./route/ioChatting')(io)

app.get('/users', async (req, res) => {
  const users = await User.find({})
  // the Logged in User. req.user
  const req_user = req.user
  return res.send(users)
})

// Router URLs
app.use('/messages', messanger)
app.use('/profile', profile)
app.use('/login', logreg)
app.use('/blog', blog)
