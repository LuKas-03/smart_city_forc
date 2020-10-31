const csv = require('./csv')
const parsers = {
    'csv': csv
};

const report = function(fsStram, format) {
    return new Promise(function(resolve, reject) {
        const parser = parsers[format]
        if (!parsers) reject('Format  not found')
        
        parser(fsStram).then(
            result => resolve(result),
            err => reject(err)
        )
    });
}

module.exports = report;