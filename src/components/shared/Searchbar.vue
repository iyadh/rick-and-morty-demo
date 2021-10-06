<template>
  <div class="searchbar">
    <label for="name" class="w-full md:w-8/12 flex">
      <input type="text" id="name" v-model="name" class="text-field" placeholder="Enter a character name ...">
    </label>
    <div class="filters mt-4 md:mt-0">
      <label for="isAlive">
        <input type="checkbox" id="isAlive" value="alive" v-model="status">
        Alive
      </label>
      <label for="isDead">
        <input type="checkbox" id="isDead" value="dead" v-model="status">
        Dead
      </label>

      <label for="isUnknown">
        <input type="checkbox" id="isUnknown" value="unknown" v-model="status">
        Unknown
      </label>
    </div>
    <div class="controls space-x-2 mt-4 md:mt-0 flex">
      <button @click="reset" class=" p-2 rounded-lg bg-gray-100 text-gray-700 tracking-widest uppercase text-sm">Reset
      </button>
      <button @click="click"
              class=" p-2 rounded-lg bg-green-100 text-green-900 tracking-widest uppercase text-sm">Search
      </button>
    </div>
  </div>
</template>

<script>
import {mapActions, mapState} from "vuex"
export default {
  name: "Searchbar",
  data() {
    return {
      name: '',
      status: []
    }
  },
  computed: {
    ...mapState([
      'pagination',
      'url'
    ]),
    searchUrl() {
      let _url = new URL('https://rickandmortyapi.com/api/character/');
      _url.search = new URLSearchParams({
        name: this.name,
        status: this.status,
        page: this.pagination.page
      });
      return _url;
    }
  },
  methods: {
    ...mapActions([
      'getCharacters'
    ]),
    click() {
      this.getCharacters({url: this.searchUrl, page: this.pagination.page});
    },
    reset() {
      this.name = '';
      this.status = [];
      this.getCharacters({url: 'https://rickandmortyapi.com/api/character/', page: 1});
    }
  }
}
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