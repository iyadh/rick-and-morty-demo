<template>
  <div class="flex flex-row flex-grow justify-center space-x-4 place-self-center">
    <img class="h-12" alt="Rick and Morty" :src="logo" />
    <div class="grid place-content-center text-left leading-4 uppercase tracking-widest font-bold">
      Characters
      <br />
      Database
    </div>
  </div>
</template>

<script setup>
import logo from '@assets/rick-and-morty.svg';
</script>

<style scoped></style>
