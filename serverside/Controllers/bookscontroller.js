const mongoose = require('mongoose');
const Book = require('../Models/books');
const multer= reqire('multer')

exports.addBook = async (req, res) => {
    try {
        const newBook = new Book({
            imageUrl: req.body.imageUrl,
            title: req.body.title,
            description: req.body.description,
            category: req.body.category,
            isbn: req.body.isbn,
            author: req.body.author,
            // rate: req.body.rate,
            price: req.body.price,
        });

        await newBook.save();
        res.status(201).json({ message: 'Book added successfully.' });
    } catch (error) {
        console.error(error);
        if (error.code === 11000) {
            res.status(400).json({ error: 'ISBN must be unique' });
        } else {
            res.status(500).json({ error: `Error creating book: ${error.message}` });
        }
    }
};

exports.getBooksByCategory = async (req, res) => {
    const { category } = req.params;
    try {
        const booksByCategory = await Book.find({ category });
        res.status(200).json({ status: 'ok', data: booksByCategory });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};
