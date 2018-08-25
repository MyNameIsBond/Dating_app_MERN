var express = require('express');
var router = express.Router();
const path = require('path');

//  URL www.dateme.com/username or ID
router.get('/', (req, res) => {
  res.send('hello from profile');
});

module.exports = router;
