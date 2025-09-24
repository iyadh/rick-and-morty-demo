import { useCallback, useEffect, useMemo } from 'react';
import { api } from '@/services/api';
import { useCharactersStore } from '@/store';

interface UseCharactersParams {
  name?: string;
  status?: string;
}

export const useCharacters = (params: UseCharactersParams = {}) => {
  const { characters, isLoading, error, pagination, setCharacters, setLoading, setError, setPagination } =
    useCharactersStore();

  const memoizedParams = useMemo(
    () => ({
      name: params.name || undefined,
      status: params.status || undefined,
    }),
    [params.name, params.status]
  );

  const fetchCharacters = useCallback(
    async (searchParams: UseCharactersParams = {}) => {
      setLoading(true);
      setError(null);

      try {
        const data = await api.fetchCharacters(searchParams);

        setCharacters(data.results);
        setPagination(data.info);
      } catch (error) {
        setError(error instanceof Error ? error.message : 'Failed to fetch chars');
      } finally {
        setLoading(false);
      }
    },
    [setCharacters, setLoading, setError, setPagination]
  );

  useEffect(() => {
    fetchCharacters(memoizedParams);
  }, [fetchCharacters, memoizedParams]);

  return {
    characters,
    isLoading,
    error,
    pagination,
  };
};
