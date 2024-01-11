const express = require('express');
const router = express.Router();

const bookcontroller = require('../Controllers/bookscontroller');
const booktypecontroller = require('../Controllers/booktypecontroller');

router.post('/addbook', bookcontroller.addBook); // Corrected the function name
router.get('/getbook/:type', bookcontroller.getBooksByCategory);  // Assuming you have this function defined in booktypecontroller

module.exports = router;
