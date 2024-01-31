const mongoose = require('mongoose');
const Schema = require('mongoose').Schema;

const jobSchema = new Schema({
    job: {type: String, required: true},
    money: {type: Number, required: true}
})



module.exports = mongoose.model('Job', jobSchema);

