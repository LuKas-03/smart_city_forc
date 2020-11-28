const fetch = require('node-fetch');
const avitoUrl = 'https://www.avito.ru/';

module.exports = (integration, data, city) => {
    try {
        const url = integration.url;
        const sity = data.sity;
        const response = await fetch(avitoUrl+sity /*поменять на url когда админка появится */, {
            method: 'GET'
        });

        if(!response.ok) {
            throw new Error('bad response');
        }

        return (parse(response.text()) / city.population).toFixed(2);
    } catch(error) {
        console.log('[ERROR] request AVITO integration', error);
    }
}

const parse = function(body) {
    const root = HTMLParser.parse(body);
    const countText = root.querySelector('.category-with-counters-count-29J0p').innerText;
    let allCount = parseInt(countText.split(',').join(''));

    const categories = root.querySelector('.category-with-counters-content-xadYj').innerText.split(',').join('');
    const worksPattern = new RegExp(/Работа.(\d+)/);
    const worksCount = worksPattern.exec(categories);
    if (worksCount) {
        allCount -= parseInt(worksCount[1])
    }
    return allCount;
}