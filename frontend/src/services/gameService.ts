import type { IGame, IStat, IBlog } from '../types';
import api from './api';

export const gameService = {
  getGames: (): Promise<IGame[]> => {
    return api.get('/games').then(res => res.data);
  },
  
  getGameById: (id: string): Promise<IGame | undefined> => {
    return api.get(`/games/${id}`).then(res => res.data);
  },
  
  getStats: (): Promise<IStat> => {
    return api.get('/stats').then(res => res.data);
  },
  
  getBlogs: (): Promise<IBlog[]> => {
    return api.get('/blogs').then(res => res.data);
  },
  
  getBlogById: (id: string): Promise<IBlog | undefined> => {
    return api.get(`/blogs/${id}`).then(res => res.data);
  }
};
