
class User {
    constructor(id, login, name, surname, partonymic, cities, role) {
        this.id,
        this.login = login;
        this.name = name;
        this.surname = surname;
        this.partonymic = partonymic;
        this.cities = cities;
        this.role = role;
    }

    static modelToDomain = (model) => {
        const { _id, login, name, surname, partonymic, cities, role } = model;
        const user = new this (_id, login, name, surname, partonymic, cities, role);
        return user;
    };

    toObject = () => {
        return {
            id: this.id,
            login: this.login,
            name: this.name,
            surname: this.surname,
            patronymic: this.partonymic,
            cities: this.cities,
            role: this.role,
        }
    }
}

module.exports = User;