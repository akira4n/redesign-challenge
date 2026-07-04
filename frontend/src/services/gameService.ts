import type { IGame, IStat, IBlog } from '../types';
import { mockGames } from '../mock/mockGames';
import { mockStats } from '../mock/mockStats';
import { mockBlogs } from '../mock/mockBlogs';

export const gameService = {
  getGames: (): Promise<IGame[]> => {
    // Di masa depan tinggal ganti dengan: return api.get('/games').then(res => res.data);
    return Promise.resolve(mockGames);
  },
  
  getGameById: (id: string): Promise<IGame | undefined> => {
    // Di masa depan tinggal ganti dengan: return api.get(`/games/${id}`).then(res => res.data);
    const game = mockGames.find(g => g.id === id);
    return Promise.resolve(game);
  },
  
  getStats: (): Promise<IStat> => {
    // Di masa depan tinggal ganti dengan: return api.get('/stats').then(res => res.data);
    return Promise.resolve(mockStats);
  },
  
  getBlogs: (): Promise<IBlog[]> => {
    // Di masa depan tinggal ganti dengan: return api.get('/blogs').then(res => res.data);
    return Promise.resolve(mockBlogs);
  },
  
  getBlogById: (id: string): Promise<IBlog | undefined> => {
    // Di masa depan tinggal ganti dengan: return api.get(`/blogs/${id}`).then(res => res.data);
    const blog = mockBlogs.find(b => b.id === id);
    return Promise.resolve(blog);
  }
};
