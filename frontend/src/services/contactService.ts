import api from './api';

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
    return api.post('/contact', formData).then(res => res.data);
  }
};
