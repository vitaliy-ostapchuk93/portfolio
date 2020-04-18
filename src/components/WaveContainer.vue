<template lang="pug">
v-container(
  ma-0
  pa-0
  fluid
)
  v-img(
    :src="require('../assets/wave-path.svg')"
    :class="[ isFlipped ? 'wave-flipped' : '' ]"
  )
</template>

<script>
export default {
  name: 'WaveContainer',
  props: {
    isFlipped: {
      required: false,
      type: Boolean,
      default: true
    }
  },
  data: () => ({
    // ...
  })
}
</script>

<style scoped>
.wave-flipped {
  transform: scaleY(-1);
}
.wave {
  transform: translateY(5px);
}
</style>
