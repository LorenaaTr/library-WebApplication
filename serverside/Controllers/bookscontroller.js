const mongoose = require('mongoose');
const Books = mongoose.model("Books");

exports.createBook = async (req, res) => {
  try {
    const { title, user, category, author, isbn, description, price, image } = req.body;

    if (!title  || !category || !author || !isbn || !description || !price) {
      return res.status(400).send({ error: "Please provide all required fields." });
    }

    const slug = title.split(' ').join('-').toLowerCase().replace(/[^a-zA-Z0-9-]/g, '');

    const newBook = await Books.create({
      title,
      user,
      category,
      author,
      isbn,
      description,
      price,
      image: image || "https://firebasestorage.googleapis.com/v0/b/shelfshare-3835c.appspot.com/o/1705068521443-cover.jpg?alt=media&token=ee5cf97b-8de2-4c5c-9dc4-eb6e1df08565",
      slug,
    });

    res.status(201).json(newBook);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};



exports.getBooks = async (req, res) => {
  try {
    const startIndex = parseInt(req.query.startIndex) || 0;
    const limit = parseInt(req.query.limit) || 9;
    const sortDirection = req.query.order === 'asc' ? 1 : -1;

    const books = await Books.find({
      ...(req.query.category && { category: req.query.category }),
      ...(req.query.title && { title: req.query.title }),
      ...(req.query.libraryName && { libraryName: req.query.libraryName }),
      ...(req.query.slug && { slug: req.query.slug }),
      ...(req.query.author && { author: req.query.author }),
      ...(req.query.bookId && { _id: req.query.bookId }),
      ...(req.query.isbn && { isbn: req.query.isbn }),
      ...(req.query.searchTerm && {
        $or: [
          { title: { $regex: req.query.searchTerm, $options: 'i' } },
          { description: { $regex: req.query.searchTerm, $options: 'i' } },
        ],
      }),
    }).sort({ updatedAt: sortDirection }).skip(startIndex).limit(limit);

    const totalBooks = await Books.countDocuments();

    res.setHeader('Content-Type', 'application/json');

    res.status(200).json({
      books,
      totalBooks,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


exports.deleteBook = async (req, res) => {
  try {
    await Books.findByIdAndDelete(req.params.bookId);
    res.status(200).json('The book has been deleted!');
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateBook = async (req, res) => {
  try {
    const updatedBook = await Books.findByIdAndUpdate(
      req.params.bookId,
      {
        $set: {
          title: req.body.title,
          libraryName: req.body.libraryName,
          author: req.body.author,
          description: req.body.description,
          price: req.body.price,
          isbn: req.body.isbn,
          category: req.body.category,
          image: req.body.image,
        }
      },
      { new: true }
    );

    res.status(200).json(updatedBook);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
