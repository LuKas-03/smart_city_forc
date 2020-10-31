const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const schema = new Schema({
    city: {
        type: Schema.Types.ObjectId,
        ref: 'Сity',
        required: true
    },
    index: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    provider: {
        type: Schema.Types.ObjectId,
        ref: 'Provider'
    },
    isFromReport: {
        type: Boolean,
        required: true
    },
    values: {
        type: Boolean
    }
})

module.exports = Indicator = mongoose.model('Indicator', schema);