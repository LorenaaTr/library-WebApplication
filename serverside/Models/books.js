const mongoose = require('mongoose');

const booksSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  isbn: {
    type: String,
    required: true,
    unique: true,
  },
  slug: {
    type: String,
    required: true,
  },
  price: {
    type: Number, 
    required: true,
  },
  image: {
    type: String,
    default: "gs://shelfshare-3835c.appspot.com/1705068521443-cover.jpg",
  }
}, { timestamps: true });

const Books = mongoose.model('Books', booksSchema);

module.exports = Books;
