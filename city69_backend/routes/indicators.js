const express = require('express');
const router = express.Router();
const IndicatorRepository = require('../database/models/Indicator/IndicatorRepository');
const IndicatorGroup = require('../database/models/Indicator/IndicatorGroup');
const IndicatorSubGroup = require('../database/models/Indicator/IndicatorSubgroup');
const IndicatorProvider = require('../database/models/Indicator/IndicatorProvider');
const Indicator = require('../database/models/Indicator/Indicator');
const City = require('../database/models/Сity/СityRepository');
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

router.get('/group', async (req, res, next) => {
    const city = await City.getOne(req.query.city_id);
    const groups = await IndicatorGroup.find({city_id: req.query.city_id}).lean();
    for(let group of groups) {
        let groupIndex = 0;
        
        let subgroups = await IndicatorSubGroup.find({group_id: group._id});
        for(let subgroup of subgroups) {
            if(subgroup.name) {
                let indicatorProvs = await IndicatorProvider.find({subgroup_id: subgroup._id});
                let subgroupIndex = 0;

                for(let indicatorProv of indicatorProvs) {
                    let indicator = (await Indicator.find({provider: indicatorProv._id}).sort([['date', -1]]))[0];
                    console.log('GROUPS', indicator);
                    subgroupIndex = indicator.index;
                }
                groupIndex = subgroupIndex;
            }
        }
        group.index = groupIndex;
    }
    res.json({...city.toObject(), groups});
})

router.get('/subgroup', async (req, res, next) => {
    const group = await IndicatorGroup.findOne({_id: req.query.group_id});
    const subgroups = await IndicatorSubGroup.find({group_id: req.query.group_id}).lean();
    console.log(subgroups);
        for(let subgroup of subgroups) {
            if(subgroup.name) {
                let indicatorProvs = await IndicatorProvider.find({subgroup_id: subgroup._id});
                let subgroupIndex = 0;

                for(let indicatorProv of indicatorProvs) {
                    let indicator = (await Indicator.find({provider: indicatorProv._id}).sort([['date', -1]]))[0];
                    console.log('GROUPS', indicator);
                    subgroupIndex = indicator.index;
                }
                subgroup.index = subgroupIndex;
                subgroup.name_group = group.name;
            }
        }
    res.json(subgroups);
})

router.get('/history', async (req, res, next) => {
    let indicatorProv = await IndicatorProvider.findOne({subgroup_id: req.query.subgroup_id});

        let indicators = await Indicator.find({provider: indicatorProv._id}).sort([['date', -1]]);
    res.json(indicators);
})

// router.get('/:id', async (req, res, next) => {
//     try {
//         const indicator = await IndicatorRepository.getOne(req.params.id);
//         res.json(indicator.toObject());
//     } catch(error) {
//         next(error);
//     }
// });

router.delete('/:id', async(req, res, next) => {
    try {
        const indicator = await IndicatorRepository.delete(req.params.id);
        res.json(indicator.toObject());
    } catch(error) {
        next(error);
    }
})



module.exports = router;