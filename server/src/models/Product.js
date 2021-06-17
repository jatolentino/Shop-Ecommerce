const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  images: {
    type: String,
    required: true,
  },
  image_public_id: {
    type: String,
    required: false
  },
  price: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  ratings: {
    type: String,
    required: false,
  },
  reviews: [
    {
      title: String,
      text: String,
      rating: String,
      username: String,
      createdAt: String,
    },
  ],
  total_in_stock: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Product", productSchema);
