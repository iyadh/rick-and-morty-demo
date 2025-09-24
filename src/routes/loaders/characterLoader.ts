import useStore from '@/store';

export const characterLoader = async ({ params }: { params: { id: string } }) => {
  try {
    const id = params.id;
    // Get the store instance and fetch characters
    useStore.getState().selectCharacter(id);
    return { success: true };
  } catch (error) {
    console.error('Failed to load character:', error);
    // Still return something so the component can handle the error state
    return { error: error instanceof Error ? error.message : 'Failed to load character' };
  }
};
