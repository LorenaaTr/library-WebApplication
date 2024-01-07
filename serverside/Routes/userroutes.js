const express = require('express');
const router = express.Router();

const usercontroller = require("../Controllers/usercontroller");

router.post("/userdata", usercontroller.userData);

module.exports = router;