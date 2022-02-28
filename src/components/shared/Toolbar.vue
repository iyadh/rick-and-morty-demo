<template>
  <div class="toolbar">
    <div class="tb--container">
      <span v-if="route.name === 'character'" class="back-btn group" @click="router.push({ name: 'home' })">
        <ArrowLeftIcon class="icon group-hover:text-green-600" />
      </span>
      <Logo />
    </div>
  </div>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router';
import { ArrowLeftIcon } from '@heroicons/vue/outline';

const route = useRoute();
const router = useRouter();
</script>

<style scoped>
.toolbar {
  @apply w-full py-4 bg-white mb-12;
}
.tb--container {
  @apply flex content-center items-center space-x-4 px-4;
}
.back-btn {
  @apply h-10 cursor-pointer grid place-content-center pr-4 border-r-2 border-gray-200;
}
.icon {
  @apply fill-current w-4 h-4 text-gray-300 transition ease-in-out duration-300;
}
</style>
