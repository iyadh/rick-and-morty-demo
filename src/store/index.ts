import { create } from 'zustand';
import type { Pagination, Character } from '@/types';

interface AppState {
  characters: Array<Character>;
  currentCharacter: Character;
  isSearch: boolean;
  pagination: Pagination;
  fetchCharacters: () => void;
  selectCharacter: (id: string) => void;
  reset: () => void;
}

const useStore = create<AppState>()(set => ({
  characters: [],
  currentCharacter: {} as Character,
  isSearch: false,
  pagination: {
    count: 0,
    page: 1,
    pages: undefined,
    next: undefined,
    prev: undefined,
  },
  fetchCharacters: async (params = {}) => {
    const url = new URL(import.meta.env.VITE_MAIN_URL);

    if (params.name) url.searchParams.set('name', params.name);
    if (params.status) url.searchParams.set('status', params.status);

    try {
      const response = await fetch(url);

      if (response.error) throw new Error('Failed to fetch characters');

      const data = await response.json();
      set({ characters: data.results });
    } catch (error) {
      throw new Error('Failed to fetch characters');
    }
  },
  selectCharacter: async (id: string) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_MAIN_URL}/${id}`);

      if (response.error) throw new Error('Failed to fetch characters');

      const data = await response.json();
      set({ currentCharacter: data });
    } catch (error) {
      throw new Error('Failed to fetch characters');
    }
  },
  reset: () =>
    set({
      characters: [],
      currentCharacter: {} as Character,
      isSearch: false,
      pagination: {
        count: 0,
        page: 1,
        pages: undefined,
        next: undefined,
        prev: undefined,
      },
    }),
}));

export default useStore;
