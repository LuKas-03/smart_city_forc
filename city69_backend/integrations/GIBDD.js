const fetch = require('node-fetch');
const gibddApiUrl = 'http://stat.gibdd.ru/getMainTable';


module.exports = (integration, data) => {
    try {
        const url = integration.url;
        const response = await fetch(gibddApiUrl /*поменять на url когда админка появится */, {
            method: 'POST',
            body: data,
        });
        if(!response.ok) {
            throw new Error('bad response');
        }
        console.log('[INFO] Success GIBDD integration')
        return;
    } catch(error) {
        console.log('[ERROR] request GIBDD integration', error);
    }
}