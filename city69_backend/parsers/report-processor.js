const IndicatorRepository = require('../database/models/Indicator/IndicatorRepository');
const dateParser = require('./date-parser');

const processor = async function(indicatorId, report) {
    const indicator = await IndicatorRepository.getOne(indicatorId);
    const fields = JSON.parse(indicator.data).fields;

    const lastDate = getLastDate(indicator.values);
    const indexes = report.map(line => index_calc(line, fields));

    for (const item of indexes) {
        if (indexes && item.date <= lastDate) continue;
        await IndicatorRepository.updateValues(indicatorId, item);
    }

    return {
        indicator_name: indicator.name,
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
    };
}

const getLastDate = function(values) {
    const sortedDates = values.map(value => value.date).sort();
    return sortedDates[sortedDates.length - 1];
}

module.exports = processor;