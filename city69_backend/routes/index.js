var express = require('express');
var router = express.Router();
const init = require('../helpers/testData');

/* GET home page. */
router.get('/', async function(req, res, next) {
  await init.create();
  res.json({ok: true})
});

module.exports = router;
