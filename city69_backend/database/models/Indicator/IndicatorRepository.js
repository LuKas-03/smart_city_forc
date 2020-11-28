const IndicatorModel = require('./Indicator');
const Indicator = require('../../../Domain/IndicatorDomain/Indicator');


class IndicatorRepository {
    static get = async () => {
        try {
            const indicatorModels = await IndicatorModel.find();
            const indicators = indicatorModels.map(indicatorModel => new Indicator(indicatorModel));
            return indicators;
        } catch(error) {
            console.log('[GET Indicator ERR]', error);
            throw error;
        }
    };

    static save = async (name, population) => {
        try {
            let indicatorModel = new IndicatorModel({ name, population });
            indicatorModel = await indicatorModel.save();
            return new Indicator(indicatorModel);
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
            const indicatorModel = await IndicatorModel.findById(id);
            return new Indicator(indicatorModel);
        } catch(error) {
            console.log('[GET ONE Indicator ERR]', error);
            throw error;
        }
    };

    static delete = async (id) => {
        try {
            const indicatorModel = await IndicatorModel.findByIdAndDelete(id);
            return new Indicator(indicatorModel);
        } catch(error) {
            console.log('[DELETE Indicator ERR]', error);
            throw error;
        }
    };
}

module.exports = IndicatorRepository;