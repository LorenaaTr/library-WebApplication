const mongoose = require('mongoose');
const librarySchema = require('./partner');

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  user:{
    type: librarySchema, 
    required:true
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
    type: String
  },
  price: {
    type: Number, 
    required: true,
  },
  image: {
    type: String,
    default: "https://firebasestorage.googleapis.com/v0/b/shelfshare-3835c.appspot.com/o/1705068521443-cover.jpg?alt=media&token=ee5cf97b-8de2-4c5c-9dc4-eb6e1df08565",
  },
  counter: { type: Number, default: 0 },
}, { timestamps: true },
{
  collection:"Books"
});



mongoose.model('Books', bookSchema);
