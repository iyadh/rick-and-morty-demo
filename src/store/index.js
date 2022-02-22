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
      status: ''
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
    async searchCharacters({ page = 1, ...search }) {
      this.search = search;
      this.isSearch = Boolean(search.name || search.status);

      const url = new URL(import.meta.env.VITE_MAIN_URL);
      url.search = new URLSearchParams({...search, page});
      try {
        const data = await fetch(url.toString()).then(response => response.json())
        if ('error' in data) {
          this.characters = [];
          throw new Error(data.error);
        }
        this.characters = data.results;
        this.pagination = {
          ...data.info,
          page,
        };
      } catch(error) {
        console.log(error);
        this.pagination = {
          page: 1,
          pages: null,
          next: null,
          prev: null
        };
      }
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
    resetCurrentCharacter() {
      this.currentCharacter = {};
    }
  }
});

export default { useStore };