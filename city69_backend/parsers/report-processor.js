const processor = function(indicator_name, report) {
    const coefficients = {
        'водопровод': 0.2,
        'водоотведение': 0.2,
        'отопление': 0.2,
        'газ': 0.2,
        'горячее водоснабжение': 0.2
    };

    const indexes = report.map(line => index_calc(line, coefficients));
    return {
        indicator_name: indicator_name,
        indexes: indexes
    };
}

const index_calc = function(line, coefficients) {
    let accumulate = 0;
    Object.keys(coefficients).forEach(item => {
        const value = line[item];
        if (value) accumulate += coefficients[item] * value;
    })
    
    return {
        date: line['дата'],
        index: accumulate
    };
}

module.exports = processor;