const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const schema = new Schema({
    name: {
        type: String,
    },
    city_id: {
        type: Schema.Types.ObjectId,
        ref: 'City',
    }
})

module.exports = IndicatorGroup = mongoose.model('IndicatorGroup', schema);