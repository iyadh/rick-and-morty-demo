<template>
  <div class="container mx-auto px-4 md:px-0">
    <Searchbar />
    <section v-if="characters.length" class="characters--grid grid grid-cols-1 md:grid-cols-5 gap-4">
      <Card v-for="character in characters"
            :id="character.id"
            :img="character.image"
            :name="character.name"
            />
    </section>
    <NoResults v-else />
    <Pagination />
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import Searchbar from "./shared/Searchbar.vue";
import Card from "./shared/Card.vue";
import Pagination from "./shared/Pagination.vue";
import NoResults from "./shared/NoResults.vue";
import { useStore } from "@/store";

const store = useStore();
const { characters } = storeToRefs(store);
store.searchCharacters({
  ...store.search,
  page: store.pagination.page,
});
</script>

<style scoped></style>
