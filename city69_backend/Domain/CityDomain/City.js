class City {
    constructor(id, name, index) {
        this.id = id;
        this.name = name;
        this.index = index;
    }

    static modelToDomain = (model) => {
        const { _id, name, index } = model;
        const city = new this (_id, name, index);
        return city;
    };

    toObject = () => {
        return {
            id: this.id,
            name: this.name,
            index: this.index,
        }
    }
}

module.exports = City;