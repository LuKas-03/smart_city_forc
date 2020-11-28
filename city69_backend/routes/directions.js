const express = require('express');
const router = express.Router();
const DirectionRepository = require('../database/models/Direction/DirectionRepository');


router.get('/', async (req, res, next) => {
    try {
        const result = await DirectionRepository.get(req.query.city_id).toObject();
        res.json(result);
    } catch (err) {
        next(err);
    }
})

router.get('/:id', async (req, res, next) => {
    try {
        const result = (await DirectionRepository.getOne(req.params.id)).toObject();
        res.json(result);
    } catch(err) {
        next(err);
    }
})

router.post('/', async (req, res, next) => {
    try {
        const result = await DirectionRepository.save(req.city_id, req.name).toObject();
        res.json({ok: true})
    } catch (err) {
        next(err);
    }
})

module.exports = router;