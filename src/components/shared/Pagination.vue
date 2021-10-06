<template>
  <div v-if="pagination.pages" class="py-8">
    <p class="mb-4 text-center">Page {{ pagination.page }} of {{ pagination.pages }}</p>
    <nav v-if="pagination.pages > 1" class="cursor-pointer relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
         aria-label="Pagination">
      <a @click.prevent="previousPage"
         v-if="pagination.prev !== null"
         class="relative w-24 inline-flex items-center justify-between px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm
         font-medium text-gray-500 hover:bg-gray-50">

        <!-- Heroicon name: solid/chevron-left -->
        <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
        </svg>
        <span class="">Previous</span>
      </a>
      <a v-if="pagination.next !== null"
         @click.prevent="nextPage"
         class="cursor-pointer w-24 relative inline-flex justify-between items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
        <span class="">Next</span>
        <!-- Heroicon name: solid/chevron-right -->
        <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
        </svg>
      </a>
    </nav>
  </div>
</template>

<script>
import {mapActions, mapState} from "vuex";

export default {
  name: "Pagination",
  computed: {
    ...mapState([
        'pagination'
    ])
  },
  methods: {
    ...mapActions([
      'getCharacters'
    ]),
    nextPage() {
      this.getCharacters({ url: this.pagination.next, page: this.pagination.page + 1})
    },
    previousPage() {
      this.getCharacters({ url: this.pagination.prev, page: this.pagination.page - 1})
    }
  }
}
</script>

<style scoped>

</style>