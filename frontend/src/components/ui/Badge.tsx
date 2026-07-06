import React from 'react';

interface BadgeProps {
  rating: '3' | '7' | '13' | '15' | '18' | string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

// Komponen Badge Pill kecil untuk dipajang di pojok kanan atas gambar kartu gim
export const Badge: React.FC<BadgeProps> = ({ rating, size = 'md', className = '' }) => {
  const getStyles = () => {
    const r = rating.replace('+', '');
    switch (r) {
      case '3':
        return 'bg-[#1b8a5a] text-white';
      case '7':
        return 'bg-[#6bb85c] text-white';
      case '13':
        return 'bg-[#2a8ebd] text-white';
      case '15':
        return 'bg-[#1d4f9f] text-white';
      case '18':
        return 'bg-[#d92323] text-white';
      default:
        return 'bg-slate-600 text-white';
    }
  };

  const sizeClasses = {
    sm: 'px-2 py-0.5 text-[9px] font-black rounded-md',
    md: 'px-2.5 py-0.5 text-xs font-black rounded-md',
    lg: 'px-3.5 py-1 text-sm font-black rounded-lg'
  };

  const formattedRating = rating.endsWith('+') ? rating : `${rating}+`;

  return (
    <span className={`inline-flex items-center justify-center font-sans tracking-wide ${sizeClasses[size]} ${getStyles()} ${className}`}>
      {formattedRating}
    </span>
  );
};

interface IgrsOfficialBadgeProps {
  rating: '3' | '7' | '13' | '15' | '18' | string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

// Komponen resmi IGRS berbentuk vertikal (atas warna rating, bawah putih bertuliskan IGRS)
export const IgrsOfficialBadge: React.FC<IgrsOfficialBadgeProps> = ({ rating, size = 'md', className = '' }) => {
  const cleanRating = rating.replace('+', '');
  
  const getStyles = () => {
    switch (cleanRating) {
      case '3':
        return {
          bgColor: 'bg-[#1b8a5a]',
          text: '3+'
        };
      case '7':
        return {
          bgColor: 'bg-[#6bb85c]',
          text: '7+'
        };
      case '13':
        return {
          bgColor: 'bg-[#2a8ebd]',
          text: '13+'
        };
      case '15':
        return {
          bgColor: 'bg-[#1d4f9f]',
          text: '15+'
        };
      case '18':
        return {
          bgColor: 'bg-[#d92323]',
          text: '18+'
        };
      default:
        return {
          bgColor: 'bg-slate-600',
          text: rating
        };
    }
  };

  const { bgColor, text } = getStyles();

  const sizeClasses = {
    sm: {
      container: 'w-12 h-16 border-2 border-black rounded-lg text-xs',
      top: 'h-10 text-sm font-black',
      bottom: 'h-6 text-[7px] font-extrabold tracking-widest'
    },
    md: {
      container: 'w-[72px] h-[96px] border-[3px] border-black rounded-xl text-sm',
      top: 'h-[62px] text-xl font-black',
      bottom: 'h-[28px] text-[9px] font-black tracking-widest'
    },
    lg: {
      container: 'w-24 h-32 border-4 border-black rounded-2xl text-lg',
      top: 'h-[84px] text-3xl font-black',
      bottom: 'h-10 text-xs font-black tracking-widest'
    }
  };

  const currentSize = sizeClasses[size];

  return (
    <div className={`flex flex-col border-black overflow-hidden shadow-sm select-none ${currentSize.container} ${className}`}>
      {/* Bagian Atas: Angka Usia dengan Background Warna */}
      <div className={`w-full flex items-center justify-center text-white leading-none ${bgColor} ${currentSize.top}`}>
        {text}
      </div>
      
      {/* Bagian Bawah: Tulisan IGRS warna hitam background putih */}
      <div className={`w-full flex items-center justify-center bg-white text-black font-sans leading-none ${currentSize.bottom}`}>
        IGRS
      </div>
    </div>
  );
};

export const RatingBadgeLarge: React.FC<{ rating: '3' | '7' | '13' | '15' | '18' }> = ({ rating }) => {
  return <IgrsOfficialBadge rating={rating} size="lg" />;
};
