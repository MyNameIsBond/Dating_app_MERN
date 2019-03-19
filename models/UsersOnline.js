const mongoose = require('mongoose')
// try to encrypt the messages
const UsersOnlineSchema = mongoose.Schema({
  username: { type: String, required: true },
  userID: { type: String, required: true },
  socketID: { type: String, required: true }
})

let UsersOnline = (module.exports = mongoose.model('UsersOnline', UsersOnlineSchema))
