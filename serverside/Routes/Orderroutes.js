const express = require('express');
const router = express.Router();

const orderController = require("../Controllers/orderController");

router.post("/addorder", orderController.addOrder);

module.exports = router;