const express = require('express');
const router = express.Router();
const ProviderRepository = require('../database/models/Indicator/IndicatorProviderRepository');


// example:
// { "name": "Благоустройство жилищного фонда",
//   "parameters": ["водопровод", "отопление", "газ"] 
//    "subgroup_id: id подгруппы"}
router.post('/', async (req, res, next) => {
    const { name, url, port, parameters, formula, subgroup_id } = req.body;
    try {
        const provider = await ProviderRepository.save(name, url, port, parameters, formula, subgroup_id);
        if(provider.errorCode === 0) {
            res.json(provider);
        }
        else res.json(provider.toObject());
    } catch(error) {
        next(error);
    }
});

router.get('/', async (req, res, next) => {
    try {
        const providers = await ProviderRepository.get();
        const providerObjects = providers.map(provider => provider.toObject());
        res.json(providerObjects);
    } catch(error) {
        next(error);
    }
});

router.get('/:id', async (req, res, next) => {
    try {
        const provider = await ProviderRepository.getOne(req.params.id);
        res.json(provider.toObject());
    } catch(error) {
        next(error);
    }
});

router.delete('/:id', async(req, res, next) => {
    try {
        const provider = await ProviderRepository.delete(req.params.id);
        res.json(provider.toObject());
    } catch(error) {
        next(error);
    }
})

module.exports = router;