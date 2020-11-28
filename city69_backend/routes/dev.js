const express = require('express');
const router = express.Router();
const stat_gibdd = require('../integrations/stat_gibdd');
const products = require('../integrations/products-count');


// example: {"indicator": "1", "date": "MONTHS:9.2020", "parrentRegion": "71140", "regions": "71171"}
router.post('/gibdd', async ( req, res, next ) => {
  const { indicator, date, parrentRegion, regions  } = req.body;
  stat_gibdd([indicator], date, [parrentRegion], [regions], 
    (result) => res.send(result)
  );
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