const mongoose = require('mongoose');
const Schema = require('mongoose').Schema;

const hourSchema = new Schema({
    job: { type: Schema.Types.ObjectId, ref: 'Job', required: true },
    numOfHours: { type: Number, required: false},
    numOfMins: { type: Number, required: false},
    date: { type: Date, default: Date.now }
});


module.exports = mongoose.model('Hour', hourSchema);

//set up this model to reference the job and to store the number of hours and the date the hours were worked 