const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const departureSchema = new Schema({
    time: { type: String, required: true },
    company: { type: String, required: true },
    way: { type: String, required: true },
}, {
    timestamps: true,
});

const DepartureModel = mongoose.model('Departure', departureSchema);

module.exports = DepartureModel;