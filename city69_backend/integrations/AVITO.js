const fetch = require('node-fetch');
const avitoUrl = 'https://www.avito.ru/';

module.exports = (integration, data) => {
    try {
        const url = integration.url;
        const sity = data.sity;
        const response = await fetch(avitoUrl+sity /*поменять на url когда админка появится */, {
            method: 'GET'
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