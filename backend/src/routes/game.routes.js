const express = require('express');
const gameController = require('../controllers/game.controller');

const router = express.Router();

router.get('/', gameController.getAllGames);
router.get('/:id', gameController.getGameById);

module.exports = router;
