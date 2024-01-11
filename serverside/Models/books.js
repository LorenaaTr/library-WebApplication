const mongoose = require('mongoose');

const image = new mongooseongoose.Schema({

});
// Define the books schema
const books = new mongoose.Schema({
  imageUrl: {type:image, required: true},
  title: {
    type: String,
    required: true,
  },
  description: String,
  category: String,
  isbn: {
    type: String,
    required: true,
    unique: true,
  },
  author: String,
  rate: {
    type: Number,
    min: 0,
    max: 5,
  },
  price: Number,
},
{
    collection:"Books"
});

mongoose.model('Books', books);