const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const departureSchema = new Schema({
    id: { type: Number, required: true },
    departureTime: { type: String, required: true },
    arrivalTime: { type: String, required: true },
    company: { type: String, required: true },
    wayTo: { type: String, required: true },
    wayFrom: { type: String, required: true },
    countOfFreeSeats:{type: Number, required: true}
}, {
    timestamps: true,
});

const DepartureModel = mongoose.model('Departure', departureSchema);

module.exports = DepartureModel;