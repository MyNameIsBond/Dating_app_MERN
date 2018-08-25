var express = require('express');
var router = express.Router();
const path = require('path');

//  URL www.dateme.com/:user1_ID/u:

router.post('/register', (req, res) => {
  const { user } = req;
  console.log(user);
});

module.exports = router;
