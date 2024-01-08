const express = require('express');
const router = express.Router();

const bookcontroller = require("../Controllers/bookscontroller");

router.post("/addbook", bookcontroller.addbook);
router.get("/getbook/:type", bookcontroller.getbooksbycategory);

module.exports = router;