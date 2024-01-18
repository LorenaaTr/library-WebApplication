const express = require('express');
const router = express.Router();
const booksController = require('../Controllers/bookscontroller');


router.post('/createbook', booksController.createBook);
router.get('/getbooks', booksController.getBooks);
router.delete('/deletebook/:bookId', booksController.deleteBook);
router.put('/updatebook/:bookId', booksController.updateBook);
router.get('/getbooksbyuser/:user', booksController.getbooksbyuser);
router.get("/getbook/:id", booksController.getbookbyid);
router.get("/bookcount", booksController.getBooksCount);



module.exports = router;