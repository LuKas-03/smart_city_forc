const JobScheduler = require('./JobScheduler');
const City = require('../database/models/Сity/СityRepository');
const Direction = require('../database/models/Direction/DirectionRepository');
const Indicator = require('../database/models/Indicator/IndicatorRepository');
const Integration = require('../database/models/Integration/IntegrationRepository');



class IntegrationWorker extends JobScheduler {
    onRun(success, failure) {
        (async() => {
            try {
                await this.integrations();
                console.log('hello')
                success();
            } catch(err) {
                console.log('[ERROR] IntegrationWorker failed')
                failure(err);
            }
        })()
    }

    integrations = async () => {
        try {
            console.log('[INFO] start integrations')
            const cities = await City.get();

            console.log('1')
            for (let city of cities) {
                
                console.log('2')
                const directions = await Direction.get({ city_id: city.id});

                for(let direction of directions) {

                    const indicators = await Indicator.get({ direction_id: direction.id });

                    for(let indicator of indicators ) {

                        const integration = indicator.integration_id //я долбоеб и назвал это integration_id хотя это потом стало объектом с интеграцией
                        const data = indicator.data;

                        const integrationScript = require(`../integrations/${integration.int_code}`);
                        const result_integration = await integrationScript(integration, data);


                        await Indicator.updateValues(indicator.id, { date: new Date(), index: result_integration });
                    }


                }

            }
            console.log('[INFO] finish integrations')

        } catch(err) {
            console.log('[ERROR] error integrations', err)
        }
    }
}

module.exports = {
    instance : new IntegrationWorker()
  }
  