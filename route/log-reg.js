const express = require('express')
const router = express.Router()
const passport = require('passport')
const User = require('../models/User')
const jwt = require('jsonwebtoken')
const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt

var opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken()
opts.secretOrKey = 'secret'
passport.use(
  new JwtStrategy(opts, (jwt_payload, done) => {
    User.findOne({ id: jwt_payload.sub }, (err, user) => {
      if (err) {
        return done(err, false)
      }
      if (user) {
        return done(null, user)
      } else {
        return done(null, false)
        // or you could create a new account
      }
    })
  })
)

//  URL www.dateme.com/login

// Register a User.

router.post('/register', async (req, res) => {
  req.body = req.body.values
  const { email, password, password2, username, gender } = req.body
  let user = new User()
  user.username = username
  user.email = email
  user.password = password
  user.gender = gender
  console.log(gender)
  // check
  req.checkBody('email', 'This is not a valid e mail').isEmail()
  req.checkBody('username', 'your username should be more than 6 characters').isLength({
    min: 3
  })
  req.checkBody('password', 'The password should be more than 8 characters').isLength({
    min: 8
  })
  req.checkBody('password2', 'Passwords do not not match').equals(req.body.password)
  let errors = req.validationErrors()
  if (errors) {
    regError = {}
    const { param, msg } = errors
    errors.forEach(key => {
      const { msg, param } = key
      regError[`${param}`] = msg
    })
    return res.json({ error: { regError } })
  }
  try {
    const if_email = await User.find({ email })
    if (if_email[0]) {
      regError = {}
      regError['email'] = 'This Email is already in use'
      return res.json({
        error: { regError }
      })
    }
    const reg_user = await user.save()
    const payload = { id: reg_user.id }
    const token = jwt.sign(payload, opts.secretOrKey)
    res.json({ message: 'ok', token })
  } catch (error) {
    if (err.name === 'MongoError' && err.code === 11000) {
      throw error
    }
  }
})
// Login Strategy.

router.post('/', (req, res) => {
  const { email, password } = req.body.values
  if (password === null) {
    res.json({ error: { password: 'email or password is wrong' } })
  }
  User.findOne(
    {
      email: email
    },
    (err, user) => {
      if (err) throw err
      if (!user) {
        res.json({ error: { password: 'email or password is wrong' } })
      }
      User.comparePassword(password, user.password, (err, isMatch) => {
        if (err) throw err
        if (isMatch) {
          const payload = { id: user.id }
          const token = jwt.sign(payload, opts.secretOrKey)
          res.json({ message: 'ok', token })
        } else {
          res.json({ error: { password: 'email or password is wrong' } })
        }
      })
    }
  )
})

module.exports = router
