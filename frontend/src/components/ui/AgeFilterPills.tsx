import React from 'react';

interface AgeFilterPillsProps {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

export const AgeFilterPills: React.FC<AgeFilterPillsProps> = ({
  activeFilter,
  onFilterChange
}) => {
  const pills = [
    { value: 'Semua', label: 'Semua' },
    { value: '3', label: '3+' },
    { value: '7', label: '7+' },
    { value: '13', label: '13+' },
    { value: '15', label: '15+' },
    { value: '18', label: '18+' }
  ];

  return (
    <div className="flex flex-wrap items-center justify-center gap-2.5 py-4">
      {pills.map((pill) => {
        const isSelected = activeFilter === pill.value;
        return (
          <button
            key={pill.value}
            type="button"
            onClick={() => onFilterChange(pill.value)}
            className={`px-5 py-2 rounded-full text-sm font-semibold tracking-wide border transition-all duration-300 ${
              isSelected
                ? 'bg-primary border-primary text-white shadow-md shadow-primary/20 transform scale-105'
                : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50 hover:border-slate-300'
            }`}
          >
            {pill.label}
          </button>
        );
      })}
    </div>
  );
};
