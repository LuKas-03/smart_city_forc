const IndicatorProviderModel = require('./IndicatorProvider');
const IndicatorModel = require('./Indicator');
const IndicatorProvider = require('../../../Domain/IndicatorDomain/IndicatorProvider');


class IndicatorProviderRepository {
    static get = async () => {
        try {
            const indicatorProviderModels = await IndicatorProviderModel.find();
            const indicatorProviders = indicatorProviderModels.map(item => IndicatorProvider.modelToDomain(item));
            return indicatorProviders;
        } catch(error) {
            console.log('[GET INDICATOR PROVIDER ERR]', error);
            throw error;
        }
    };

    static save = async (name, url, port, parameters, formula) => {
        try {
            let indicatorProviderModel = new IndicatorProviderModel({ name, url, port, parameters, formula });
            indicatorProviderModel = await indicatorProviderModel.save();
            return IndicatorProvider.modelToDomain(indicatorProviderModel);
        } catch(error) {
            console.log('[SAVE INDICATOR PROVIDER ERR]', error);
            if (error.name === 'MongoError' && error.code === 11000) {
                return {errorCode: 0, message: 'уже существует'};
            }
            throw error;
        }
    };

    static getOne = async (id) => {
        try {
            await IndicatorModel.deleteMany(() => true);
            const indicatorProviderModel = await IndicatorProviderModel.findById(id);
            return IndicatorProvider.modelToDomain(indicatorProviderModel);
        } catch(error) {
            console.log('[GET ONE INDICATOR PROVIDER ERR]', error);
            throw error;
        }
    };

    static delete = async (id) => {
        try {
            const indicatorProviderModel = await IndicatorProviderModel.findByIdAndDelete(id);
            return IndicatorProvider.modelToDomain(indicatorProviderModel);
        } catch(error) {
            console.log('[DELETE INDICATOR PROVIDER ERR]', error);
            throw error;
        }
    };
}

module.exports = IndicatorProviderRepository;