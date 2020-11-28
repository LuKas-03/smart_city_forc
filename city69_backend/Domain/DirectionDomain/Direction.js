class Direction {
    constructor({_id, city_id, name, index, date}) {
        this.id = _id,
        this.city_id = city_id;
        this.name = name;
        this.index = index;
        this.date = new Date(date);
    }

    toObject() {
        return {
            id: this.id,
            city_id: this.city_id,
            name: this.name,
            index: this.index,
            date: this.date,
        }
    }
}

module.exports = Direction;