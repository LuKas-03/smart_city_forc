const fetch = require('node-fetch');
const gibddApiUrl = 'http://stat.gibdd.ru/getMainTable';

module.exports = async function(indicators, date, parrentRegion, regions) {
    const json = JSON.stringify({
        pok: indicators,
        date: date,
        parReg: parrentRegion,
        reg: regions,
        tdata:"0"
    });

    const response = await fetch(gibddApiUrl /*поменять на url когда админка появится */, {
        method: 'POST',
        body:    JSON.stringify({data: json}),
        headers: { 'Content-Type': 'application/json' }
    });

    if(!response.ok) {
        throw new Error('bad response');
    }

    const reultJSON = await response.json();
    return JSON.parse(reultJSON.data)[0].Data[0].Dt[0].dtp;
};