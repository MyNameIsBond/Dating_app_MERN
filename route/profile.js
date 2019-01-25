var express = require('express')
var router = express.Router()
const path = require('path')

//  URL www.dateme.com/username or ID
router.get('/:userID', (req, res) => {
  const { userID } = req.props
  console.log(userID)
})

module.exports = router
