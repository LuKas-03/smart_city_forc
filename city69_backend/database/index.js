const mongoose = require('mongoose');
const config = require('../config/config');


const connect = async () => {
    try {
        await mongoose.connect(config.mongoURL, 
            { 
                useNewUrlParser: true, 
                useUnifiedTopology: true 
            } )
        console.log('Database successfully connected. URL::: ' + config.mongoURL)
    } catch (error) {
        console.log('Database connection failed ::: ' + error.message)
        throw (error);
    }
}

module.exports = connect;
