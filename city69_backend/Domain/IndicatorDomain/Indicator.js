class Indicator {
    constructor(id, city, index, date, provider, isFromReport, values) {
        this.id = id;
        this.city = city;
        this.index = index;
        this.date = date;
        this.provider = provider;
        this.isFromReport = isFromReport;
        this.values = values;
    }

    static modelToDomain = (model) => {
        const { _id, city, index, date, provider, isFromReport, values } = model;
        const indicator = new this (_id, city, index, date, provider, isFromReport, values);
        return indicator;
    };

    toObject = () => {
        return {
            id: this.id,
            city: this.city,
            index: this.index,
            date: this.date,
            provider: this.provider,
            isFromReport: this.isFromReport,
            values: this.values
        }
    }
}

module.exports = Indicator;