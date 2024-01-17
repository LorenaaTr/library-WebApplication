const express = require('express');
const router = express.Router();
const bookstypeController = require('../Controllers/booktypecontroller');

router.post('/addbooktype', bookstypeController.addbooktype);
router.get('/getbooktypes', bookstypeController.getbooktypes);
module.exports = router;