const SityModel = require('./Sity');
const Sity = require('../../../Domain/SityDomain/Sity');


class SityRepository {
    static get = async () => {
        try {
            const sityModels = await SityModel.find();
            const sities = sityModels.map(sityModel => Sity.modelToDomain(sityModel));
            return sities;
        } catch(error) {
            console.log('[GET SITY ERR]', error);
            throw error;
        }
    };

    static save = async (name) => {
        try {
            let sityModel = new SityModel({ name });
            sityModel = await sityModel.save();
            return Sity.modelToDomain(sityModel);
        } catch(error) {
            console.log('[SAVE SITY ERR]', error);
            if (error.name === 'MongoError' && error.code === 11000) {
                return {errorCode: 0, message: 'уже существует'};
            }
            throw error;
        }
    };

    static getOne = async (id) => {
        try {
            const sityModel = await SityModel.findById(id);
            return Sity.modelToDomain(sityModel);
        } catch(error) {
            console.log('[GET ONE SITY ERR]', error);
            throw error;
        }
    };

    static delete = async (id) => {
        try {
            const sityModel = await SityModel.findByIdAndDelete(id);
            return Sity.modelToDomain(sityModel);
        } catch(error) {
            console.log('[DELETE SITY ERR]', error);
            throw error;
        }
    };
}

module.exports = SityRepository;