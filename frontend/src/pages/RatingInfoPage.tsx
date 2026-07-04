import React from 'react';
import { Card } from '../components/ui/Card';
import { BookOpen, Scale, Users } from 'lucide-react';

export const RatingInfoPage: React.FC = () => {
  
  // Data detail penjelasan klasifikasi usia
  const ratingDetails = [
    {
      rating: '3+',
      name: 'Semua Umur',
      colorBg: 'bg-emerald-600',
      colorText: 'text-emerald-700',
      colorLightBg: 'bg-emerald-50 border-emerald-200',
      description: 'Klasifikasi ini ditujukan untuk gim yang cocok bagi anak-anak usia 3 tahun ke atas. Gim dalam kategori ini tidak mengandung unsur kekerasan, adegan seksual, konsumsi alkohol/narkotika, bahasa kasar, perjudian, maupun adegan menakutkan yang dapat merusak psikologi anak.',
      tags: ['Interaksi Aman', 'Ramah Keluarga', 'Edukasi Sederhana', 'Aksi Kartun Ringan']
    },
    {
      rating: '7+',
      name: 'Bimbingan Orang Tua (7+)',
      colorBg: 'bg-sky-600',
      colorText: 'text-sky-700',
      colorLightBg: 'bg-sky-50 border-sky-200',
      description: 'Gim dalam kelompok usia ini mungkin berisi fantasi kekerasan animasi/kartun ringan tanpa darah, efek kejutan (ketakutan ringan), serta interaksi daring sederhana. Disarankan adanya bimbingan dari orang tua untuk memberikan arahan mengenai alur cerita dan aspek permainan.',
      tags: ['Kekerasan Fantasi Ringan', 'Atmosfer Misteri', 'Interaksi Daring Diawasi']
    },
    {
      rating: '13+',
      name: 'Remaja (13+)',
      colorBg: 'bg-amber-500',
      colorText: 'text-amber-700',
      colorLightBg: 'bg-amber-50 border-amber-200',
      description: 'Ditujukan untuk remaja usia 13 tahun ke atas. Konten dapat mencakup kekerasan fantasi atau pertempuran animasi yang lebih sering, penampilan karakter yang sedikit provokatif, bahasa gaul yang agak kasar, serta fitur pembelian dalam gim atau transaksi mikro (microtransaction).',
      tags: ['Kekerasan Animasi', 'Transaksi Mikro', 'Bahasa Gaul', 'Penampilan Karakter']
    },
    {
      rating: '15+',
      name: 'Remaja (15+)',
      colorBg: 'bg-orange-500',
      colorText: 'text-orange-700',
      colorLightBg: 'bg-orange-50 border-orange-200',
      description: 'Kategori ini dirancang untuk remaja berumur 15 tahun ke atas. Gim dapat berisi tembak-menembak intens, simulasi militer dengan efek visual darah (namun tanpa mutilasi sadis), konsumsi alkohol/rokok oleh karakter fiktif, serta fitur interaksi sosial daring yang dinamis.',
      tags: ['Kekerasan Militer', 'Visualisasi Darah', 'Zat Adiktif Ringan', 'Interaksi Daring Bebas']
    },
    {
      rating: '18+',
      name: 'Dewasa (18+)',
      colorBg: 'bg-rose-600',
      colorText: 'text-rose-700',
      colorLightBg: 'bg-rose-50 border-rose-200',
      description: 'Hanya untuk dewasa berusia 18 tahun ke atas. Gim dalam kategori ini berisi kekerasan sadis dengan efek darah nyata dan pemotongan tubuh (mutilasi), adegan seksual eksplisit, ketelanjangan, perjudian aktif, penggunaan narkotika, serta bahasa kotor/makian tingkat tinggi secara konstan.',
      tags: ['Kekerasan Sadis & Darah', 'Seksualitas & Ketelanjangan', 'Perjudian Aktif', 'Bahasa Kasar']
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      
      {/* 1. Hero Section (Navy) */}
      <section className="bg-navy-gradient text-white py-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:36px_36px] pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col gap-4">
          <span className="bg-white/10 px-4 py-1 rounded-full text-xs font-bold tracking-wider uppercase backdrop-blur-sm text-accent-yellow self-center">
            Pedoman Resmi
          </span>
          <h1 className="text-3xl md:text-5xl font-black tracking-tight leading-tight">
            Informasi Klasifikasi Usia
          </h1>
          <p className="text-slate-300 text-xs md:text-sm max-w-xl mx-auto leading-relaxed">
            Pedoman lengkap mengenai pembagian kategori umur pemain game berdasarkan deskriptor konten yang diatur oleh Pemerintah Indonesia.
          </p>
        </div>
      </section>

      {/* 2. Penjelasan Rating (5 Large Vertical Cards) */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col gap-8">
        <h2 className="text-2xl font-extrabold text-slate-800 tracking-tight text-center mb-6">
          Kategori Kelompok Usia IGRS
        </h2>

        {ratingDetails.map((item, idx) => (
          <Card key={idx} className="flex flex-col md:flex-row gap-6 p-8 items-start md:items-center hover:shadow-md transition-all duration-300 bg-white">
            
            {/* Box Angka Rating Kiri */}
            <div className={`w-20 h-20 md:w-24 md:h-24 shrink-0 rounded-2xl ${item.colorBg} text-white font-black text-3xl md:text-4xl flex flex-col items-center justify-center shadow-lg`}>
              {item.rating}
              <span className="text-[8px] font-bold tracking-wider uppercase mt-1">IGRS</span>
            </div>

            {/* Konten Kanan */}
            <div className="flex-1 flex flex-col gap-3">
              <div className="flex flex-wrap items-center gap-3">
                <h3 className="text-lg font-extrabold text-slate-800 leading-none">
                  {item.name}
                </h3>
                <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold border ${item.colorLightBg} uppercase tracking-wider`}>
                  Kategori {item.rating}
                </span>
              </div>
              
              <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
                {item.description}
              </p>

              {/* Tag Kecil di Paling Bawah */}
              <div className="flex flex-wrap gap-2 pt-2">
                {item.tags.map((tag, tagIdx) => (
                  <span
                    key={tagIdx}
                    className="px-2.5 py-1 bg-slate-100 hover:bg-slate-200 text-slate-600 text-[10px] font-semibold rounded-md transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

          </Card>
        ))}
      </section>

      {/* 3. Panduan Penentuan (3 Cards) */}
      <section className="bg-slate-100 py-20 px-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-800 tracking-tight">
              Panduan Penentuan Klasifikasi Usia
            </h2>
            <p className="text-slate-500 text-sm mt-3">
              Bagaimana proses verifikasi dan penentuan rating gim dilakukan secara formal dan legal di IGRS.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Card 1: Analisis Konten Mendalam */}
            <Card className="flex flex-col gap-4 p-8 bg-white hover:shadow-md transform hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                <BookOpen size={24} />
              </div>
              <h3 className="text-base font-bold text-slate-800">Analisis Konten Mendalam</h3>
              <p className="text-slate-500 text-xs leading-relaxed">
                Melakukan evaluasi menyeluruh terhadap aspek visual, cerita, interaksi sosial, mekanisme bermain, serta sistem transaksi internal gim secara objektif.
              </p>
            </Card>

            {/* Card 2: Aspek Hukum */}
            <Card className="flex flex-col gap-4 p-8 bg-white hover:shadow-md transform hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-accent-green/10 text-accent-green flex items-center justify-center">
                <Scale size={24} />
              </div>
              <h3 className="text-base font-bold text-slate-800">Kepatuhan Hukum & Regulasi</h3>
              <p className="text-slate-500 text-xs leading-relaxed">
                Penilaian didasarkan pada payung hukum kuat Peraturan Menteri Kominfo Nomor 2 Tahun 2024 untuk menjamin kepastian regulasi industri kreatif.
              </p>
            </Card>

            {/* Card 3: Dewan Penilai */}
            <Card className="flex flex-col gap-4 p-8 bg-white hover:shadow-md transform hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-accent-blue/10 text-accent-blue flex items-center justify-center">
                <Users size={24} />
              </div>
              <h3 className="text-base font-bold text-slate-800">Pengawasan Dewan Penilai</h3>
              <p className="text-slate-500 text-xs leading-relaxed">
                Melibatkan tim ahli independen, perwakilan akademisi, asosiasi gim, kementerian terkait, serta masukan berkala dari masyarakat umum.
              </p>
            </Card>

          </div>

        </div>
      </section>

    </div>
  );
};
