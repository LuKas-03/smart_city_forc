const ProviderRepository = require('../database/models/Indicator/IndicatorProviderRepository');
const IndicatorRepository = require('../database/models/Indicator/IndicatorRepository');
const CityRepository = require('../database/models/Сity/СityRepository');
const dateParser = require('./date-parser');

const processor = async function(indicatorProviderId, cityId, report) {
    const provider = await ProviderRepository.getOne(indicatorProviderId);
    const city = await CityRepository.getOne(cityId);
    const fields = provider.parameters;

    const lastDate = await IndicatorRepository.getLastDate(city.id, provider.id);
    const indexes = report.map(line => index_calc(line, fields));

    for (const item of indexes) {
        if (indexes && item.date <= lastDate) continue;
        await IndicatorRepository.save(city.id, item.index, item.date, provider.id, false, item.values);
    }

    return {
        indicator_name: provider.name,
        indexes: indexes
    };
}

const index_calc = function(line, fields) {
    const values = [];
    fields.forEach(item => {
        values.push(parseFloat(line[item]));
    })
    
    return {
        date: dateParser(line['дата']),
        index: (values.reduce((a, b) => a + b, 0) / fields.length).toFixed(2),
        values: values
    };
}

module.exports = processor;