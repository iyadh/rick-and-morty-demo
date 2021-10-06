<template>
  <div class="container mx-auto px-4">
    <div class="flex flex-col md:flex-row bg-white rounded-xl overflow-hidden space-x-8">
      <img :src="character?.image" :alt="character?.name" class="w-full md:w-1/2">
      <section class="flex flex-col items-start py-4 space-y-4">
        <h1 class="text-4xl mb-4 uppercase font-black tracking-widest">{{ character?.name }}</h1>
        <Pill :status="'species'" :label="character?.species + ' - ' + character?.gender" />
        <Pill :status="this.character?.status?.toLowerCase()" :label="character?.status" />
        <span class="flex justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2 stroke-current text-gray-300" fill="none"
               viewBox="0 0 24 24"
               stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          Location: {{ character?.location?.name }}</span>
        <span class="flex justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2 stroke-current text-gray-300" fill="none"
               viewBox="0 0 24 24"
               stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
          Origin: {{ character?.origin?.name }}</span>
      </section>
    </div>
  </div>
</template>

<script>
import Pill from './shared/Pill.vue';
import {mapGetters} from "vuex";

export default {
  name: "Character",
  components: { Pill },
  data: () => {},
  computed: {
    ...mapGetters([
        "findCharacterById"
    ]),
    character() {
      return this.findCharacterById(this.$route.params.id);
    }
  },
  created() {}
}
</script>

<style scoped>

</style>