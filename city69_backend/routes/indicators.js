const express = require('express');
const router = express.Router();
const IndicatorRepository = require('../database/models/Indicator/IndicatorRepository');


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
        const result = (await IndicatorRepository.getOne(req.params.id)).toObject();
        res.json(result);
    } catch(err) {
        next(err);
    }
})

router.post('/', async (req, res, next) => {
    try {
        const {name, direction_id, type} = req.body;
        const result = await IndicatorRepository.save(name, direction_id, type);
    } catch (err) {
        next(err);
    }
})

router.get('/in_code', (req, res, next) => {
    res.json([
        'GIBDD',
        'AVITO'
    ])
})

module.exports = router;