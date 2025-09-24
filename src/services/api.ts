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

type ApiResponse = ApiSuccess | ApiError;

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

  async fetchCharacters(params: FetchCharactersParams = {}): Promise<ApiResponse<Character>> {
    const url = new URL(this.baseUrl);

    Object.entries(params).forEach(([key, value]) => {
      if (value) url.searchParams.set(key, value.toString());
    });

    const response = await fetch(url);

    if (isApiError(response.error)) throw new Error(`Failed to fetch characters: ${response.statusText}`);

    return response.json();
  }

  async fetchCharacter(id: string): Promise<Character> {
    const response = await fetch(`${this.baseUrl}/${id}`);

    if (isApiError(response.error)) throw new Error(`Failed to fetch character: ${response.statusText}`);

    return response.json();
  }
}

export const api = new Api();
