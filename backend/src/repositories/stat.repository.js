const prisma = require('../config/database');

class StatRepository {
  async getGameCount() {
    return prisma.game.count();
  }

  async getPublisherCount() {
    return prisma.publisher.count();
  }

  async getRatingsGrouped() {
    return prisma.game.groupBy({
      by: ['ageRating'],
      _count: {
        id: true
      }
    });
  }
}

module.exports = new StatRepository();
