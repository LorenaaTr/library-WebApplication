const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
  url: {
    type: String,
    required: true,
  },
  altText: {
    type: String,
    required: true,
  },
});

const books = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: imageSchema,
    required: true,
  },
},
{
    collection:"Books"
});

mongoose.model('Books', books);

