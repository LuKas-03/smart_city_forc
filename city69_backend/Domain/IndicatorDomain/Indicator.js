class Indicator {
    constructor({ _id, direction_id, integration_id, index, date }) {
        this.id = _id;
        this.direction_id = direction_id;
        this.integration_id = integration_id;
        this.index = index;
        this.date = date;
    }

    toObject = () => {
        return {
            id: this.id,
            direction_id: this.direction_id,
            integration_id: this.integration_id,
            index: this.index,
            date: this.date,
        }
    }
}

module.exports = Indicator;