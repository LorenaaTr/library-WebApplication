const mongoose = require('mongoose');
const Order = require('../Models/order'); // Make sure to provide the correct path
require("../Models/user");
const User = mongoose.model("Users");
exports.addOrder = async (req, res) => {
  try {
    const { user, books, totalAmount, shippingAddress } = req.body;

    const userObj = await User.findById(user);

    if (!userObj) {
      return res.status(404).json({ error: 'User not found' });
    }

    const orderedBooks = books.map(({ book, quantity }) => ({
      book,
      quantity,
    }));

    // Create the order
    const order = new Order({
      user: userObj._id,
      books: orderedBooks,
      totalAmount,
      shippingAddress,
    });

    const savedOrder = await order.save();

    // Update user's books (adjust this part based on your user model structure)
    for (const orderedBook of orderedBooks) {
      const userBook = userObj.books.find((ub) => ub._id.equals(orderedBook.book));
      userBook.counter -= orderedBook.quantity;
    }

    await userObj.save();

    res.json({ order: savedOrder });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
