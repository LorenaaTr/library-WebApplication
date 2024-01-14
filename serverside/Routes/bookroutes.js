const express = require('express');
const router = express.Router();
const booksController = require('../Controllers/bookscontroller');


router.post('/createbook', booksController.createBook);
router.get('/getbooks', booksController.getBooks);
router.delete('/deletebook/:bookId', booksController.deleteBook);
router.put('/updatebook/:bookId', booksController.updateBook);



module.exports = router;