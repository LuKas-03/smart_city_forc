const express = require('express');
const router = express.Router();
const CityRepository = require('../database/models/Сity/СityRepository');
const Direction = require('../database/models/Direction/DirectionRepository');


// создание города
router.post('/', async (req, res, next) => {
    const { name, population, size } = req.body;
    try {
        const city = await CityRepository.save(name, population, size);
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
        const city = (await CityRepository.getOne(req.params.id)).toObject();
        const directions = await Direction.get({city_id: city.id});
        res.json({ ...city, directions });
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
