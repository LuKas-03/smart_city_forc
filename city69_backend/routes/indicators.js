const express = require('express');
const router = express.Router();
const IndicatorRepository = require('../database/models/Indicator/IndicatorRepository');
const stat_gibdd = require('../integrations/stat_gibdd');


router.post('/', async (req, res, next) => {
    const { city, index, date, provider, isFromReport, values } = req.body;
    try {
        const indicator = await IndicatorRepository.save(city, index, date, provider, isFromReport, values);
        if(indicator.errorCode === 0) {
            res.json(indicator);
        }
        else res.json(indicator.toObject());
    } catch(error) {
        next(error);
    }
});

router.get('/', async (req, res, next) => {
    try {
        const indicators = await IndicatorRepository.get();
        const indicatorsObjects = indicators.map(indicator => indicator.toObject());
        res.json(indicatorsObjects);
    } catch(error) {
        next(error);
    }
});

router.get('/:id', async (req, res, next) => {
    try {
        const indicator = await IndicatorRepository.getOne(req.params.id);
        res.json(indicator.toObject());
    } catch(error) {
        next(error);
    }
});

router.delete('/:id', async(req, res, next) => {
    try {
        const indicator = await IndicatorRepository.delete(req.params.id);
        res.json(indicator.toObject());
    } catch(error) {
        next(error);
    }
})

module.exports = router;