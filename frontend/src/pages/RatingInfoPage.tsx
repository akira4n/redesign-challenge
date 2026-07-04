import React from 'react';
import { Card } from '../components/ui/Card';
import { IgrsOfficialBadge } from '../components/ui/Badge';
import { BookOpen, Scale, Users } from 'lucide-react';

export const RatingInfoPage: React.FC = () => {
  
  // Data detail penjelasan rating sesuai screenshot
  const ratingDetails = [
    {
      rating: '3',
      title: '3 Tahun ke Atas',
      description: 'Dirancang untuk anak-anak usia dini. Menampilkan elemen visual yang ceria, interaksi yang sangat sederhana, dan tidak ada elemen yang menakutkan.',
      tags: ['Visual Sederhana', 'Non Kekerasan']
    },
    {
      rating: '7',
      title: '7 Tahun ke Atas',
      description: 'Mungkin mengandung sedikit kekerasan fantasi ringan yang tidak realistis. Karakter masih bersifat kartun dan tidak menampilkan darah atau luka.',
      tags: ['Fantasi Ringan', 'Kartun']
    },
    {
      rating: '13',
      title: '13 Tahun ke Atas',
      description: 'Konten ditujukan untuk remaja. Mengandung kekerasan yang lebih eksplisit namun tetap terkontrol, penggunaan bahasa yang sedikit lebih berani.',
      tags: ['Kekerasan Menengah', 'Bahasa Remaja']
    },
    {
      rating: '15',
      title: '15 Tahun ke Atas',
      description: 'Memerlukan kedewasaan emosional. Kekerasan lebih intens, tema cerita yang kompleks, dan mungkin menyentuh isu-isu sosial yang lebih dalam.',
      tags: ['Tema Kompleks', 'Kekerasan Intens']
    },
    {
      rating: '18',
      title: '18 Tahun ke Atas',
      description: 'Konten khusus dewasa. Mengandung kekerasan tingkat tinggi, bahasa kasar yang eksplisit, perjudian simulasi, atau elemen konten dewasa lainnya.',
      tags: ['Dewasa', 'Kekerasan Brutal']
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      
      {/* 1. Hero Section (Navy) */}
      <section className="bg-navy-gradient text-white py-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:36px_36px] pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col gap-4">
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight">
            Informasi Klasifikasi Usia
          </h1>
          <p className="text-slate-300 text-xs md:text-sm max-w-xl mx-auto leading-relaxed">
            Panduan resmi Indonesia Game Rating System yang menghadirkan transparansi konten demi melindungi pemain dari materi yang tidak sesuai dengan tahap perkembangan usia.
          </p>
        </div>
      </section>

      {/* 2. Penjelasan Rating Usia IGRS (Grid Centered) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-xl font-extrabold text-primary text-center mb-16 uppercase tracking-wider">
          Penjelasan Rating Usia IGRS
        </h2>

        {/* Flex layout wrap untuk menampung baris pertama (3 kartu) dan baris kedua (2 kartu yang terpusat) */}
        <div className="flex flex-col gap-8 items-center">
          
          {/* Baris Pertama: 3+, 7+, 13+ */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
            {ratingDetails.slice(0, 3).map((item, idx) => (
              <Card key={idx} className="flex flex-col items-center text-center p-8 bg-white border border-slate-100 hover:shadow-md transition-all duration-300">
                <IgrsOfficialBadge rating={item.rating} size="md" className="mb-6" />
                <h3 className="text-base font-bold text-slate-800 mb-3">{item.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed mb-6 flex-1 max-w-[260px]">{item.description}</p>
                <div className="flex gap-2">
                  {item.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="px-2.5 py-1 border border-slate-100 rounded-full text-[9px] font-bold text-slate-400 uppercase tracking-wide">
                      {tag}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>

          {/* Baris Kedua: 15+, 18+ (Centered) */}
          <div className="flex flex-col md:flex-row gap-8 justify-center w-full md:max-w-[760px]">
            {ratingDetails.slice(3).map((item, idx) => (
              <Card key={idx} className="flex flex-col items-center text-center p-8 bg-white border border-slate-100 hover:shadow-md transition-all duration-300 flex-1 md:max-w-[350px]">
                <IgrsOfficialBadge rating={item.rating} size="md" className="mb-6" />
                <h3 className="text-base font-bold text-slate-800 mb-3">{item.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed mb-6 flex-1 max-w-[260px]">{item.description}</p>
                <div className="flex gap-2">
                  {item.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="px-2.5 py-1 border border-slate-100 rounded-full text-[9px] font-bold text-slate-400 uppercase tracking-wide">
                      {tag}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>

        </div>
      </section>

      {/* 3. Panduan Penentuan Klasifikasi */}
      <section className="bg-slate-50 py-20 px-4 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <h2 className="text-xl font-extrabold text-primary text-center mb-16 uppercase tracking-wider">
            Panduan Penentuan Klasifikasi
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
            
            {/* Kiri: Analisis Konten Mendalam (Full Height) */}
            <div className="md:col-span-6 h-full flex">
              <Card className="flex flex-col gap-4 p-8 bg-white hover:shadow-md transition-all duration-300 w-full justify-center">
                <div className="w-12 h-12 rounded-xl bg-primary/5 text-primary flex items-center justify-center mb-2">
                  <BookOpen size={24} />
                </div>
                <h3 className="text-base font-bold text-slate-800">Analisis Konten Mendalam</h3>
                <p className="text-slate-500 text-xs leading-relaxed max-w-md">
                  Setiap gim yang didaftarkan wajib melewati proses pemeriksaan teknis secara menyeluruh dan mendalam, yang mencakup verifikasi detail pada seluruh komponen aset visual, peninjauan ketat terhadap aspek audio serta skrip dialog, hingga pengujian komprehensif pada fungsi mekanisme gameplay dan interaksi guna mendeteksi, mengukur, serta mengevaluasi setiap potensi unsur sensitif secara sangat presisi demi menghasilkan klasifikasi rating yang akurat sesuai standar keselamatan digital.
                </p>
              </Card>
            </div>

            {/* Kanan: Aspek Hukum dan Dewan Penilai (2 stacked cards) */}
            <div className="md:col-span-6 flex flex-col gap-8">
              
              {/* Aspek Hukum */}
              <Card className="flex flex-col gap-4 p-8 bg-white hover:shadow-md transition-all duration-300 flex-1 justify-center">
                <div className="w-12 h-12 rounded-xl bg-[#2A9D8F]/5 text-[#2A9D8F] flex items-center justify-center mb-2">
                  <Scale size={24} />
                </div>
                <h3 className="text-base font-bold text-slate-800">Aspek Hukum</h3>
                <p className="text-slate-500 text-xs leading-relaxed">
                  Proses klasifikasi gim diselenggarakan secara resmi berdasarkan payung hukum Peraturan Menteri Kominfo Nomor 11 Tahun 2016 tentang Klasifikasi Permainan Elektronik untuk menjamin kepatuhan regulasi.
                </p>
              </Card>

              {/* Dewan Penilai */}
              <Card className="flex flex-col gap-4 p-8 bg-white hover:shadow-md transition-all duration-300 flex-1 justify-center">
                <div className="w-12 h-12 rounded-xl bg-accent-blue/5 text-accent-blue flex items-center justify-center mb-2">
                  <Users size={24} />
                </div>
                <h3 className="text-base font-bold text-slate-800">Dewan Penilai</h3>
                <p className="text-slate-500 text-xs leading-relaxed">
                  Penilaian dilakukan dengan melibatkan kolaborasi aktif antara psikolog anak, ahli teknologi, serta perwakilan masyarakat guna memastikan hasil klasifikasi yang objektif, terpercaya, dan akurat.
                </p>
              </Card>

            </div>

          </div>

        </div>
      </section>

    </div>
  );
};
