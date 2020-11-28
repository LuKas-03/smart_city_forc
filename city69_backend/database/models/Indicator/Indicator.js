const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const schema = new Schema({
    direction_id: {
        type: Schema.Types.ObjectId,
        ref: 'Direction',
        required: true
    },
    integration_id: {
        type: Schema.Types.ObjectId,
        ref: 'Integration',
    },
    type: {
        type: String,
    },
    data: {

    },
    values: {
        type: Array,
        default: [
            //{
            //  date: Date,
            //  index
            //}
        ]
    }
})

module.exports = Indicator = mongoose.model('Indicator', schema);