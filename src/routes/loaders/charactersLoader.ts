import useStore from '@/store';
import type { LoaderFunctionArgs } from 'react-router';

export const charactersLoader = async ({ request }: LoaderFunctionArgs) => {
  const url = new URL(request.url);
  const searchParams = {
    name: url.searchParams.get('name') || '',
    status: url.searchParams.get('status') || '',
  };

  try {
    // Get the store instance and fetch characters
    useStore.getState().fetchCharacters(searchParams);
    return { success: true };
  } catch (error) {
    console.error('Failed to load characters:', error);
    // Still return something so the component can handle the error state
    return { error: error instanceof Error ? error.message : 'Failed to load characters' };
  }
};
