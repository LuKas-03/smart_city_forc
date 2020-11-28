const express = require('express');
const router = express.Router();
const IndicatorRepository = require('../database/models/Indicator/IndicatorRepository');
const Integration = require('../database/models/Integration/IntegrationRepository');


router.get('/', async (req, res, next) => {
    try {
        const result = await IndicatorRepository.get({direction_id: req.query.direction_id});
        res.json(result);
    } catch (err) {
        next(err);
    }
})

router.get('/:id', async (req, res, next) => {
    try {
        const result = await IndicatorRepository.getOne(req.params.id).toObject();
        res.json(result);
    } catch(err) {
        next(err);
    }
})

router.post('/', async (req, res, next) => {
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

router.post('/integration', (req, res, next) => {
    try {
        

    } catch (err) {
        next(err);
    }
})

module.exports = router;