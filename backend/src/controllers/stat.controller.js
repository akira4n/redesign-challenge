const statService = require('../services/stat.service');

class StatController {
  async getStats(req, res) {
    try {
      const stats = await statService.getStats();
      if (!stats) {
        return res.status(404).json({ error: 'Stats not found' });
      }
      return res.status(200).json(stats);
    } catch (error) {
      console.error('Error fetching stats:', error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}

module.exports = new StatController();
