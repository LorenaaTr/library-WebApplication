const express = require('express');
const router = express.Router();
const booksController = require('../Controllers/bookscontroller');


router.post('/createbook', booksController.createBook);
router.get('/getbooks', booksController.getBooks);


module.exports = router;