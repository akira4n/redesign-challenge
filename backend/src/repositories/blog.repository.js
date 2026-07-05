const prisma = require('../config/database');

class BlogRepository {
  async findAll() {
    return prisma.blog.findMany({
      orderBy: {
        createdAt: 'asc'
      }
    });
  }

  async findById(id) {
    return prisma.blog.findUnique({
      where: { id }
    });
  }
}

module.exports = new BlogRepository();
