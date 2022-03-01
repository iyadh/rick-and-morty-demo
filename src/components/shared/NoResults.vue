<template>
  <div class="flex flex-col justify-center items-center">
    <div
      class="text flex flex-col justify-center items-center gap-2 pb-4"
      :class="{ 'border-b border-gray-200': !store.isSearch }"
    >
      <h1 class="uppercase font-black tracking-widest text-4xl">Wubba Lubba Dub-Dub!</h1>
      <p v-if="store.isSearch">There is nothing here ... Try resetting the search form!</p>
      <p v-else>There is nothing here ... Go home Morty!</p>
    </div>
    <router-link
      v-if="!store.isSearch"
      :to="{ name: 'home' }"
      class="flex flex-row justify-center items-center gap-1 mt-4 mb-8 text-green-500 uppercase font-bold hover:text-green-700"
    >
      <HomeIcon class="h-5 w-5 mr-2 stroke-current" /> Go Home!
    </router-link>
    <img class="w-5/6 md:w-1/3 object-cover" :src="jerry" alt="There is nothing here" />
  </div>
</template>

<script setup>
import { useStore } from '@/store';
import { HomeIcon } from '@heroicons/vue/outline';
import jerry from '@assets/jerry-lost.png';

const store = useStore();
</script>

<style scoped></style>
