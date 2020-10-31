const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const schema = new Schema({
    name: {
        type: String,
        unique: true,
        required: true,
    },
    index: {
        type: Number,
        required: true,
        default: 0
    }
})

module.exports = Sity = mongoose.model('Sity', schema);