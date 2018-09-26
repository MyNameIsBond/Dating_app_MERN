var express = require('express')
var router = express.Router()
const path = require('path')
const Chat = require('../models/messages_model')
//  URL www.dateme.com/:user1_ID/u:

router.get('/', async (req, res) => {
  let chat = new Chat()
  chat.users = 'Skatas'
  chat.messages = {
    body: 'Poy eisai Agori',
    user: 'Diploskatas'
  }
  const s = await chat.save()
  console.log('saved ')
  const messages = await Chat.find({})
  res.send(messages)
})

module.exports = router
