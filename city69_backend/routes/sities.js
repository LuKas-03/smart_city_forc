const express = require('express');
const router = express.Router();
const SityRepository = require('../database/models/Sity/SityRepository');


// создание города
router.post('/', async (req, res, next) => {
    const { name } = req.body;
    try {
        const sity = await SityRepository.save(name);
        console.log(sity)
        if(sity.errorCode === 0) {
            res.json(sity);
        }
        else res.json(sity.toObject());
    } catch(error) {
        next(error);
    }
});

// список всех городов
router.get('/', async (req, res, next) => {
    try {
        const sities = await SityRepository.get();
        const sityObjects = sities.map(sity => sity.toObject());
        res.json(sityObjects);
    } catch(error) {
        next(error);
    }
});

router.get('/:id', async (req, res, next) => {
    try {
        const sity = await SityRepository.getOne(req.params.id);
        res.json(sity.toObject());
    } catch(error) {
        next(error);
    }
});

router.delete('/:id', async(req, res, next) => {
    try {
        const sity = await SityRepository.delete(req.params.id);
        res.json(sity.toObject());
    } catch(error) {
        next(error);
    }
})

module.exports = router;
