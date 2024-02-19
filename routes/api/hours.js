const express = require('express');
const router = express.Router();
const hoursCtrl = require('../../controllers/api/hours');

// POST /api/hours
router.post('/', hoursCtrl.create);


module.exports = router;