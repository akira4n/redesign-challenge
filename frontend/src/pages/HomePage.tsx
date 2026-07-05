import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { SearchBar } from '../components/ui/SearchBar';
import { GameCard } from '../components/ui/GameCard';
import { BlogCard } from '../components/ui/BlogCard';
import { IgrsOfficialBadge } from '../components/ui/Badge';
import { gameService } from '../services/gameService';
import type { IGame, IBlog, IStat } from '../types';
import { Gamepad2 } from 'lucide-react';
import heroGameChars from '../assets/hero_game_chars.png';

export const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [featuredGames, setFeaturedGames] = useState<IGame[]>([]);
  const [blogs, setBlogs] = useState<IBlog[]>([]);
  const [stats, setStats] = useState<IStat | null>(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Monitor ukuran window untuk responsivitas layout melingkar
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    gameService.getGames().then((data) => {
      // COMMENTED OUT: Kode mock replikasi Genshin Impact
      /*
      const genshin = data.find((g) => g.id === 'genshin-impact');
      if (genshin) {
        const replicated: IGame[] = Array(7).fill(genshin).map((item, index) => ({
          ...item,
          id: `${item.id}-dup-${index}`
        }));
        setFeaturedGames(replicated);
      } else {
        setFeaturedGames(data.slice(0, 7));
      }
      */
      setFeaturedGames(data.slice(0, 7));
    });

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

  // 9 Deskriptor Konten Berisiko dengan deskripsi singkat (1 di tengah, 8 mengorbit)
  const centerDescriptor = {
    name: 'Perjudian',
    desc: 'Taruhan atau aktivitas seperti judi'
  };

  const orbitDescriptors = [
    { name: 'Horor', desc: 'Konten yang menakutkan' },
    { name: 'Interaksi Daring', desc: 'Perjumpaan dengan pengguna secara langsung' },
    { name: 'Penampilan Karakter', desc: 'Visualisasi karakter yang provokatif' },
    { name: 'Kekerasan', desc: 'Tindakan fisik atau perilaku berbahaya' },
    { name: 'Seksualitas', desc: 'Konten seksual dan hubungan intim' },
    { name: 'Darah', desc: 'Visualisasi luka dan pendarahan' },
    { name: 'Bahasa Kasar', desc: 'Penggunaan kata-kata kotor' },
    { name: 'Obat-obatan & Zat Adiktif', desc: 'Simulasi penggunaan zat terlarang' }
  ];

  // Kalkulasi koordinat radial untuk layout orbit
  const getOrbitStyles = (index: number, total: number) => {
    const angle = (index * 2 * Math.PI) / total - Math.PI / 2; // Mulai dari atas (90 deg)
    
    // Sesuaikan radius berdasarkan lebar layar
    let radius = 220; // Desktop
    if (windowWidth < 640) {
      radius = 110; // Mobile
    } else if (windowWidth < 1024) {
      radius = 160; // Tablet
    }

    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;

    return {
      transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
      left: '50%',
      top: '50%'
    };
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      
      {/* 1. Hero Section (Latar Putih, Karakter Game di Kanan) */}
      <section className="bg-white py-16 md:py-24 px-4 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Sisi Kiri: Teks & Search */}
            <div className="lg:col-span-7 flex flex-col gap-6 text-left">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-sans tracking-tight leading-tight">
                <span className="block text-slate-800 font-light">Edukasi Diri Bersama <strong className="font-extrabold text-primary">IGRS</strong>:</span>
                <span className="block font-black text-primary mt-1">Ketahui Ratingnya Sebelum Bermain</span>
              </h1>
              <p className="text-slate-500 text-sm md:text-base max-w-xl leading-relaxed">
                Panduan praktis memilih permainan yang tepat untuk mendukung pengalaman bermain yang positif.
              </p>
              
              <div className="w-full max-w-2xl mt-4">
                <SearchBar
                  value={searchQuery}
                  onChange={setSearchQuery}
                  onSubmit={handleSearchSubmit}
                  placeholder="Periksa rating gim disini..."
                />
              </div>
            </div>

            {/* Sisi Kanan: Karakter Game (Mario & Fall Guys) */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative w-72 h-72 md:w-96 md:h-96">
                <img
                  src={heroGameChars}
                  alt="Karakter Game Edukasi IGRS"
                  className="w-full h-full object-contain drop-shadow-lg"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Rating Unggulan (Grid 7 Cards + 1 Lihat Semua) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-10 text-left">
          <h2 className="text-2xl font-extrabold text-primary tracking-tight">
            Rating Unggulan
          </h2>
          <p className="text-slate-500 text-xs md:text-sm mt-1">
            Berikut adalah daftar gim yang paling banyak dicari dan dinilai oleh masyarakat.
          </p>
        </div>

        {/* Grid 8 Items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {featuredGames.map((game, idx) => (
            <div key={`${game.id}-${idx}`} className="h-full">
              <GameCard game={game} />
            </div>
          ))}

          {/* Card ke-8: "Lihat Semua" */}
          <Link
            to="/game"
            className="group border border-slate-200 rounded-2xl p-6 flex flex-col items-center justify-center text-center hover:bg-slate-50 hover:border-slate-300 hover:shadow-sm transition-all duration-300 h-full min-h-[220px]"
          >
            <div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 group-hover:scale-105 group-hover:text-primary transition-all duration-300 mb-3 bg-white">
              <Gamepad2 size={24} />
            </div>
            <span className="text-xs font-bold text-slate-600 group-hover:text-primary transition-colors">
              Lihat Semua
            </span>
          </Link>
        </div>
      </section>

      {/* 3. Statistik Section (Navy Slanted Band) */}
      {stats && (
        <section 
          className="bg-[#2B4578] text-white py-24 px-4 relative overflow-hidden"
          style={{
            clipPath: 'polygon(0 40px, 100% 0, 100% calc(100% - 40px), 0 100%)'
          }}
        >
          <div className="max-w-7xl mx-auto py-6">
            
            {/* 5 Cards Klasifikasi Usia IGRS */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 mb-12">
              
              {/* Card 3+ */}
              <div className="bg-white rounded-2xl p-6 text-slate-800 text-center flex flex-col items-center shadow-md transform hover:-translate-y-1 transition-all duration-300 border border-slate-100">
                <IgrsOfficialBadge rating="3" size="sm" className="mb-4" />
                <div className="text-2xl font-black text-slate-800">{stats.ratings['3+']}</div>
                <div className="text-[10px] text-slate-400 font-medium mt-1">Gim terklasifikasi untuk 3 Tahun ke atas</div>
              </div>

              {/* Card 7+ */}
              <div className="bg-white rounded-2xl p-6 text-slate-800 text-center flex flex-col items-center shadow-md transform hover:-translate-y-1 transition-all duration-300 border border-slate-100">
                <IgrsOfficialBadge rating="7" size="sm" className="mb-4" />
                <div className="text-2xl font-black text-slate-800">{stats.ratings['7+']}</div>
                <div className="text-[10px] text-slate-400 font-medium mt-1">Gim terklasifikasi untuk 7+ Tahun ke atas</div>
              </div>

              {/* Card 13+ */}
              <div className="bg-white rounded-2xl p-6 text-slate-800 text-center flex flex-col items-center shadow-md transform hover:-translate-y-1 transition-all duration-300 border border-slate-100">
                <IgrsOfficialBadge rating="13" size="sm" className="mb-4" />
                <div className="text-2xl font-black text-slate-800">{stats.ratings['13+']}</div>
                <div className="text-[10px] text-slate-400 font-medium mt-1">Gim terklasifikasi untuk 13+ Tahun ke atas</div>
              </div>

              {/* Card 15+ */}
              <div className="bg-white rounded-2xl p-6 text-slate-800 text-center flex flex-col items-center shadow-md transform hover:-translate-y-1 transition-all duration-300 border border-slate-100">
                <IgrsOfficialBadge rating="15" size="sm" className="mb-4" />
                <div className="text-2xl font-black text-slate-800">{stats.ratings['15+']}</div>
                <div className="text-[10px] text-slate-400 font-medium mt-1">Gim terklasifikasi untuk 15+ Tahun ke atas</div>
              </div>

              {/* Card 18+ */}
              <div className="bg-white rounded-2xl p-6 text-slate-800 text-center flex flex-col items-center shadow-md transform hover:-translate-y-1 transition-all duration-300 border border-slate-100">
                <IgrsOfficialBadge rating="18" size="sm" className="mb-4" />
                <div className="text-2xl font-black text-slate-800">{stats.ratings['18+']}</div>
                <div className="text-[10px] text-slate-400 font-medium mt-1">Gim terklasifikasi untuk Dewasa (18+)</div>
              </div>

            </div>

            {/* Kotak Putih Gabungan Total di Bawah */}
            <div className="bg-white text-slate-800 rounded-2xl border border-slate-100 shadow-lg p-6 max-w-xl mx-auto flex items-center divide-x divide-slate-200">
              
              {/* Kolom Kiri: Total Gim */}
              <div className="w-1/2 flex flex-col items-center text-center px-4">
                <div className="text-3xl font-extrabold text-[#2A9D8F]">{stats.totalGames}</div>
                <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mt-1">Gim Terklasifikasi</div>
                <div className="text-[10px] text-slate-500 font-semibold mt-0.5">Rating</div>
              </div>

              {/* Kolom Kanan: Penerbit */}
              <div className="w-1/2 flex flex-col items-center text-center px-4">
                <div className="text-3xl font-extrabold text-primary">{stats.totalPublishers}</div>
                <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mt-1">Penerbit Terdaftar</div>
                <div className="text-[10px] text-slate-500 font-semibold mt-0.5">Badan Usaha / Developer</div>
              </div>

            </div>

          </div>
        </section>
      )}

      {/* 4. Edukasi Konten Berisiko (Circular Orbit Layout) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-white">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-2xl md:text-3xl font-extrabold text-primary tracking-tight">
            Edukasi Konten Berisiko
          </h2>
          <p className="text-slate-500 text-xs md:text-sm mt-2">
            Pahami unsur-unsur di dalam gim sebelum bermain, dan pilihlah.
          </p>
        </div>

        {/* Orbit Area */}
        <div className="relative w-full max-w-[600px] aspect-square mx-auto flex items-center justify-center min-h-[300px] sm:min-h-[450px] md:min-h-[500px]">
          
          {/* Node Tengah: Perjudian */}
          <div className="w-28 h-28 sm:w-32 sm:h-32 bg-white border-2 border-red-200 shadow-lg rounded-full flex flex-col items-center justify-center p-3 text-center z-20 hover:scale-105 transition-all duration-300">
            <span className="text-xs font-bold text-red-700 mb-1">{centerDescriptor.name}</span>
            <span className="text-[9px] text-slate-400 leading-tight">{centerDescriptor.desc}</span>
          </div>

          {/* Node-node Orbit (8 arah) */}
          {orbitDescriptors.map((desc, idx) => {
            const styles = getOrbitStyles(idx, orbitDescriptors.length);
            return (
              <div
                key={idx}
                style={styles}
                className="absolute w-24 h-24 sm:w-28 sm:h-28 bg-white border border-slate-100 shadow-md rounded-full flex flex-col items-center justify-center p-2 text-center hover:scale-105 hover:border-primary/30 hover:shadow-lg transition-all duration-300 z-10"
              >
                <span className="text-[10px] font-bold text-primary mb-1">{desc.name}</span>
                <span className="text-[8px] text-slate-400 leading-normal line-clamp-3">{desc.desc}</span>
              </div>
            );
          })}

        </div>
      </section>

      {/* 5. Blog / Pengumuman Section */}
      <section className="bg-slate-50 py-16 px-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex justify-between items-end mb-10">
            <div className="text-left">
              <h2 className="text-2xl font-extrabold text-primary tracking-tight">
                Blog
              </h2>
              <p className="text-slate-500 text-xs md:text-sm mt-1">
                Ikuti perkembangan terkini, info rating terbaru, dan tips edukasi gim
              </p>
            </div>
            <Link
              to="/game"
              className="text-xs font-bold text-slate-400 hover:text-primary transition-colors uppercase tracking-wider"
            >
              Lihat Semua
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
