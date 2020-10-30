const request = require('request');
const gibddApiUrl = 'http://stat.gibdd.ru/getMainTable';

const getMainTable = function(indicators, date, parrentRegion, regions, next) {
    const json = JSON.stringify({
        pok: indicators,
        date: date,
        parReg: parrentRegion,
        reg: regions,
        tdata:"0"
    });

    request.post({
        url: gibddApiUrl,
        json: {data: json}
    }, (err, response, body) => {
        console.log(body)
        if(err) {
            console.log(err);
            return;
        } 

        next(JSON.parse(body.data)[0])
    });
};

module.exports = getMainTable;