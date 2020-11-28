class Integration {
    constructor({ _id, int_code, name, url }) {
        this.id = _id;
        this.int_code = int_code;
        this.name = name;
        this.url = url;
    }

    toObject = () => {
        return {
            id: this.id,
            int_code: this.int_code,
            name: this.name,
            url: this.url,
        }
    }
}

module.exports = Indicator;