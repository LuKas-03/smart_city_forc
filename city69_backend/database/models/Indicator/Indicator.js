const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const schema = new Schema({
    name: {
        type: String,
    },
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
        type: String,
        default: '{}'
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