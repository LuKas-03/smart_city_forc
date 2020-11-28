class Indicator {
    constructor({ _id, direction_id, integration_id,name, type, data, values}) {
        this.id = _id;
        this.direction_id = direction_id;
        this.integration_id = integration_id;
        this.values = values;
        this.name = name,
        this.type = type;
        this.data = data;
    }

    toObject = () => {
        return {
            id: this.id,
            direction_id: this.direction_id,
            integration_id: this.integration_id,
            values: this.values,
            name: this.name,
            data: this.data,
            type: this.type,
        }
    }
}

module.exports = Indicator;