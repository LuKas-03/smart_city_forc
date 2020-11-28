class City {
    constructor({ _id, name, population, index }) {
        this.id = _id;
        this.name = name;
        this.population = population;
        this.index = index;
    }

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