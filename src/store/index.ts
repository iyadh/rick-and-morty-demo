import { create } from 'zustand';

interface Search {
  name: string;
  status: string;
}

interface Pagination {
  count: number;
  page: number;
  pages?: number;
  next?: string;
  prev?: string;
}

interface CharacterLocation {
  name: string;
  url: string;
}

interface Character {
  status: 'Dead' | 'Alive' | 'unknown';
  species: string;
  type: string;
  gender: 'Female' | 'Male' | 'Genderless' | 'unknown';
  origin: CharacterLocation;
  location: CharacterLocation;
  image: string;
  episode: string[];
}

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
