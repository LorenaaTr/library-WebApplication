const mongoose = require('mongoose');
const Books = require('../Models/books'); 


const errorHandler = (statusCode, message) => {
    const error = new Error(message);
    error.statusCode = statusCode;
    return error;
};

exports.createBook = async (req, res, next) => {
  
    if (!req.body.title || !req.body.category || !req.body.author || !req.body.isbn || !req.body.description || !req.body.price) {
        return next(errorHandler(400, 'Please provide all required fields'));
      }

      const slug = req.body.title
      .split(' ')
      .join('-')
      .toLowerCase()
      .replace(/[^a-zA-Z0-9-]/g, '');

    const newBook = new Books({
      ...req.body,
      slug,
    });
    
    try {
        const savedBook = await newBook.save();
        res.status(201).json(savedBook);
      } catch (error) {
        next(error);
      }
    };