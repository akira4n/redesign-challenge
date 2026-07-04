import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SearchBar } from '../components/ui/SearchBar';
import { AgeFilterPills } from '../components/ui/AgeFilterPills';
import { GameCard } from '../components/ui/GameCard';
import { gameService } from '../services/gameService';
import type { IGame } from '../types';
import { HelpCircle, Filter } from 'lucide-react';

export const GamesPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [games, setGames] = useState<IGame[]>([]);
  const [filteredGames, setFilteredGames] = useState<IGame[]>([]);
  
  // State pencarian dan penyaringan
  const [searchTerm, setSearchTerm] = useState(searchParams.get('q') || '');
  const [activeAgeFilter, setActiveAgeFilter] = useState('Semua');

  // Muat semua game pada awal perintisan
  useEffect(() => {
    gameService.getGames().then((data) => {
      setGames(data);
    });
  }, []);

  // Update nilai input pencarian ketika URL berubah
  useEffect(() => {
    setSearchTerm(searchParams.get('q') || '');
  }, [searchParams]);

  // Efek penyaringan real-time
  useEffect(() => {
    let result = games;

    // Filter berdasarkan teks pencarian (case-insensitive)
    if (searchTerm.trim()) {
      result = result.filter(
        (game) =>
          game.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          game.genre.toLowerCase().includes(searchTerm.toLowerCase()) ||
          game.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter berdasarkan rating usia
    if (activeAgeFilter !== 'Semua') {
      result = result.filter((game) => game.ageRating === activeAgeFilter);
    }

    setFilteredGames(result);
  }, [games, searchTerm, activeAgeFilter]);

  // Handler ketika pencarian disubmit
  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
    if (value.trim()) {
      setSearchParams({ q: value });
    } else {
      setSearchParams({});
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Header Banner Halaman Game */}
      <section className="bg-slate-100 border-b border-slate-200 py-10 px-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col gap-5">
          <h1 className="text-2xl md:text-4xl font-extrabold text-slate-800 tracking-tight">
            Cari Klasifikasi Gim
          </h1>
          <p className="text-slate-500 text-xs md:text-sm max-w-xl mx-auto">
            Periksa rating gim disini sebelum membeli atau mengunduh untuk memastikan kesesuaian konten dengan kelompok usia.
          </p>
          <div className="w-full">
            <SearchBar
              value={searchTerm}
              onChange={handleSearchChange}
              placeholder="Periksa rating gim disini..."
            />
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex-1">
        
        {/* Pills Filter Usia */}
        <div className="mb-10 flex flex-col items-center gap-3">
          <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-widest">
            <Filter size={14} />
            <span>Saring Berdasarkan Usia</span>
          </div>
          <AgeFilterPills
            activeFilter={activeAgeFilter}
            onFilterChange={setActiveAgeFilter}
          />
        </div>

        {/* Info Jumlah Hasil */}
        <div className="mb-6 flex justify-between items-center text-sm text-slate-500">
          <div>
            Menampilkan <span className="font-semibold text-slate-800">{filteredGames.length}</span> gim
            {activeAgeFilter !== 'Semua' && (
              <span> dengan rating <span className="font-semibold text-primary">{activeAgeFilter}+</span></span>
            )}
            {searchTerm.trim() && (
              <span> untuk kata kunci "<span className="font-semibold text-slate-700">{searchTerm}</span>"</span>
            )}
          </div>
          <button
            onClick={() => {
              setSearchTerm('');
              setActiveAgeFilter('Semua');
              setSearchParams({});
            }}
            className="text-xs text-primary hover:text-primary-dark font-bold hover:underline"
          >
            Reset Filter
          </button>
        </div>

        {/* Grid Responsive */}
        {filteredGames.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredGames.map((game) => (
              <div key={game.id}>
                <GameCard game={game} />
              </div>
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-16 text-center max-w-lg mx-auto flex flex-col items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center">
              <HelpCircle size={32} />
            </div>
            <h3 className="text-lg font-bold text-slate-800">Gim Tidak Ditemukan</h3>
            <p className="text-sm text-slate-500 leading-relaxed">
              Kami tidak dapat menemukan hasil untuk pencarian Anda. Silakan coba kata kunci lain atau pilih filter usia yang berbeda.
            </p>
          </div>
        )}

      </section>

    </div>
  );
};
