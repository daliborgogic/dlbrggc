<script>
  export default {
    head () {
      return {
        title: 'Open-Source Software'
      }
    },

    components: {
      AppTitle: () => import('@/components/AppTitle'),
      AppOos: () => import('@/components/AppOos')
    }
  }
</script>

<template>
  <div class="container">
    <AppTitle content="Open-Source Software"/>
    <p>Open-source software development, or collaborative development between multiple independent contributors, generates an increasingly more diverse scope of design perspective than any company is capable of developing and sustaining long term.</p>
    <AppOos/>
  </div>
</template>

<style lang="stylus" scoped>
.container
  max-width 512px
  margin 0 50vw 0 auto
  // outline 1px dashed
@media (max-width 1280px)
  .container
    margin 0 auto
</style>
