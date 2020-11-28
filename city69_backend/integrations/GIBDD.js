const fetch = require('node-fetch');
const gibddApiUrl = 'http://stat.gibdd.ru/getMainTable';

module.exports = (integration, data, city) => {
    const defaultData = JSON.stringify({
        pok: ["1"],
        date: "MONTHS:10.2020",
        parReg: ["65"],
        reg: ["654011"],
        tdata:"0"
    });

    try {
        const url = integration.url;
        const response = await fetch(gibddApiUrl /*поменять на url когда админка появится */, {
            method: 'POST',
            body:    JSON.stringify({data: data}),
            headers: { 'Content-Type': 'application/json' }
        });

        if(!response.ok) {
            throw new Error('bad response');
        }

        const reultJSON = await response.json();
        const dtpCount = parseInt(JSON.parse(reultJSON.data)[0].Data[0].Dt[0].dtp.val)
        return (dtpCount / (city.population / 100000)).toFixed(2);

    } catch(error) {
        console.log('[ERROR] request GIBDD integration', error);
    }
}