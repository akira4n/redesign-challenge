const express = require('express');
const statController = require('../controllers/stat.controller');

const router = express.Router();

router.get('/', statController.getStats);

module.exports = router;
