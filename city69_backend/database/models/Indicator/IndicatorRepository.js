const IndicatorModel = require('./Indicator');
const Indicator = require('../../../Domain/IndicatorDomain/Indicator');


class IndicatorRepository {
    static get = async () => {
        try {
            const indicatorModels = await IndicatorModel.find();
            const indicators = indicatorModels.map(indicatorModel => Indicator.modelToDomain(indicatorModel));
            return indicators;
        } catch(error) {
            console.log('[GET INDICATOR ERR]', error);
            throw error;
        }
    };

    static save = async (city, index, date, provider, isFromReport, values) => {
        try {
            let indicatorModel = new IndicatorModel({ city, index, date, provider, isFromReport, values });
            indicatorModel = await indicatorModel.save();
            return Indicator.modelToDomain(indicatorModel);
        } catch(error) {
            console.log('[SAVE INDICATOR ERR]', error);
            if (error.name === 'MongoError' && error.code === 11000) {
                return {errorCode: 0, message: 'уже существует'};
            }
            throw error;
        }
    };

    static getLastDate = async (city, provider) => {
        try {
            return await IndicatorModel
                .find({ city, provider })
                .sort({ date: -1 })
                .limit(1);

        } catch(error) {
            console.log(error);
            throw error;
        }
    };

    static getByCityAndProvider = async (city, provider) => {
        try {
            return await IndicatorModel.find({ city, provider });

        } catch(error) {
            console.log(error);
            throw error;
        }
    };

    static getOne = async (id) => {
        try {
            const indicatorModel = await IndicatorModel.findById(id);
            return Indicator.modelToDomain(indicatorModel);
        } catch(error) {
            console.log('[GET ONE INDICATOR ERR]', error);
            throw error;
        }
    };

    static delete = async (id) => {
        try {
            const indicatorModel = await IndicatorModel.findByIdAndDelete(id);
            return Indicator.modelToDomain(indicatorModel);
        } catch(error) {
            console.log('[DELETE INDICATOR ERR]', error);
            throw error;
        }
    };
}

module.exports = IndicatorRepository;