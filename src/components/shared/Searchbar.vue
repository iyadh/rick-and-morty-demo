<template>
  <form class="searchbar">
    <label for="name" class="w-full md:w-8/12 flex">
      <input id="name" v-model="store.search.name" type="text" class="text-field" placeholder="Enter a character name ..." />
    </label>
    <div class="filters mt-4 md:mt-0">
      <label for="isAlive">
        <input id="isAlive" v-model="store.search.status" type="radio" name="status" value="alive" />
        Alive
      </label>
      <label for="isDead">
        <input id="isDead" v-model="store.search.status" type="radio" name="status" value="dead" />
        Dead
      </label>

      <label for="isUnknown">
        <input id="isUnknown" v-model="store.search.status" type="radio" name="status" value="unknown" />
        Unknown
      </label>
    </div>
    <div class="controls space-x-2 mt-4 md:mt-0 flex">
      <button
        type="reset"
        class="p-2 rounded-lg bg-gray-100 text-gray-700 tracking-widest uppercase text-sm"
        @click.prevent="reset"
      >
        Reset
      </button>
      <button
        type="submit"
        class="p-2 rounded-lg bg-green-100 text-green-900 tracking-widest uppercase text-sm"
        @click.prevent="click"
      >
        Search
      </button>
    </div>
  </form>
</template>

<script setup>
import { useStore } from '@/store';

const store = useStore();

// Local refs name and status are removed.
// v-model is now bound directly to store.search.name and store.search.status.

const click = () => {
  // The search is now triggered automatically by pinia-colada when
  // store.search.name or store.search.status change due to v-model updates.
  // The urlSync.handler in the store calls searchCharacters.
  // This button might become redundant or could be used to explicitly
  // ensure current values are used if there was debouncing, or to navigate.
  // For now, it does nothing as per plan.
  // If a page reset to 1 is desired on explicit search, that logic
  // would be: store.pagination.page = 1; (which would then trigger search via pinia-colada)
  console.log('Search button clicked. Search triggered by v-model and pinia-colada.');
};

const reset = () => {
  store.search.name = '';
  store.search.status = '';
  // store.pagination.page = 1; // This will be handled globally or by pinia-colada logic.
  // No direct call to store.searchCharacters() here.
  // Changes to store.search.name and store.search.status will be picked up by
  // pinia-colada, which will update the URL and trigger the handler (searchCharacters).
  console.log('Reset button clicked. Store search name/status cleared.');
};
</script>

<style scoped>
.searchbar {
  @apply flex flex-col md:flex-row flex-nowrap justify-between items-center bg-white p-4 mb-8 rounded-xl space-x-4;
}

.text-field {
  @apply w-full mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black;
}

.filters {
  @apply flex flex-row items-center space-x-3;
}
</style>
