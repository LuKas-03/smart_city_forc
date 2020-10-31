class City {
    constructor(id, name, population, index) {
        this.id = id;
        this.name = name;
        this.population = population;
        this.index = index;
    }

    static modelToDomain = (model) => {
        const { _id, name, population, index } = model;
        const city = new this (_id, name, population, index);
        return city;
    };

    toObject = () => {
        return {
            id: this.id,
            name: this.name,
            population: this.population,
            index: this.index,
        }
    }
}

module.exports = City;