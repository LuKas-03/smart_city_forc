const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const schema = new Schema({
    name: {
        type: String,
    },
    group_id: {
        type: Schema.Types.ObjectId,
        ref: "IndicatorGroup"
    }
})

module.exports = IndicatorSubgroup = mongoose.model('IndicatorSubgroup', schema);