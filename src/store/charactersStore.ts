import type { Character, Pagination } from '@/types';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { devtools } from 'zustand/middleware';

interface CharactersState {
  characters: Character[];
  isLoading: boolean;
  error: string | null;
  pagination: Pagination;
}

interface CharactersActions {
  setCharacters: (characters: Character[]) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  setPagination: (pagination: Pagination) => void;
  reset: () => void;
}

type CharactersStore = CharactersState & CharactersActions;

const INITIAL_STATE: CharactersState = {
  characters: [],
  isLoading: false,
  error: null,
  pagination: {
    count: 0,
    page: 1,
    pages: undefined,
    next: undefined,
    prev: undefined,
  },
};

export const useCharactersStore = create<CharactersStore>()(
  devtools(
    persist(
      set => ({
        ...INITIAL_STATE,
        setCharacters: characters => set({ characters, error: null }),
        setLoading: loading => set({ isLoading: loading }),
        setError: error => set({ error, isLoading: false }),
        setPagination: pagination => set({ pagination }),
        reset: () => set(INITIAL_STATE),
      }),
      { name: 'characters-store', partialize: state => ({ characters: state.characters }) }
    ),
    { name: 'characters-store' }
  )
);
