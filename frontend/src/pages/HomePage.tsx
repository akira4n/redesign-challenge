import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { SearchBar } from '../components/ui/SearchBar';
import { GameCard } from '../components/ui/GameCard';
import { BlogCard } from '../components/ui/BlogCard';
import { gameService } from '../services/gameService';
import type { IGame, IBlog, IStat } from '../types';
import { Gamepad2, Users, Flame, Skull, MessageSquare, Dices, Eye, Trash2, ShieldAlert } from 'lucide-react';

export const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [games, setGames] = useState<IGame[]>([]);
  const [blogs, setBlogs] = useState<IBlog[]>([]);
  const [stats, setStats] = useState<IStat | null>(null);

  useEffect(() => {
    gameService.getGames().then((data) => setGames(data.slice(0, 7)));
    gameService.getBlogs().then((data) => setBlogs(data.slice(0, 3)));
    gameService.getStats().then((data) => setStats(data));
  }, []);

  const handleSearchSubmit = () => {
    if (searchQuery.trim()) {
      navigate(`/game?q=${encodeURIComponent(searchQuery.trim())}`);
    } else {
      navigate('/game');
    }
  };

  // 9 Konten Berisiko dengan ikon yang sesuai
  const riskDescriptors = [
    { name: 'Horor', icon: <Skull size={24} className="text-purple-600" />, bg: 'bg-purple-50 border-purple-200' },
    { name: 'Interaksi Daring', icon: <MessageSquare size={24} className="text-sky-600" />, bg: 'bg-sky-50 border-sky-200' },
    { name: 'Obat-obatan', icon: <Flame size={24} className="text-emerald-600" />, bg: 'bg-emerald-50 border-emerald-200' },
    { name: 'Perjudian', icon: <Dices size={24} className="text-red-600" />, bg: 'bg-red-50 border-red-200' },
    { name: 'Penampilan Karakter', icon: <Eye size={24} className="text-pink-600" />, bg: 'bg-pink-50 border-pink-200' },
    { name: 'Bahasa Kasar', icon: <ShieldAlert size={24} className="text-orange-600" />, bg: 'bg-orange-50 border-orange-200' },
    { name: 'Darah', icon: <Trash2 size={24} className="text-rose-600" />, bg: 'bg-rose-50 border-rose-200' },
    { name: 'Kekerasan', icon: <ShieldAlert size={24} className="text-amber-600" />, bg: 'bg-amber-50 border-amber-200' },
    { name: 'Seksualitas', icon: <Users size={24} className="text-indigo-600" />, bg: 'bg-indigo-50 border-indigo-200' }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      
      {/* 1. Hero Section (Navy) */}
      <section className="bg-navy-gradient text-white py-24 px-4 relative overflow-hidden">
        {/* Background Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col gap-6 items-center">
          <span className="bg-white/10 px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase backdrop-blur-sm text-accent-yellow">
            Edukasi Klasifikasi Gim Nasional
          </span>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
            Edukasi Diri Bersama IGRS:<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-yellow via-amber-300 to-rose-400">
              Ketahui Ratingnya Sebelum Bermain
            </span>
          </h1>
          <p className="text-slate-300 text-sm md:text-base max-w-2xl leading-relaxed">
            Temukan klasifikasi usia gim yang tepat untuk mendukung ekosistem bermain yang sehat, ramah keluarga, dan aman bagi perkembangan anak.
          </p>
          <div className="w-full mt-4">
            <SearchBar
              value={searchQuery}
              onChange={setSearchQuery}
              onSubmit={handleSearchSubmit}
              placeholder="Cari rating gim favorit Anda disini... (misal: Genshin Impact)"
            />
          </div>
        </div>
      </section>

      {/* 2. Rating Unggulan (Featured Games Grid) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-4">
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-800 tracking-tight">
              Klasifikasi Gim Populer
            </h2>
            <p className="text-slate-500 text-sm mt-1">
              Gim-gim unggulan yang baru saja dinilai atau sering dicari oleh masyarakat.
            </p>
          </div>
          <Link
            to="/game"
            className="text-sm font-bold text-primary hover:text-primary-dark transition-colors"
          >
            Lihat Semua Game →
          </Link>
        </div>

        {/* Grid Loop 7 Cards + 1 Lihat Semua */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {games.map((game) => (
            <div key={game.id} className="h-full">
              <GameCard game={game} />
            </div>
          ))}

          {/* Card ke-8: "Lihat Semua" berbentuk gamepad */}
          <Link
            to="/game"
            className="group bg-gradient-to-br from-slate-50 to-slate-100 border-2 border-dashed border-slate-200 rounded-2xl p-6 flex flex-col items-center justify-center text-center hover:bg-slate-200/50 hover:border-primary/50 hover:shadow-md transition-all duration-300 h-full min-h-[300px]"
          >
            <div className="w-16 h-16 rounded-full bg-white border border-slate-100 flex items-center justify-center text-primary shadow-sm group-hover:scale-110 group-hover:text-primary-dark transition-all duration-300 mb-4">
              <Gamepad2 size={32} />
            </div>
            <h3 className="text-base font-bold text-slate-800 mb-1">Lihat Semua Gim</h3>
            <p className="text-xs text-slate-500 max-w-[200px]">
              Jelajahi seluruh daftar gim yang terdaftar di basis data IGRS.
            </p>
          </Link>
        </div>
      </section>

      {/* 3. Statistik Section (Navy Background) */}
      {stats && (
        <section className="bg-navy-gradient text-white py-20 px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10 pointer-events-none" />
          <div className="max-w-7xl mx-auto relative z-10">
            
            {/* Header */}
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
                Statistik Klasifikasi IGRS
              </h2>
              <p className="text-slate-300 text-sm mt-2">
                Jumlah gim yang telah berhasil terklasifikasi berdasarkan kelompok usia pengguna di Indonesia.
              </p>
            </div>

            {/* 5 Cards Klasifikasi Usia */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 mb-12">
              
              {/* Card 3+ */}
              <div className="bg-white rounded-2xl p-6 text-slate-800 text-center flex flex-col items-center shadow-md transform hover:-translate-y-1 transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-black text-lg mb-3">
                  3+
                </div>
                <div className="text-2xl font-black text-slate-800">{stats.ratings['3+']}</div>
                <div className="text-xs text-slate-400 font-medium mt-1">Gim Semua Umur</div>
              </div>

              {/* Card 7+ */}
              <div className="bg-white rounded-2xl p-6 text-slate-800 text-center flex flex-col items-center shadow-md transform hover:-translate-y-1 transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center font-black text-lg mb-3">
                  7+
                </div>
                <div className="text-2xl font-black text-slate-800">{stats.ratings['7+']}</div>
                <div className="text-xs text-slate-400 font-medium mt-1">Gim Bimbingan (7+)</div>
              </div>

              {/* Card 13+ */}
              <div className="bg-white rounded-2xl p-6 text-slate-800 text-center flex flex-col items-center shadow-md transform hover:-translate-y-1 transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center font-black text-lg mb-3">
                  13+
                </div>
                <div className="text-2xl font-black text-slate-800">{stats.ratings['13+']}</div>
                <div className="text-xs text-slate-400 font-medium mt-1">Gim Remaja (13+)</div>
              </div>

              {/* Card 15+ */}
              <div className="bg-white rounded-2xl p-6 text-slate-800 text-center flex flex-col items-center shadow-md transform hover:-translate-y-1 transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-700 flex items-center justify-center font-black text-lg mb-3">
                  15+
                </div>
                <div className="text-2xl font-black text-slate-800">{stats.ratings['15+']}</div>
                <div className="text-xs text-slate-400 font-medium mt-1">Gim Remaja (15+)</div>
              </div>

              {/* Card 18+ */}
              <div className="bg-white rounded-2xl p-6 text-slate-800 text-center flex flex-col items-center shadow-md transform hover:-translate-y-1 transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-rose-100 text-rose-700 flex items-center justify-center font-black text-lg mb-3">
                  18+
                </div>
                <div className="text-2xl font-black text-slate-800">{stats.ratings['18+']}</div>
                <div className="text-xs text-slate-400 font-medium mt-1">Gim Dewasa (18+)</div>
              </div>

            </div>

            {/* 2 Cards Total di Bawahnya */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6 max-w-2xl mx-auto">
              {/* Card Total Gim */}
              <div className="w-full sm:w-1/2 bg-white/5 border border-white/10 rounded-2xl p-5 flex items-center gap-4 hover:bg-white/10 transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-accent-blue/15 text-accent-blue flex items-center justify-center">
                  <Gamepad2 size={24} />
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-300">Total Gim Terdaftar</div>
                  <div className="text-2xl font-extrabold text-white mt-0.5">{stats.totalGames}</div>
                </div>
              </div>

              {/* Card Total Publisher */}
              <div className="w-full sm:w-1/2 bg-white/5 border border-white/10 rounded-2xl p-5 flex items-center gap-4 hover:bg-white/10 transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-accent-green/15 text-accent-green flex items-center justify-center">
                  <Users size={24} />
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-300">Penerbit Gim Terdaftar</div>
                  <div className="text-2xl font-extrabold text-white mt-0.5">{stats.totalPublishers}</div>
                </div>
              </div>
            </div>

          </div>
        </section>
      )}

      {/* 4. Edukasi Konten Beresiko (Grid Bulat 128px) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-800 tracking-tight">
            Edukasi Konten Berisiko
          </h2>
          <p className="text-slate-500 text-sm mt-2">
            Pahami berbagai indikator deskriptor konten berisiko yang dianalisis oleh penilai IGRS dalam menentukan rating kelompok usia.
          </p>
        </div>

        {/* Grid Ikon Lingkaran (w-32 h-32) */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-12 max-w-5xl mx-auto">
          {riskDescriptors.map((desc, idx) => (
            <div key={idx} className="flex flex-col items-center gap-3 w-32">
              <div className={`w-28 h-28 rounded-full ${desc.bg} border flex items-center justify-center shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300`}>
                {desc.icon}
              </div>
              <span className="text-xs font-semibold text-slate-700 text-center leading-tight">
                {desc.name}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Blog / Pengumuman Section */}
      <section className="bg-slate-100 py-20 px-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-800 tracking-tight">
                Pengumuman & Berita Terbaru
              </h2>
              <p className="text-slate-500 text-sm mt-1">
                Ikuti regulasi terbaru, pengumuman penting, dan sosialisasi terkait IGRS.
              </p>
            </div>
            <Link
              to="/game" // Diarahkan ke halaman pencarian gim karena di screenshot list berita di-render di sana
              className="text-sm font-bold text-primary hover:text-primary-dark transition-colors"
            >
              Lihat Pengumuman Lainnya →
            </Link>
          </div>

          {/* Grid 3 Blog Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <div key={blog.id} className="h-full">
                <BlogCard blog={blog} />
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};
