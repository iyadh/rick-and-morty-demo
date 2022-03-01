<template>
  <form class="searchbar">
    <label for="name" class="w-full md:w-8/12 flex">
      <input id="name" v-model="name" type="text" class="text-field" placeholder="Enter a character name ..." />
    </label>
    <div class="filters mt-4 md:mt-0">
      <label for="isAlive">
        <input id="isAlive" v-model="status" type="radio" name="status" value="alive" />
        Alive
      </label>
      <label for="isDead">
        <input id="isDead" v-model="status" type="radio" name="status" value="dead" />
        Dead
      </label>

      <label for="isUnknown">
        <input id="isUnknown" v-model="status" type="radio" name="status" value="unknown" />
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
import { ref } from 'vue';
import { useStore } from '@/store';

const store = useStore();
const name = ref(store.search.name);
const status = ref(store.search.status);

const click = () => {
  store.searchCharacters({
    name: name.value,
    status: status.value,
    page: 1,
  });
};

const reset = () => {
  name.value = status.value = '';
  store.searchCharacters({
    name: '',
    status: '',
    page: 1,
  });
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
