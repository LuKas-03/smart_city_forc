const express = require('express');
const router = express.Router();
const CityRepository = require('../database/models/Сity/СityRepository');


// создание города
router.post('/', async (req, res, next) => {
    const { name, population } = req.body;
    try {
        const city = await CityRepository.save(name, population);
        console.log(city)
        if(city.errorCode === 0) {
            res.json(city);
        }
        else res.json(city.toObject());
    } catch(error) {
        next(error);
    }
});

// список всех городов
router.get('/', async (req, res, next) => {
    try {
        const cities = await CityRepository.get();
        const cityObjects = cities.map(city => city.toObject());
        res.json(cityObjects);
    } catch(error) {
        next(error);
    }
});

router.get('/:id', async (req, res, next) => {
    try {
        const city = await CityRepository.getOne(req.params.id);
        res.json(city.toObject());
    } catch(error) {
        next(error);
    }
});

router.delete('/:id', async(req, res, next) => {
    try {
        const city = await CityRepository.delete(req.params.id);
        res.json(city.toObject());
    } catch(error) {
        next(error);
    }
})

module.exports = router;
