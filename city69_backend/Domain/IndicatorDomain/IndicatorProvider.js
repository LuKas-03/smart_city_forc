class IndicatorProvider {
    constructor(id, name, url, port, parameters, formula) {
        this.id = id;
        this.name = name;
        this.url = url;
        this.port = port;
        this.parameters = parameters;
        this.formula = formula;
    }

    static modelToDomain = (model) => {
        const { _id, name, url, port, parameters, formula } = model;
        const indicatorProvider = new this (_id, name, url, port, parameters, formula);
        return indicatorProvider;
    };

    toObject = () => {
        return {
            id: this.id,
            name: this.name,
            url: this.url,
            port: this.port,
            parameters: this.parameters,
            formula: this.formula
        }
    }
}

module.exports = IndicatorProvider;