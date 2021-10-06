import { createStore } from 'vuex';

// Getters
const getters = {
  allCharacters: state => state.characters,
  findCharacterById: (state) => (id) => {
    console.log(id)
    return state.characters.find(c => c.id === parseInt(id));
  }
};
// Actions
const actions = {
  getCharacters({ commit }, {url, page} ) {
    console.log(page);
    console.log(url);
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
      });
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
  }
}

export const store = createStore({
  state() {
    return {
      characters: [],
      currentCharacter: {},
      url: 'https://rickandmortyapi.com/api/character',
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