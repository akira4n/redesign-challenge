const contactService = require('../services/contact.service');

class ContactController {
  async submitContactForm(req, res) {
    try {
      await contactService.createContactMessage(req.body);
      return res.status(200).json({
        success: true,
        message: 'Pesan Anda telah berhasil dikirim ke Sekretariat IGRS. Terima kasih atas partisipasi Anda.'
      });
    } catch (error) {
      console.error('Error submitting contact form:', error);
      return res.status(400).json({
        success: false,
        message: error.message || 'Gagal mengirim pesan kontak. Silakan coba lagi.'
      });
    }
  }
}

module.exports = new ContactController();
