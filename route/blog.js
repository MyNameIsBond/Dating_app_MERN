var express = require('express');
var router = express.Router();
const path = require('path');

//  URL www.dateme.com/blog
router.get('/', (req, res) => {
  res.send('hello from blog');
});

module.exports = router;
