const prisma = require('../config/database');

class GameRepository {
  async findAll() {
    return prisma.game.findMany({
      orderBy: {
        createdAt: 'asc'
      }
    });
  }

  async findById(id) {
    return prisma.game.findUnique({
      where: { id }
    });
  }
}

module.exports = new GameRepository();
