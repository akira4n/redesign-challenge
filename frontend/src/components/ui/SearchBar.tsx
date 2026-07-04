import React from 'react';
import { Search } from 'lucide-react';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  onSubmit?: (e: React.FormEvent) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  value,
  onChange,
  placeholder = 'Cari game atau pengumuman...',
  onSubmit
}) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSubmit) onSubmit(e);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto">
      <div className="relative flex items-center bg-gray-100 rounded-full p-1.5 border border-transparent focus-within:border-primary-light focus-within:bg-white focus-within:shadow-md transition-all duration-300">
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="flex-1 bg-transparent px-5 py-2.5 text-slate-800 placeholder-slate-400 text-sm md:text-base focus:outline-none"
        />
        <button
          type="submit"
          className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-primary hover:bg-primary-dark text-white rounded-full transition-all duration-300 shadow-sm hover:shadow-md active:scale-95"
        >
          <Search size={18} className="md:w-5 md:h-5" />
        </button>
      </div>
    </form>
  );
};
