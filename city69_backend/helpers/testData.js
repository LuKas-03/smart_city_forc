const City = require('../database/models/Сity/Сity');
const IndicatorGroup = require('../database/models/Indicator/IndicatorGroup');
const IndicatorSubgroup = require('../database/models/Indicator/IndicatorSubgroup');



const data = {
    city: {
        name: 'Салехард',
        index: '000',
        population: '51263',
        groups: [
            {
                name: 'Жилье и прилегающие пространтсва',
                subgroup :{
                            name: 'Комфортность',
                        }
            },
            {
                name: 'Улично-дорожная сеть',
                subgroup: {name: 'Безопасность'}
            },
            {
                name: 'Озелененные пространства',
            },
            {
                name: 'Общественно-деловая инфраструктура',
            },
            {
                name: 'Социально-досуговая инфраструктура',
            },
            {
                name: 'Общегородское пространство',
            }
        ]

    },
}

module.exports = {
    create: async () => {
        let city = new City({ name: data.city.name, population: data.city.population })
         city = await city.save();
        for (let group of data.city.groups) {
            console.log(city._id)
            let newGroup = new IndicatorGroup({name: group.name, city_id: city._id});
            newGroup = await newGroup.save();
            let newSubgroup = new IndicatorSubgroup({ name: group.subgroup && group.subgroup.name, group_id: newGroup._id });
            await newSubgroup.save();
        }
    }
}