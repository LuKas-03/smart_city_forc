const СityModel = require('./Сity');
const Сity = require('../../../Domain/CityDomain/City');


class СityRepository {
    static get = async () => {
        try {
            const сityModels = await СityModel.find();
            const сities = сityModels.map(сityModel => Сity.modelToDomain(сityModel));
            return сities;
        } catch(error) {
            console.log('[GET СITY ERR]', error);
            throw error;
        }
    };

    static save = async (name, population) => {
        try {
            let сityModel = new СityModel({ name, population });
            сityModel = await сityModel.save();
            return Сity.modelToDomain(сityModel);
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
            return Сity.modelToDomain(cityModel);
        } catch(error) {
            console.log('[GET ONE СITY ERR]', error);
            throw error;
        }
    };

    static delete = async (id) => {
        try {
            const сityModel = await СityModel.findByIdAndDelete(id);
            return Сity.modelToDomain(сityModel);
        } catch(error) {
            console.log('[DELETE СITY ERR]', error);
            throw error;
        }
    };
}

module.exports = СityRepository;