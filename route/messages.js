var express = require('express')
var router = express.Router()
const path = require('path')
const Chat = require('../models/messages_model')
//  URL www.dateme.com/:user1_ID/u:

router.get('/', async (req, res) => {
  let chat = new Chat()
  chat.users = { user1: 'Skatas', user2: 'DiploSkatas' }
  chat.users.messages.body = 'Poy eisai Agori'
  chat.users.messages.user = 'DiploSkatas'

  const messages = await Chat.find({})
  res.send(messages)
})

module.exports = router
