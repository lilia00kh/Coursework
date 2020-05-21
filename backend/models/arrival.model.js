const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const arrivalSchema = new Schema({
    time: { type: String, required: true },
    company: { type: String, required: true },
    way: { type: String, required: true },
}, {
    timestamps: true,
});

const ArrivalModel = mongoose.model('Arrival', arrivalSchema);

module.exports = ArrivalModel;