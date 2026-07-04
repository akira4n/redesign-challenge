import React from 'react';

interface BadgeProps {
  rating: '3' | '7' | '13' | '15' | '18' | string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({ rating, size = 'md', className = '' }) => {
  const getStyles = () => {
    switch (rating) {
      case '3':
      case '3+':
        return {
          bg: 'bg-emerald-50 border-emerald-200 text-emerald-700',
          badgeText: '3+',
          label: 'Semua Umur'
        };
      case '7':
      case '7+':
        return {
          bg: 'bg-sky-50 border-sky-200 text-sky-700',
          badgeText: '7+',
          label: 'Bimbingan Orang Tua (7+)'
        };
      case '13':
      case '13+':
        return {
          bg: 'bg-amber-50 border-amber-200 text-amber-700',
          badgeText: '13+',
          label: 'Remaja (13+)'
        };
      case '15':
      case '15+':
        return {
          bg: 'bg-orange-50 border-orange-200 text-orange-700',
          badgeText: '15+',
          label: 'Remaja (15+)'
        };
      case '18':
      case '18+':
        return {
          bg: 'bg-rose-50 border-rose-200 text-rose-700',
          badgeText: '18+',
          label: 'Dewasa (18+)'
        };
      default:
        return {
          bg: 'bg-slate-50 border-slate-200 text-slate-700',
          badgeText: rating,
          label: rating
        };
    }
  };

  const { bg, badgeText } = getStyles();

  const sizeClasses = {
    sm: 'px-2 py-0.5 text-[10px] font-bold border rounded-md',
    md: 'px-3 py-1 text-xs font-bold border rounded-lg',
    lg: 'px-4 py-1.5 text-sm font-extrabold border-2 rounded-xl'
  };

  return (
    <span className={`inline-flex items-center justify-center font-sans tracking-wide uppercase ${sizeClasses[size]} ${bg} ${className}`}>
      {badgeText}
    </span>
  );
};

export const RatingBadgeLarge: React.FC<{ rating: '3' | '7' | '13' | '15' | '18' }> = ({ rating }) => {
  const getLargeStyles = () => {
    switch (rating) {
      case '3':
        return {
          bg: 'bg-emerald-600',
          border: 'border-emerald-700',
          shadow: 'shadow-emerald-200',
          text: '3+'
        };
      case '7':
        return {
          bg: 'bg-sky-600',
          border: 'border-sky-700',
          shadow: 'shadow-sky-200',
          text: '7+'
        };
      case '13':
        return {
          bg: 'bg-amber-500',
          border: 'border-amber-600',
          shadow: 'shadow-amber-200',
          text: '13+'
        };
      case '15':
        return {
          bg: 'bg-orange-500',
          border: 'border-orange-600',
          shadow: 'shadow-orange-200',
          text: '15+'
        };
      case '18':
        return {
          bg: 'bg-rose-600',
          border: 'border-rose-700',
          shadow: 'shadow-rose-200',
          text: '18+'
        };
      default:
        return {
          bg: 'bg-slate-600',
          border: 'border-slate-700',
          shadow: 'shadow-slate-200',
          text: rating
        };
    }
  };

  const styles = getLargeStyles();

  return (
    <div className={`w-28 h-28 flex flex-col items-center justify-center rounded-2xl ${styles.bg} ${styles.border} border-4 text-white font-extrabold text-4xl shadow-xl ${styles.shadow}`}>
      <div>{styles.text}</div>
      <div className="text-[10px] uppercase tracking-wider font-medium mt-1">IGRS</div>
    </div>
  );
};
