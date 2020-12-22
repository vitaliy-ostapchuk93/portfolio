<template lang="pug">
//- v-container(
//-   fluid
//- )
//-   v-row
//-     v-col(
//-       cols="4"
//-     )
//-       v-img(
//-         :src="require('../assets/bird.svg')"
//-         class="img-bird align-self-center"
//-         contain
//-       )
//-     v-col(
//-       cols="8"
//-     )
//-       v-img(
//-         :src="require('../assets/holo2.png')"
//-         class="img-holo align-self-end"
//-         contain
//-       )
v-container(
  fluid
  class="pa-6"
)
  v-row
    v-img(
      :src="require('../assets/undraw/profile.svg')"
      class="my-3 align-self-center"
      max-height="800"
      contain
    )
</template>

<script>
export default {
  name: 'HomeLogo',
  data: () => ({
    // ...
  })
}
</script>

<style scoped>
</style>
