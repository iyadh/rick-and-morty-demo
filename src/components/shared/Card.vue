<template>
  <div class="card" @click="router.push({ name: 'character', params: { id: props.id } })">
    <img :src="props.img" :alt="props.name" class="w-full" />
    <h2 class="text-xl py-4">{{ name }}</h2>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

// eslint-disable-next-line no-unused-vars
const router = useRouter();
const props = defineProps({
  img: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>
.card {
  @apply bg-white rounded-xl overflow-hidden cursor-pointer transition ease-in-out duration-300 transform
  hover:shadow-xl hover:-translate-y-1;
}
</style>
