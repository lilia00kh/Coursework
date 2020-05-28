const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const orderSchema = new Schema({
    email: { type: String, required: true },
    name: { type: String, required: true },
    sername: { type: String, required: true },
    numberOfDocument: { type: Number, required: true },
    count: { type: Number, required: true },
}, {
    timestamps: true,
});

const OrderModel = mongoose.model('Order', orderSchema);

module.exports = OrderModel;