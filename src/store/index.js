import { defineStore } from 'pinia';
import { useRouter } from 'vue-router';

const router = useRouter();

export const useStore = defineStore('store', {
  state: () => ({
    characters: [],
    currentCharacter: {},
    isSearch: false,
    search: {
      name: '',
      status: []
    },
    pagination: {
      count: 0,
      page: 1,
      pages: null,
      next: null,
      prev: null
    }
  }),
  actions: {
    async searchCharacters(query) {
      const url = new URL(import.meta.env.VITE_MAIN_URL);
      url.search = new URLSearchParams(query);
      
      await fetch(url.toString())
        .then(response => response.json())
        .then(data => {
          if ('error' in data) {
            this.characters = [];
            throw new Error(data.error);
          }
          this.characters = data.results;
          this.pagination = {
            ...data.info,
            page: this.pagination.page
          };
        })
        .catch(error => {
          console.log(error);
          this.pagination = {
            page: 1,
            pages: null,
            next: null,
            prev: null
          };
        });
    },
    async fetchCharacters(paginated = false, page = 1) {
      const url = paginated ? `${import.meta.env.VITE_MAIN_URL}/?page=${page}` : `${import.meta.env.VITE_MAIN_URL}`;
      await fetch(url)
        .then(response => response.json())
        .then(data => {
          this.characters = data.results;
          this.pagination = {
            ...data.info,
            page: this.pagination.page
          };
        })
        .catch(error => {
          console.log(error);
          this.pagination = {
            page: paginated ? page : 1,
            pages: null,
            next: null,
            prev: null
          };
        });
    },
    async fetchCurrentCharacter(id) {
      await fetch(`${import.meta.env.VITE_MAIN_URL}/${id}`)
        .then(response => response.json())
        .then(data => {
          this.currentCharacter = data;
        })
        .catch(error => {
          console.log(error);
          router.push({ name: 'NotFound'});
        });
    },
    saveSearch(search) {
      this.search = search;
    },
    setSearchMode(isSearch) {
      this.isSearch = isSearch;
    },
    resetCurrentCharacter() {
      this.currentCharacter = {};
    }
  }
});

export default { useStore };