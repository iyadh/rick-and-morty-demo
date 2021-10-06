<template>
  <div class="toolbar">
    <div class="tb--container">
      <span class="back-btn group"
            v-if="$route.name === 'character'"
            @click="$router.push({ name: 'home'})">
        <svg version="1.1"
             class="icon group-hover:text-green-600"
             id="Layer_1"
             xmlns="http://www.w3.org/2000/svg"
             xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
             viewBox="0 0 60 44.3" style="enable-background:new 0 0 60 44.3;" xml:space="preserve">
          <path d="M56,18.1H13.7L25,6.8c1.6-1.6,1.6-4.1,0-5.7s-4.1-1.6-5.7,0L1.2,19.3l0,0c-0.2,0.2-0.3,0.4-0.5,0.6
          c-0.1,0.1-0.1,0.2-0.1,0.3c-0.1,0.1-0.1,0.3-0.2,0.4c0,0.1-0.1,0.2-0.1,0.4c0,0.1-0.1,0.3-0.1,0.4C0,21.6,0,21.8,0,22
          c0,0.1,0,0.1,0,0.2c0,0.1,0,0.1,0,0.2c0,0.2,0,0.4,0.1,0.6c0,0.1,0.1,0.3,0.1,0.4c0,0.1,0.1,0.2,0.1,0.3c0.1,0.2,0.1,0.3,0.2,0.5
          c0,0.1,0.1,0.2,0.1,0.2C0.8,24.6,1,24.8,1.2,25l18.2,18.1c1.6,1.6,4.1,1.6,5.7,0c1.6-1.6,1.6-4.1,0-5.7l0,0L13.7,26.1H56
          c2.2,0,4-1.8,4-4S58.2,18.1,56,18.1z"/>
        </svg>
      </span>
      <Logo />
    </div>
  </div>
</template>

<script>
import Logo from './Logo.vue';
export default {
  name: "Toolbar",
  components: { Logo }
}
</script>

<style scoped>
.toolbar {
  @apply w-full py-4 bg-white mb-12;
}
.tb--container {
  @apply flex content-center items-center space-x-4 px-4;
}
.back-btn {
  @apply h-10 cursor-pointer grid place-content-center pr-4 border-r-2 border-gray-200;
}
.icon {
  @apply fill-current h-4 text-gray-300 transition ease-in-out duration-300;
}
</style>