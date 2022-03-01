<template>
  <div v-if="pagination.pages" class="py-8">
    <p class="mb-4 text-center">Page {{ pagination.page }} of {{ pagination.pages }}</p>
    <nav
      v-if="pagination.pages > 1"
      class="cursor-pointer relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
      aria-label="Pagination"
    >
      <a
        v-if="pagination.prev !== null"
        class="relative w-24 inline-flex items-center justify-between px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
        @click.prevent="previousPage"
      >
        <ChevronLeftIcon class="h-4 w-4" />
        <span class="">Previous</span>
      </a>
      <a
        v-if="pagination.next !== null"
        class="cursor-pointer w-24 relative inline-flex justify-between items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
        @click.prevent="nextPage"
      >
        <span class="">Next</span>
        <ChevronRightIcon class="h-4 w-4" />
      </a>
    </nav>
  </div>
</template>

<script setup>
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/vue/outline';
import { storeToRefs } from 'pinia';
import { useStore } from '@/store';

const store = useStore();
const { pagination } = storeToRefs(store);

const nextPage = () =>
  store.searchCharacters({
    ...store.search,
    page: store.pagination.page + 1,
  });

const previousPage = () =>
  store.searchCharacters({
    ...store.search,
    page: store.pagination.page - 1,
  });
</script>

<style scoped></style>
