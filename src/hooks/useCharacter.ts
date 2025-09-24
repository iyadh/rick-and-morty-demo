import { useCallback, useEffect } from 'react';
import { api } from '@/services/api';
import { useCharacterStore } from '@/store';

export const useCharacter = (id: string) => {
  const { current, isLoading, error, setCurrent, setLoading, setError } = useCharacterStore();

  const fetchCharacter = useCallback(
    async (characterId: string) => {
      // Validate ID before making API call
      if (!characterId || characterId.trim() === '' || !/^\d+$/.test(characterId)) {
        setError('Invalid character ID');
        setLoading(false);
        return;
      }

      setLoading(true);
      setError(null);

      try {
        const character = await api.fetchCharacter(characterId);
        setCurrent(character);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch character');
      } finally {
        setLoading(false);
      }
    },
    [setCurrent, setLoading, setError]
  );

  useEffect(() => {
    fetchCharacter(id);
  }, [fetchCharacter, id]);

  return {
    character: current,
    isLoading,
    error,
  };
};
