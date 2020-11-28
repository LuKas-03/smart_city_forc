const СityModel = require('./Сity');
const Сity = require('../../../Domain/CityDomain/City');


class СityRepository {
    static get = async (obj = {}) => {
        try {
            console.log('получаем города')
            const сityModels = await СityModel.find(obj);
            console.log('Получили города')
            const сities = сityModels.map(сityModel => new Сity(сityModel));
            return сities;
        } catch(error) {
            console.log('[GET СITY ERR]', error);
            throw error;
        }
    };

    static save = async (name, population, size) => {
        try {
            let сityModel = new СityModel({ name, population, size});
            сityModel = await сityModel.save();
            return new Сity(сityModel);
        } catch(error) {
            console.log('[SAVE СITY ERR]', error);
            if (error.name === 'MongoError' && error.code === 11000) {
                return {errorCode: 0, message: 'уже существует'};
            }
            throw error;
        }
    };

    static getOne = async (id) => {
        try {
            const cityModel = await СityModel.findById(id);
            return new Сity(cityModel);
        } catch(error) {
            console.log('[GET ONE СITY ERR]', error);
            throw error;
        }
    };

    static delete = async (id) => {
        try {
            const сityModel = await СityModel.findByIdAndDelete(id);
            return new Сity(сityModel);
        } catch(error) {
            console.log('[DELETE СITY ERR]', error);
            throw error;
        }
    };
}

module.exports = СityRepository;