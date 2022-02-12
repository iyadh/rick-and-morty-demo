<template>
  <div class="card"
  @click="router.push({ name:'character', params: { id } })">
    <img :src="img" :alt="name" class="w-full ">
    <h2 class="text-xl py-4">{{ name }}</h2>
  </div>
</template>

<script setup>
import {useRouter} from 'vue-router';

const router = useRouter();
const { id, img, name } = defineProps({
  img: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  id: {
    type: String,
    required: true
  }
});
</script>

<style scoped>
.card {
  @apply bg-white rounded-xl overflow-hidden cursor-pointer transition ease-in-out duration-300 transform
  hover:shadow-xl hover:-translate-y-1;
}
</style>