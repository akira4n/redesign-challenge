export interface IContactForm {
  name: string;
  email: string;
  category: string;
  subject: string;
  message: string;
}

export const contactService = {
  submitForm: (formData: IContactForm): Promise<{ success: boolean; message: string }> => {
    console.log('Mengirim form kontak ke server:', formData);
    // Di masa depan tinggal ganti dengan: return api.post('/contact', formData).then(res => res.data);
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          success: true,
          message: 'Pesan Anda telah berhasil dikirim ke Sekretariat IGRS. Terima kasih atas partisipasi Anda.'
        });
      }, 800); // Simulasi latency jaringan
    });
  }
};
