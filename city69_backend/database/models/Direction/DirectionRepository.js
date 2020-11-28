const DirectionModel = require('./Direction');
const Direction = require('../../../Domain/DirectionDomain/Direction');


class DirectionRepository {
    static get = async (obj = {}) => {
        try {
            const directionModels = await DirectionModel.find(obj);
            const directions = directionModels.map(directionModel => new Direction(directionModel));
            return directions;
        } catch(error) {
            console.log('[GET DIRECTION ERR]', error);
            throw error;
        }
    };

    static save = async (city_id, name) => {
        try {
            let directionModel = new СityModel({ city_id, name });
            directionModel = await directionModel.save();
            return new Direction(directionModel);
        } catch(error) {
            console.log('[DIRECTION СITY ERR]', error);
            if (error.name === 'MongoError' && error.code === 11000) {
                return {errorCode: 0, message: 'уже существует'};
            }
            throw error;
        }
    };

    static updateValues = async (id, value) => {
        try {
            let directionModel = await DirectionModel.findByIdAndUpdate(id, { $push: { values: value } });
        } catch(error) {
            console.log('[DIRECTION update ERR]', error);
            throw error;
        }
    };

    static getOne = async (id) => {
        try {
            const directionModel = await DirectionModel.findById(id);
            return new Direction(directionModel);
        } catch(error) {
            console.log('[GET ONE DIRECTION ERR]', error);
            throw error;
        }
    };

    static delete = async (id) => {
        try {
            const directionModel = await Direction.findByIdAndDelete(id);
            return new Direction(directionModel);
        } catch(error) {
            console.log('[DELETE Direction ERR]', error);
            throw error;
        }
    };
}

module.exports = DirectionRepository;