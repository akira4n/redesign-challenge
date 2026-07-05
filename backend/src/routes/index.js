const express = require('express');
const gameRoutes = require('./game.routes');
const blogRoutes = require('./blog.routes');
const statRoutes = require('./stat.routes');
const contactRoutes = require('./contact.routes');

const router = express.Router();

router.use('/games', gameRoutes);
router.use('/blogs', blogRoutes);
router.use('/stats', statRoutes);
router.use('/contact', contactRoutes);

module.exports = router;
