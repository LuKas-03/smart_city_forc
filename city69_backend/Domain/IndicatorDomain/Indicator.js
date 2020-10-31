class Indicator {
    constructor(id, name, sity, provider, isFromReport) {
        this.id = id;
        this.name = name;
        this.sity = sity;
        this.provider = provider;
        this.isFromReport = isFromReport;
    }

    static modelToDomain = (model) => {
        const { _id, name, sity, provider, isFromReport } = model;
        const indicator = new this (_id, name, sity, provider, isFromReport);
        return indicator;
    };

    toObject = () => {
        return {
            id: this.id,
            name: this.name,
            sity: this.sity,
            provider: this.provider,
            isFromReport: this.isFromReport
        }
    }
}

module.exports = Indicator;