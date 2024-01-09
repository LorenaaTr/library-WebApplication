const mongoose = require('mongoose');
require("../Models/books");
const Books = mongoose.model("Books");

exports.addbook = async (req, res) =>{
    try {
        const newBook = new Books({
          title: req.body.title,
          description: req.body.description,
          type: req.body.type,
          image: {
            url: req.body.image.url,
            altText: req.body.image.altText,
          },
          pdf: {
            file: {
              url: req.body.pdf.file.url,
              altText: req.body.pdf.file.altText,
            },
          },
          amount: req.body.amount
        });
    
        await newBook.save();
        res.status(201).json({ message: 'Book added successfully.' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}

exports.getbooksbycategory = async (req, res) =>{
    const { type } = req.params;
    try {
        const booksByType = await Books.find({ 'type.type': type.toLowerCase() });
        res.status(200).json({ status: 'ok', data: booksByType });
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}