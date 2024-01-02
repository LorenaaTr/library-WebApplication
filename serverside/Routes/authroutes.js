const express = require('express');
const router = express.Router();

const authuser = require("../Controllers/userauthentification");

router.post("/register", authuser.register);
router.post("/login", authuser.login);

module.exports = router;