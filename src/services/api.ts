import type { Character, Pagination } from '@/types';

interface FetchCharactersParams {
  name?: string;
  status?: string;
}

interface ApiSuccess<T> {
  info: Pagination;
  results: T[];
}

interface ApiError {
  error: string;
}

const isApiError = (response: unknown): response is ApiError => {
  return (
    typeof response === 'object' &&
    response !== null &&
    'error' in response &&
    typeof (response as Record<string, unknown>).error === 'string'
  );
};

class Api {
  private baseUrl = import.meta.env.VITE_MAIN_URL;

  async fetchCharacters(params: FetchCharactersParams = {}): Promise<ApiSuccess<Character>> {
    const url = new URL(this.baseUrl);

    Object.entries(params).forEach(([key, value]) => {
      if (value) url.searchParams.set(key, value.toString());
    });

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status} ${response.statusText}`);
    }

    const data: unknown = await response.json();

    if (isApiError(data)) {
      throw new Error(data.error);
    }

    return data as ApiSuccess<Character>;
  }

  async fetchCharacter(id: string): Promise<Character> {
    const response = await fetch(`${this.baseUrl}/${id}`);

    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status} ${response.statusText}`);
    }

    const data: unknown = await response.json();

    if (isApiError(data)) {
      throw new Error(data.error);
    }

    return data as Character;
  }
}

export const api = new Api();
