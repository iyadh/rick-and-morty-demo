<template>
  <div class="container mx-auto px-4">
    <div class="flex flex-col md:flex-row bg-white rounded-xl overflow-hidden space-x-8">
      <img :src="store.currentCharacter.image" :alt="store.currentCharacter.name" class="w-full md:w-1/2">
      <section class="flex flex-col items-start py-4 space-y-4">
        <h1 class="text-4xl mb-4 uppercase font-black tracking-widest">{{ store.currentCharacter.name }}</h1>
        <Pill :status="'species'">
          {{ store.currentCharacter.species + ' - ' + store.currentCharacter.gender }}
        </Pill>
        <Pill :status="store.currentCharacter.status?.toLowerCase()">
          {{ store.currentCharacter.status }}
        </Pill>
        <span class="flex justify-center">
          <LocationMarkerIcon class="h-6 w-6 mr-2 stroke-current text-gray-300" />
          Location: {{ store.currentCharacter.location?.name }}</span>
        <span class="flex justify-center">
          <HomeIcon class="h-6 w-6 mr-2 stroke-current text-gray-300" />
          Origin: {{ store.currentCharacter.origin?.name }}</span>
      </section>
    </div>
  </div>
</template>

<script setup>
import {onUnmounted} from "vue";
import { useRoute } from 'vue-router';
import { useStore } from '@/store';
import { LocationMarkerIcon, HomeIcon } from '@heroicons/vue/outline';

const route = useRoute();
const store = useStore();

store.fetchCurrentCharacter(route.params.id);

onUnmounted(() => store.resetCurrentCharacter());
</script>

<style scoped>

</style>