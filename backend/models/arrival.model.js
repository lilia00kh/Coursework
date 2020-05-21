const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const arrivalSchema = new Schema({
    time: { type: Time, required: true },
    company: { type: Number, required: true },
    way: { type: Number, required: true },
    status: { type: Number, required: true },
}, {
    timestamps: true,
});

const SpaceStation = mongoose.model('Pier', pierSchema);

module.exports = SpaceStation;