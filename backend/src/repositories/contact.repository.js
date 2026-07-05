const prisma = require('../config/database');

class ContactRepository {
  async create(data) {
    return prisma.contactMessage.create({
      data: {
        name: data.name,
        email: data.email,
        category: data.category,
        subject: data.subject,
        message: data.message
      }
    });
  }
}

module.exports = new ContactRepository();
