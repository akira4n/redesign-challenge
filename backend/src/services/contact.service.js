const contactRepository = require('../repositories/contact.repository');

class ContactService {
  async createContactMessage(data) {
    if (!data.name || !data.email || !data.message) {
      throw new Error('Name, email, and message are required');
    }
    return contactRepository.create(data);
  }
}

module.exports = new ContactService();
