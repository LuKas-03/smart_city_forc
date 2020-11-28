const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const schema = new Schema({
    int_code: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    }
})

module.exports = Integration = mongoose.model('Integration', schema);