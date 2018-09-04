var express = require('express')
var router = express.Router()
const path = require('path')
var jwt = require('jsonwebtoken')

//  URL www.dateme.com/login

router.post('/register', (req, res) => {})
router.post('/signin', (req, res) => {
  user = { email: 'Nick@hotmail.com', username: 'Nick_The_Greek' }
  jwt.sign({ user: user }, 'secretkey', (err, token) => {
    return res.send(user)
  })
})

const verifyToken = (req, res, next) => {
  const bearerHeader = req.headers['authorization']
  if (typeof bearerHeader !== 'undefined') {
    const bearer = bearerHeader.split(' ')
    const bearToken = bearer[1]
    req.token = bearToken
    next()
  } else {
    res.sendStatus(403)
  }
}

module.exports = router
