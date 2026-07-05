const express = require('express');
const blogController = require('../controllers/blog.controller');

const router = express.Router();

router.get('/', blogController.getAllBlogs);
router.get('/:id', blogController.getBlogById);

module.exports = router;
