const express = require('express');
const router = express.Router();

// Import the book controller
const { addBook, getBooksByCategory } = require('../Controllers/bookscontroller');

// Define the routes using the controller functions
router.post('/addbook', addBook); // Endpoint for adding a book
router.get('/books/:category', getBooksByCategory); // Endpoint for getting books by category

// Export the router for use in other files
module.exports = router;
