<template>
  <div class="container mx-auto px-4 md:px-0">
    <Searchbar />
    <section v-if="characters.length" class="characters--grid grid grid-cols-1 md:grid-cols-5 gap-4">
      <Card
        v-for="character in characters"
        :id="character.id"
        :key="character.id"
        :img="character.image"
        :name="character.name"
      />
    </section>
    <NoResults v-else />
    <Pagination />
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import Searchbar from './shared/Searchbar.vue';
import Card from './shared/Card.vue';
import Pagination from './shared/Pagination.vue';
import NoResults from './shared/NoResults.vue';
import { useStore } from '@/store';

const store = useStore();
const { characters } = storeToRefs(store);
// The searchCharacters call is removed.
// pinia-colada's urlSync plugin and its handler in the store
// are now responsible for triggering data fetching when relevant
// URL-synchronized state (name, status, page) changes.
// The initial fetch will also be triggered by the plugin if URL params are present,
// or if default values in the store trigger the handler.
</script>

<style scoped></style>
