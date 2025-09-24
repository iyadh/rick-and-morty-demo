import type { Character } from '@/types';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface CharacterState {
  current: Character | null;
  isLoading: boolean;
  error: string | null;
}

interface CharacterActions {
  setCurrent: (character: Character | null) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  reset: () => void;
}

type CharacterStore = CharacterState & CharacterActions;

const INITIAL_STATE: CharacterState = {
  current: null,
  isLoading: false,
  error: null,
};

export const useCharacterStore = create<CharacterStore>()(
  devtools(
    set => ({
      ...INITIAL_STATE,
      setCurrent: current => set({ current, error: null }),
      setLoading: isLoading => set({ isLoading }),
      setError: error => set({ error, isLoading: false }),
      reset: () => set(INITIAL_STATE),
    }),
    { name: 'character-store' }
  )
);
