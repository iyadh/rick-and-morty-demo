import { createStore } from 'vuex';

// Getters
const getters = {
  allCharacters: state => state.characters,
  findCharacterById: (state) => (id) => {
    return state.characters.find(c => c.id === parseInt(id));
  },
  getQuery: state => state.search
};
// Actions
const actions = {
  getCharacters({ commit }, {url, page} ) {
    fetch(url)
      .then((response) => response.json())
      .then((response) => {
        console.log(response)
        commit('setCharacters', response.results);
        commit('setUrl', url);
        commit('setPagination', {
          page: !!page ? page : this.state.pagination.page,
          pages: response.info.pages,
          next: response.info.next,
          prev: response.info.prev
        });
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
        commit('setCharacters', []);
        commit('setUrl', url);
        commit('setPagination', {
          page: 1,
          pages: null,
          next: null,
          prev: null
        });
      });
  },
  saveSearch({commit}, query) {
    commit('setSearchQuery', query);
  }
}
// Mutations
const mutations = {
  setCharacters(state, characters) {
    state.characters = characters;
  },
  setPagination(state, pagination) {
    state.pagination = pagination;
  },
  setUrl(state, url) {
    state.url = url;
  },
  setSearchQuery(state, query) {
    state.search = query
  }
}

export const store = createStore({
  state() {
    return {
      characters: [],
      currentCharacter: {},
      url: 'https://rickandmortyapi.com/api/character',
      search: {
        name: '',
        status: []
      },
      pagination: {
        page: 1,
        pages: null,
        next: null,
        prev: null
      }
    }
  },
  mutations,
  actions,
  getters
});

export default { store };