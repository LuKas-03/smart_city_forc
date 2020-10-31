const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const schema = new Schema({
    name: {
        type: String,
        required: true,
    },
    sity: {
        type: Schema.Types.ObjectId,
        ref: 'Sity'
    },
    provider: {
        type: Schema.Types.ObjectId,
        ref: 'Provider'
    },
    isFromReport: {
        type: Boolean,
        required: true
    }
})

module.exports = Indicator = mongoose.model('Indicator', schema);