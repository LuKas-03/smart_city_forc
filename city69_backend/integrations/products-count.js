const fetch = require('node-fetch');
const HTMLParser = require('node-html-parser');
const avitoUrl = 'https://www.avito.ru/';

const getProductsCount = function(sity) {
    return new Promise(function(resolve, reject) {
        fetch(avitoUrl+sity)
            .then(res => res.text())
            .then(body => parse(body))
            .then(result => resolve(result), error => reject(error));
    });
};

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

module.exports = getProductsCount;