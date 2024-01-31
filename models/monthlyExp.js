const mongoose = require('mongoose');
const Schema = require('mongoose').Schema;

const monthlyExpSchema = new Schema({
    expense: {type: String, required: true},
    cost: {type: Number, required: true}
})



module.exports = mongoose.model('MonthlyExp', monthlyExpSchema);