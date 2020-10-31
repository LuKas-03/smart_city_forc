class Sity {
    constructor(id, name, index) {
        this.id = id;
        this.name = name;
        this.index = index;
    }

    static modelToDomain = (model) => {
        const { _id, name, index } = model;
        const sity = new this (_id, name, index);
        return sity;
    };

    toObject = () => {
        return {
            id: this.id,
            name: this.name,
            index: this.index,
        }
    }
}

module.exports = Sity;