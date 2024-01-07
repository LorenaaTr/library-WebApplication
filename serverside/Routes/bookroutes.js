const express = require('express');
const router = express.Router();

const bookcontroller = require("../Controllers/bookscontroller");

router.post("/addbook", bookcontroller.addbook);

module.exports = router;