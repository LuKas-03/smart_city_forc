const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const schema = new Schema({
    city_id: {
        type: Schema.Types.ObjectId,
        ref: 'City'
    },
    name: {
        type: String,
        required: true,
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

module.exports = Direction = mongoose.model('Direction', schema);