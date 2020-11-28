const IntegrationWorker = require('./schedullers//IntegrationsWorker');
const connectDB = require('./database/index');
const connect = require('./database/index');

connect();

IntegrationWorker.instance.start(5);