const mongoose = require('mongoose');
require("../Models/booktypes");
const BookTypes = mongoose.model("Book Types");

exports.addbooktype = async (req, res) =>{
    try {
        const newBookType = new BookTypes({
          type: req.body.type,
          desc: req.body.desc
        });
    
        await newBookType.save();
        res.status(201).json({ message: 'Book type added successfully.' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}

exports.getbooktypes = async(req, res) =>{
    try {
        const bookTypes = await BookTypes.find();
        res.status(200).json({ data: bookTypes });
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
      }
}

