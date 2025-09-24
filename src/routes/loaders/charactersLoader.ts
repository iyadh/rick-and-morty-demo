import useStore from '@/store';

export const charactersLoader = async () => {
  try {
    // Get the store instance and fetch characters
    useStore.getState().fetchCharacters();
    return { success: true };
  } catch (error) {
    console.error('Failed to load characters:', error);
    // Still return something so the component can handle the error state
    return { error: error instanceof Error ? error.message : 'Failed to load characters' };
  }
};
