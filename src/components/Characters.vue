<template>
  <div class="container mx-auto px-4 md:px-0">
    <Searchbar />
    <section class="characters--grid grid grid-cols-1 md:grid-cols-5 gap-4">
      <Card v-for="character in allCharacters"
            :id="character.id"
            :img="character.image"
            :name="character.name"
            />
    </section>
    <Pagination />
  </div>
</template>

<script>
import {mapGetters, mapActions, mapState} from "vuex"
import Searchbar from "./shared/Searchbar.vue";
import Card from './shared/Card.vue';
import Pagination from "./shared/Pagination.vue";

export default {
  name: "Characters",
  components: {Pagination, Searchbar, Card },
  data: () => {},
  computed: {
    ...mapState([
      'url'
    ]),
    ...mapGetters([
      'allCharacters'
    ])
  },
  methods: {
    ...mapActions([
        'getCharacters'
    ])
  },
  created() {
    this.getCharacters({ url: this.url});
  }
}
</script>

<style scoped>

</style>