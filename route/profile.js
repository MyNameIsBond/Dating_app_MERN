var express = require('express')
var router = express.Router()
const path = require('path')
const User = require('../models/User')
//  URL www.dateme.com/username or ID
router.get('/:userID', async (req, res) => {
  const { userID } = req.params
  const user = await User.findById(userID)
  const { username, email } = user
  res.send({ username, email })
})

module.exports = router
