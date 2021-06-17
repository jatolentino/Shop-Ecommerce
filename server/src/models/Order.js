const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema({
  userId: {
    type: String,
    required: true,
  },
  user_first_name: {
    type: String,
    required: true,
  },
  user_last_name: {
    type: String,
    required: true,
  },
  company_name: {
    type: String,
    required: false,
  },
  user_email: {
    type: String,
    required: true,
  },
  user_phone: {
    type: String,
    required: true,
  },
  user_country: {
    type: String,
    required: true,
  },
  user_address: {
    type: String,
    required: true,
  },
  user_city: {
    type: String,
    required: true,
  },
  user_postcode: {
    type: String,
    required: true,
  },
  user_order_notes: {
    type: String,
    required: false,
  },
  totalPrice: {
    type: Number,
    default: 0.0,
  },
  orderItems: [
    {
      name: { type: String },
      quantity: { type: Number },
      price: { type: Number },
      image_public_id: {
        type: String,
      },
    },
  ],

  isPaid: {
    type: Boolean,
    default: false,
  },
  isDelivered: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Order", orderSchema);
