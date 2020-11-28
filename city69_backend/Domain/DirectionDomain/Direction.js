class Direction {
    constructor({_id, city_id, name, values}) {
        this.id = _id,
        this.city_id = city_id;
        this.name = name;
        this.values = values;
    }

    toObject() {
        return {
            id: this.id,
            city_id: this.city_id,
            name: this.name,
            values: this.values,
        }
    }
}

module.exports = Direction;