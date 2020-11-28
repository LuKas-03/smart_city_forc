const IntegrationModel = require('./Integration');
const Integration = require('../../../Domain/IntegrationDomain/Integration');


class IntegrationRepository {
    static get = async (obj = {}) => {
        try {
            const integrationModels = await IntegrationModel.find(obj);
            const integrations = integrationModels.map(integrationModel => new Integration(integrationModel));
            return indicators;
        } catch(error) {
            console.log('[GET Indicator ERR]', error);
            throw error;
        }
    };

    static save = async ({ int_code, name , url }) => {
        try {
            let integrationModel = new IntegrationModel({ int_code, name , url });
            integrationModel = await integrationModel.save();
            return new Integration(integrationModel);
        } catch(error) {
            console.log('[SAVE Indicator ERR]', error);
            if (error.name === 'MongoError' && error.code === 11000) {
                return {errorCode: 0, message: 'уже существует'};
            }
            throw error;
        }
    };

    static getOne = async (id) => {
        try {
            const integrationModel = await IntegrationModel.findById(id);
            return new Integration(integrationModel);
        } catch(error) {
            console.log('[GET ONE Indicator ERR]', error);
            throw error;
        }
    };

    static delete = async (id) => {
        try {
            const integrationModel = await IntegrationModel.findByIdAndDelete(id);
            return new Integration(integrationModel);
        } catch(error) {
            console.log('[DELETE Integration ERR]', error);
            throw error;
        }
    };
}

module.exports = IntegrationRepository;