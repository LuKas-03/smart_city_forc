const express = require('express');
const router = express.Router();
const IndicatorRepository = require('../database/models/Indicator/Indicator');


router.get('/', (req, res, next) => {
    try {
        const result = await IndicatorRepository.get(req.query.direction_id);
        res.json(result);
    } catch (err) {
        next(err);
    }
})

router.get('/:id', (req, res, next) => {
    try {
        const result = await IndicatorRepository.getOne(req.params.id);
        res.json(result);
    } catch(err) {
        next(err);
    }
})

router.post('/', (req, res, next) => {
    try {
        const result = await IndicatorRepository.save(req.city_id, req.name);
    } catch (err) {
        next(err);
    }
})

module.exports = router;