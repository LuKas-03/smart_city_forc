const csv = require('csv-parser')

const parser = function(fsStream, config) {
    return new Promise(function(resolve, reject) {
        const results = [];
        
        fsStream.pipe(csv({
            separator: ';'
        }))
        .on('data', (data) => results.push(data))
        .on('end', () => resolve(results))
        .on('error', (err) => reject(err));
    })
}

module.exports = parser;