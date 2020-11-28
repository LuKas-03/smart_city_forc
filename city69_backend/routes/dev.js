const express = require('express');
const router = express.Router();
const stat_gibdd = require('../integrations/stat_gibdd');
const products = require('../integrations/products-count');


// example: {"indicator": "1", "date": "MONTHS:11.2020", "parrentRegion": "65", "regions": "654011"}
router.post('/gibdd', async ( req, res, next ) => {
  const { indicator, date, parrentRegion, regions  } = req.body;
  const result = await stat_gibdd([indicator], date, [parrentRegion], [regions]);
  res.send(result)
})

// example: /products-count/ekaterinburg
router.get('/products-count/:sity', async ( req, res, next ) => {
    try {
        const sity = req.params.sity;
        products(sity).then(r => res.status(200).send(r + ''));
    } catch(error) {
        next(error);
    }
})

module.exports = router;