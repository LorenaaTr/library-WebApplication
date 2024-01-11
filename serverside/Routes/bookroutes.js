const express = require('express');
const router = express.Router();

const bookcontroller = require("../Controllers/bookscontroller");
const booktypecontroller = require("../Controllers/booktypecontroller");

router.post("/addbook", bookcontroller.addbook);
router.get("/getbook/:type", bookcontroller.getbooksbycategory);
router.post("/addbooktype", booktypecontroller.addbooktype);

module.exports = router;