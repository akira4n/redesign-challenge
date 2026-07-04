import React, { useState } from 'react';
import { Card } from '../components/ui/Card';
import { Input, TextArea } from '../components/ui/Input';
import { Button } from '../components/ui/Button';
import { contactService } from '../services/contactService';
import type { IContactForm } from '../services/contactService';
import { Mail, Phone, MapPin, Clock, CheckCircle } from 'lucide-react';

export const ContactPage: React.FC = () => {
  // State Form
  const [formData, setFormData] = useState<IContactForm>({
    name: '',
    email: '',
    category: 'Aduan Klasifikasi Gim',
    subject: '',
    message: ''
  });
  
  const [errors, setErrors] = useState<Partial<IContactForm>>({});
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  // Validasi Input
  const validateForm = () => {
    const newErrors: Partial<IContactForm> = {};
    if (!formData.name.trim()) newErrors.name = 'Nama lengkap wajib diisi';
    if (!formData.email.trim()) {
      newErrors.email = 'Email wajib diisi';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Format email tidak valid';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subjek wajib diisi';
    if (!formData.message.trim()) newErrors.message = 'Pesan wajib diisi';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Submit Handler
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    contactService.submitForm(formData).then((res) => {
      setLoading(false);
      if (res.success) {
        setSuccessMessage(res.message);
        // Reset form
        setFormData({
          name: '',
          email: '',
          category: 'Aduan Klasifikasi Gim',
          subject: '',
          message: ''
        });
        setErrors({});
      }
    });
  };

  const handleInputChange = (field: keyof IContactForm, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error message on change
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      
      {/* 1. Hero Section (Navy) */}
      <section className="bg-navy-gradient text-white py-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10 pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col gap-4">
          <span className="bg-white/10 px-4 py-1 rounded-full text-xs font-bold tracking-wider uppercase backdrop-blur-sm text-accent-yellow self-center">
            Hubungi Layanan Publik
          </span>
          <h1 className="text-3xl md:text-5xl font-black tracking-tight leading-tight">
            Hubungi <span className="text-accent-yellow">Kami</span>
          </h1>
          <p className="text-slate-300 text-xs md:text-sm max-w-xl mx-auto leading-relaxed">
            Indonesia Game Rating System berkomitmen untuk memberikan layanan publik yang transparan dan akuntabel. Kami siap membantu Anda terkait pengajuan klasifikasi gim, aduan ketidaksesuaian konten, serta informasi regulasi terkini.
          </p>
        </div>
      </section>

      {/* 2. Layout Form & Kontak */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex-1">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Kolom Kiri: Form Kirim Pesan */}
          <div className="lg:col-span-7">
            <Card className="p-8 bg-white border border-slate-100 shadow-md">
              <h2 className="text-xl font-bold text-slate-800 mb-6">Kirim Pesan</h2>
              
              {successMessage ? (
                /* Success Notice */
                <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl p-6 flex items-start gap-4 animate-fade-in mb-6">
                  <CheckCircle className="text-emerald-600 shrink-0 mt-0.5" size={24} />
                  <div>
                    <h3 className="font-bold text-sm">Pesan Terkirim!</h3>
                    <p className="text-xs text-emerald-700 leading-relaxed mt-1">{successMessage}</p>
                    <Button
                      variant="outline"
                      size="sm"
                      className="mt-4 border-emerald-300 hover:bg-emerald-100 hover:border-emerald-400 text-emerald-800"
                      onClick={() => setSuccessMessage(null)}
                    >
                      Kirim Pesan Baru
                    </Button>
                  </div>
                </div>
              ) : (
                /* Form */
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Nama Lengkap */}
                    <Input
                      label="Nama Lengkap *"
                      id="name"
                      placeholder="Masukkan nama lengkap Anda"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      error={errors.name}
                    />
                    
                    {/* Email */}
                    <Input
                      label="Email *"
                      id="email"
                      type="email"
                      placeholder="contoh@domain.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      error={errors.email}
                    />
                  </div>

                  {/* Kategori Laporan */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="category" className="text-sm font-medium text-slate-700">
                      Kategori laporan
                    </label>
                    <select
                      id="category"
                      value={formData.category}
                      onChange={(e) => handleInputChange('category', e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-800 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm transition-all duration-200"
                    >
                      <option value="Aduan Klasifikasi Gim">Aduan Klasifikasi Gim</option>
                      <option value="Pengajuan Rating Baru">Pengajuan Rating Baru</option>
                      <option value="Kerja Sama Kemitraan">Kerja Sama Kemitraan</option>
                      <option value="Pertanyaan Umum">Pertanyaan Umum</option>
                    </select>
                  </div>

                  {/* Subjek */}
                  <Input
                    label="Subjek *"
                    id="subject"
                    placeholder="Tulis subjek laporan Anda"
                    value={formData.subject}
                    onChange={(e) => handleInputChange('subject', e.target.value)}
                    error={errors.subject}
                  />

                  {/* Pesan */}
                  <TextArea
                    label="Pesan *"
                    id="message"
                    placeholder="Tuliskan pesan atau detail aduan Anda secara lengkap..."
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    error={errors.message}
                  />

                  {/* Tombol Kirim */}
                  <div className="pt-2">
                    <Button
                      type="submit"
                      variant="primary"
                      size="md"
                      className="w-full sm:w-auto"
                      disabled={loading}
                    >
                      {loading ? (
                        <span className="flex items-center justify-center gap-2">
                          <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                          Mengirim...
                        </span>
                      ) : (
                        'Kirim'
                      )}
                    </Button>
                  </div>
                </form>
              )}
            </Card>
          </div>

          {/* Kolom Kanan: Informasi Kantor & Jam Operasional */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Card Informasi Kantor */}
            <Card className="p-8 bg-white border border-slate-100 shadow-md flex flex-col gap-6">
              <h2 className="text-xl font-bold text-slate-800">Informasi Kantor</h2>
              
              <div className="flex flex-col gap-5 text-sm text-slate-600">
                {/* Alamat */}
                <div className="flex gap-4 items-start">
                  <MapPin className="text-primary shrink-0 mt-1" size={20} />
                  <div>
                    <h3 className="font-semibold text-slate-800 mb-1">Alamat kantor</h3>
                    <p className="leading-relaxed">
                      Jl. Medan Merdeka Barat No.9, RT.002/RW.003, Gambir, Jakarta Pusat, DKI Jakarta 10110
                    </p>
                  </div>
                </div>

                {/* Kontak */}
                <div className="flex gap-4 items-center">
                  <Phone className="text-primary shrink-0" size={20} />
                  <div>
                    <h3 className="font-semibold text-slate-800 leading-none">Telepon</h3>
                    <p className="mt-1 font-semibold text-slate-700">+62811806860</p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-center">
                  <Mail className="text-primary shrink-0" size={20} />
                  <div>
                    <h3 className="font-semibold text-slate-800 leading-none">Email</h3>
                    <p className="mt-1 font-semibold text-slate-700">helpdesk@igrs.id</p>
                  </div>
                </div>

                {/* Jam Kerja */}
                <div className="flex gap-4 items-start border-t border-slate-100 pt-5 mt-2">
                  <Clock className="text-primary shrink-0 mt-0.5" size={20} />
                  <div className="w-full">
                    <h3 className="font-semibold text-slate-800 mb-3">Jam Kerja</h3>
                    
                    {/* Tabel Jam Kerja Clean */}
                    <div className="overflow-hidden border border-slate-100 rounded-xl">
                      <table className="min-w-full divide-y divide-slate-100 text-xs md:text-sm">
                        <tbody className="bg-white divide-y divide-slate-100">
                          <tr>
                            <td className="px-4 py-3 font-medium text-slate-700 bg-slate-50">Senin - Kamis</td>
                            <td className="px-4 py-3 text-slate-600 text-right">08:00 - 16:00 WIB</td>
                          </tr>
                          <tr>
                            <td className="px-4 py-3 font-medium text-slate-700 bg-slate-50">Jumat</td>
                            <td className="px-4 py-3 text-slate-600 text-right">08:00 - 16:30 WIB</td>
                          </tr>
                          <tr>
                            <td className="px-4 py-3 font-medium text-slate-700 bg-slate-50">Sabtu - Minggu</td>
                            <td className="px-4 py-3 font-bold text-rose-600 text-right uppercase tracking-wider">TUTUP</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                  </div>
                </div>

              </div>
            </Card>
          </div>

        </div>
      </section>

    </div>
  );
};
