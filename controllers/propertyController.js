const Property = require('../model/property');

const getAllProperties = async (req, res) => {
  try {
    const properties = await Property.find();
    res.status(200).json(properties);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getPropertyById = async (req, res) => {
  const { id } = req.params;
  try {
    const property = await Property.findById(id);
    if (!property) {
      return res.status(404).json({ error: 'Property not found' });
    }
    res.status(200).json(property);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const createProperty = async (req, res) => {
  const { name, pricePerNight, location, description, bedrooms, bathrooms, type, amenities, images } = req.body;

  const newProperty = new Property({ name, pricePerNight, location, description, bedrooms, bathrooms, type, amenities, images });

  try {
    await newProperty.save();
    res.status(201).json(newProperty);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const updateProperty = async (req, res) => {
  const { id } = req.params;
  const { name, pricePerNight, location, description, bedrooms, bathrooms, type, amenities, images } = req.body;

  try {
    const property = await Property.findByIdAndUpdate(id, { name, pricePerNight, location, description, bedrooms, bathrooms, type, amenities, images }, { new: true });
    if (!property) {
      return res.status(404).json({ error: 'Property not found' });
    }
    res.status(200).json(property);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const deleteProperty = async (req, res) => {
  const { id } = req.params;

  try {
    const property = await Property.findByIdAndDelete(id);
    if (!property) {
      return res.status(404).json({ error: 'Property not found' });
    }
    res.status(200).json({ message: 'Property deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  getAllProperties,
  getPropertyById,
  createProperty,
  updateProperty,
  deleteProperty
};
