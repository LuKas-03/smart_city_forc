const fetch = require('node-fetch');
const gibddApiUrl = 'http://stat.gibdd.ru/getMainTable';


module.exports = (integration, data) => {
    try {
        const url = integration.url;
        const dataObj = JSON.parse(data);
        const response = await fetch(gibddApiUrl /*поменять на url когда админка появится */, {
            method: 'POST',
            body: { data: dataObj },
        }); 
        if(!response.ok) {
            throw new Error('bad response');
        }

        const resJson = res.json();

        const resData = JSON.parse(resJson.data);

        const DTP = resData[0].Data[0].Dt[0].dtp.value;

        return DTP;
    } catch(error) {
        console.log('[ERROR] request GIBDD integration', error);
    }
}