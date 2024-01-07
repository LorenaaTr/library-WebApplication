const mongoose = require('mongoose');
const booktypes = require('./booktypes');

const fileSchema = new mongoose.Schema({
  url: {
    type: String,
    required: true,
  },
  altText: {
    type: String,
    required: true,
  },
});

const pdfSchema = new mongoose.Schema({
  file: {
    type: fileSchema,
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
  type: {
    type: booktypes,
    required:true,
  },
  image: {
    type: fileSchema,
    required: true,
  },
  pdf: {
    type: pdfSchema,
    required: true,
  },
  amount:{
    type:Number,
    required:true   
  }
},
{
    collection:"Books"
});

mongoose.model('Books', books);

