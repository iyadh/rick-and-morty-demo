<template>
<span class="pill"
  :class="status">{{ label }}</span>
</template>

<script>
export default {
  name: "Pill",
  props: ['status', 'label']
}
</script>

<style scoped>
.pill {
  @apply rounded-full px-3 py-1;
}
.species {
  @apply bg-blue-100 text-blue-900;
}
.alive {
  @apply bg-green-100 text-green-900;
}
.dead {
  @apply bg-red-100 text-red-900;
}
.unknown {
  @apply bg-yellow-200 text-yellow-700;
}
</style>