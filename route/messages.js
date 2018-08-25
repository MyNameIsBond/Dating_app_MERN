var express = require('express');
var router = express.Router();
const path = require('path');

//  URL www.dateme.com/:user1_ID/u:

router.get('/', (req, res) => {
  res.send('hello');
});

module.exports = router;
