const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const Chat_Message = mongoose.Schema({
  message: {
    type: String,
    required: true
  },
  user: {
    type: String,
    required: true
  },
  time: {
    type: Date,
    required: true,
    default: Date.now
  }
})

let Chat = (module.exports = mongoose.model('Chat', Chat_Message))

// Ideal
