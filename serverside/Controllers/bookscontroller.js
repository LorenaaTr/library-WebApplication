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

    exports.getBooks = async (req, res, next) => {
      try {
        const startIndex = parseInt(req.query.startIndex) || 0;
        const limit = parseInt(req.query.limit) || 9;
        const sortDirection = req.query.order === 'asc' ? 1 : -1;
        const books = await Books.find({
          ...(req.query.category && {category: req.query.category}),
          ...(req.query.title && {title: req.query.title}),
          ...(req.query.slug && {slug: req.query.slug}),
          ...(req.query.author && {author: req.query.author}),
          ...(req.query.bookId && {_id: req.query.bookId}),
          ...(req.query.isbn && {isbn: req.query.isbn}),
          ...(req.query.searchTerm && {
            $or: [
              { title: { $regex: req.query.searchTerm, $options: 'i'} },
              { description: { $regex: req.query.searchTerm, $options: 'i'} },
            ],
          }),

        }).sort({ updatedAt: sortDirection}).skip(startIndex).limit(limit);
        const totalBooks = await Books.countDocuments(); 
        res.status(200).json({
          books,
          totalBooks,
        });
        
      } catch (error) {
        next(error);
      }
    };

    exports.deleteBook = async (req, res, next) => {
      try {
        await Books.findByIdAndDelete(req.params.bookId);
        res.status(200).json('The post has been deleted!');
      } catch (error) {
        next(error);
      }
    };

    exports.updateBook = async (req, res, next) => {
      try {
        const updatedBook = await Books.findByIdAndUpdate(
          req.params.bookId,
          {
            $set: {
              title: req.body.title,
              author: req.body.author,
              description: req.body.description,
              price: req.body.price,
              isbn: req.body.isbn,
              category: req.body.category,
              image: req.body.image,

            }}, { new: true})
            res.status(200).json(updatedBook);
      } catch (error) {
        next(error);
      }
    };