import React from 'react';
import { Card } from '../components/ui/Card';
import { ShieldCheck, TrendingUp, Award } from 'lucide-react';

export const ProfilePage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* 1. Hero Section (Navy) */}
      <section className="bg-navy-gradient text-white py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Teks Hero */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <span className="bg-white/10 px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase backdrop-blur-sm text-accent-yellow self-start">
                Profil Resmi
              </span>
              <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight">
                Membangun Ekosistem Game yang <span className="text-accent-blue">Sehat</span> dan <span className="text-accent-yellow">Terpercaya</span>
              </h1>
              <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-xl">
                Indonesia Game Rating System (IGRS) berkomitmen untuk mendorong transparansi dan perlindungan konsumen melalui klasifikasi konten yang akurat bagi masyarakat Indonesia.
              </p>
            </div>

            {/* Gambar 3D Block Stacked Cubes Kanan */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative w-64 h-64 md:w-80 md:h-80 drop-shadow-2xl animate-pulse">
                {/* SVG Cubes Stacked Besar */}
                <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Cube 1 (Red) */}
                  <path d="M50 8 L85 24.5 L50 41 L15 24.5 Z" fill="#E63946" />
                  <path d="M15 24.5 L50 41 L50 56 L15 39.5 Z" fill="#C12735" />
                  <path d="M50 41 L85 24.5 L85 39.5 L50 56 Z" fill="#9A1D2A" />

                  {/* Cube 2 (Green) */}
                  <path d="M50 32 L85 48.5 L50 65 L15 48.5 Z" fill="#2A9D8F" />
                  <path d="M15 48.5 L50 65 L50 80 L15 63.5 Z" fill="#1F7A6E" />
                  <path d="M50 65 L85 48.5 L85 63.5 L50 80 Z" fill="#165950" />

                  {/* Cube 3 (Blue) */}
                  <path d="M50 56 L85 72.5 L50 89 L15 72.5 Z" fill="#3A86FF" />
                  <path d="M15 72.5 L50 89 L50 104 L15 87.5 Z" fill="#1C5ECA" />
                  <path d="M50 89 L85 72.5 L85 87.5 L50 104 Z" fill="#13479B" />
                </svg>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Tentang Kami */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Kiri: Header */}
          <div className="lg:col-span-4">
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-800 tracking-tight leading-tight">
              Tentang Kami – IGRS
            </h2>
            <div className="w-16 h-1.5 bg-primary rounded-full mt-4"></div>
          </div>

          {/* Kanan: Card Detail Regulasi */}
          <div className="lg:col-span-8">
            <Card className="flex flex-col gap-6 p-8 border-l-4 border-l-primary shadow-sm">
              <p className="text-slate-700 text-sm md:text-base leading-relaxed">
                <strong>Indonesia Game Rating System (IGRS)</strong> adalah layanan publik yang diselenggarakan oleh <strong>Kementerian Komunikasi dan Digital (Komdigi)</strong>. Layanan ini hadir sebagai wujud komitmen pemerintah dalam mewujudkan ekosistem gim yang aman, andal, dan bertanggung jawab di Indonesia.
              </p>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                Berdasarkan Peraturan Menteri Komunikasi dan Informatika Nomor 2 Tahun 2024 tentang Klasifikasi Gim, IGRS bertujuan untuk memberikan klasifikasi usia dan panduan konten bagi gim yang beredar di tanah air, dengan tetap menjunjung tinggi norma sosial, budaya, serta kepatuhan terhadap hukum yang berlaku.
              </p>
            </Card>
          </div>

        </div>
      </section>

      {/* 3. Tujuan Utama Strategis */}
      <section className="bg-slate-100 py-24 px-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-800 tracking-tight">
              Tujuan Utama Strategis
            </h2>
            <p className="text-slate-500 text-sm mt-3 leading-relaxed">
              Melalui sistem klasifikasi yang transparan dan akuntabel, IGRS berfungsi sebagai upaya strategis negara untuk menyeimbangkan perkembangan industri kreatif digital dengan perlindungan serta edukasi bagi masyarakat.
            </p>
          </div>

          {/* Grid 3 Kolom Card */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Card 1: Perlindungan Konsumen */}
            <Card className="flex flex-col items-center text-center p-8 gap-5 hover:shadow-md transform hover:-translate-y-1 transition-all duration-300">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
                <ShieldCheck size={28} />
              </div>
              <h3 className="text-lg font-bold text-slate-800">Perlindungan Konsumen</h3>
              <p className="text-slate-500 text-xs leading-relaxed">
                Melindungi publik dari potensi dampak negatif konten game melalui edukasi rating usia yang jelas bagi orang tua dan pengguna.
              </p>
            </Card>

            {/* Card 2: Pertumbuhan Industri */}
            <Card className="flex flex-col items-center text-center p-8 gap-5 hover:shadow-md transform hover:-translate-y-1 transition-all duration-300">
              <div className="w-14 h-14 rounded-2xl bg-accent-green/10 text-accent-green flex items-center justify-center animate-bounce">
                <TrendingUp size={28} />
              </div>
              <h3 className="text-lg font-bold text-slate-800">Pertumbuhan Industri</h3>
              <p className="text-slate-500 text-xs leading-relaxed">
                Mendukung pertumbuhan berkelanjutan industri game nasional yang peduli terhadap regulasi konten digital yang sehat.
              </p>
            </Card>

            {/* Card 3: Kepatuhan & Pengujian */}
            <Card className="flex flex-col items-center text-center p-8 gap-5 hover:shadow-md transform hover:-translate-y-1 transition-all duration-300">
              <div className="w-14 h-14 rounded-2xl bg-accent-blue/10 text-accent-blue flex items-center justify-center">
                <Award size={28} />
              </div>
              <h3 className="text-lg font-bold text-slate-800">Kepatuhan & Pengujian</h3>
              <p className="text-slate-500 text-xs leading-relaxed">
                Memudahkan penerbit game untuk mendaftarkan dan mengklasifikasikan produk mereka sesuai dengan kategori usia yang berlaku.
              </p>
            </Card>

          </div>
        </div>
      </section>

    </div>
  );
};
