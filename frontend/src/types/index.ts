export interface IGame {
  id: string;
  title: string;
  genre: string;
  ageRating: '3' | '7' | '13' | '15' | '18';
  image: string;
  description: string;
  platforms: string[];
  contentDescriptors: string[];
  screenshots: string[];
  ratingAnalysis: {
    title: string;
    description: string;
  }[];
}

export interface IBlog {
  id: string;
  title: string;
  date: string;
  author: string;
  badge: string;
  image: string;
  content: string;
  points: string[];
  signature: string;
}

export interface IStat {
  ratings: {
    [key: string]: number;
  };
  totalGames: number;
  totalPublishers: number;
}
