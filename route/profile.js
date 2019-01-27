var express = require('express')
var router = express.Router()
const path = require('path')
const User = require('../models/User')
//  URL www.dateme.com/username or ID
router.get('/:userID', async (req, res) => {
  const { userID } = req.params

  res.send({ pic: 'kwlos', age: 21 })
})

module.exports = router
