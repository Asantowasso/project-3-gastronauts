const { Schema } = require("mongoose");

const restaurantSchema = new Schema({
  name: {
    type: String,
    required: true,
  },

  location: {
    type: String,
  },

  description: {
    type: String,
  },

  image: {
    type: String,
  },

  hours: {
    type: String,
  },

  menu: [
    {
      type: String,
    },
  ],

  tags: [
    {
      type: String,
    },
  ],
});

module.exports = restaurantSchema;