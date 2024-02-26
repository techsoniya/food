const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  foodId: { type: mongoose.Schema.Types.ObjectId, ref: 'Food', required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  orderId: { type: String, required: true, unique: true }, // Adjust the order ID field
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  deliveryAddress: { type: String }, // Example: Additional field for delivery address
  status: { type: String, enum: ['placed', 'processing', 'shipped', 'delivered'], default: 'placed' },
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
