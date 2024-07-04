const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema({
  name: String,
  location: String,
  type: String,
  pricePerNight: Number,
  bedrooms: Number,
  bathrooms: Number,
  amenities: [String],
  imageUrl: String, // Assuming imageUrl maps to images in your object
  rating: Number,   // Add rating field
  reviews: Number,  // Add reviews field
  images: [String]
});

const Property = mongoose.model('Property', propertySchema);

module.exports = Property;
