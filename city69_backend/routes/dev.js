const express = require('express');
const router = express.Router();
const stat_gibdd = require('../integrations/stat_gibdd');


router.get('/gibdd', ((req, res) => {
  stat_gibdd(["1"], "MONTHS:9.2020", ["71140"], ["71171"], 
    (result) => res.send(result)
  );
}))

module.exports = router;