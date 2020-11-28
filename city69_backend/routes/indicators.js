const express = require('express');
const router = express.Router();
const IndicatorRepository = require('../database/models/Indicator/Indicator');


router.get('/', (req, res, next) => {
    try {
        const result = await IndicatorRepository.get(req.query.direction_id).toObject();
        res.json(result);
    } catch (err) {
        next(err);
    }
})

router.get('/:id', (req, res, next) => {
    try {
        const result = await IndicatorRepository.getOne(req.params.id).toObject();
        res.json(result);
    } catch(err) {
        next(err);
    }
})

router.post('/', (req, res, next) => {
    try {
        const result = await IndicatorRepository.save(req.city_id, req.name).toObject();
    } catch (err) {
        next(err);
    }
})

router.get('/in_code', (req, res, next) => {
    res.json([
        'GIBDD',
        'ROSSTAT',
        'AVITO'
    ])
})

module.exports = router;