const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    name: {
        type: String,
        required: true,
    },
    url: {
        type: String
    },
    port: {
        type: String
    },
    parameters: {
        type: [String],
        required: true
    },
    formula: {
        type: String
    },
    subgroup_id: {
        type: Schema.Types.ObjectId,
        ref: 'Subgroup'
    }
});

module.exports = IndicatorProvider = mongoose.model('IndicatorProvider', schema);