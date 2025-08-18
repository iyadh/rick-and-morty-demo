import { create } from 'zustand';
import type { Search, Pagination, Character } from '@/types';

interface AppState {
  characters: Array<Character>;
  currentCharacter: object;
  isSearch: boolean;
  search: Search;
  pagination: Pagination;
  reset: () => void;
}

const useStore = create<AppState>()(set => ({
  characters: [],
  currentCharacter: {},
  isSearch: false,
  search: {
    name: '',
    status: '',
  },
  pagination: {
    count: 0,
    page: 1,
    pages: undefined,
    next: undefined,
    prev: undefined,
  },
  reset: () =>
    set({
      characters: [],
      currentCharacter: {},
      isSearch: false,
      search: {
        name: '',
        status: '',
      },
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
