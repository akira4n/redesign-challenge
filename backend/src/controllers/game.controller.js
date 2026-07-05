const gameService = require('../services/game.service');

class GameController {
  async getAllGames(req, res) {
    try {
      const games = await gameService.getAllGames();
      return res.status(200).json(games);
    } catch (error) {
      console.error('Error fetching games:', error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  async getGameById(req, res) {
    try {
      const { id } = req.params;
      const game = await gameService.getGameById(id);
      if (!game) {
        return res.status(404).json({ error: 'Game not found' });
      }
      return res.status(200).json(game);
    } catch (error) {
      console.error(`Error fetching game with ID ${req.params.id}:`, error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}

module.exports = new GameController();
