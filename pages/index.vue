<script>
  export default {
    head () {
      return {
        titleTemplate: 'Dalibor Gogic - Software/Cloud Engineering and Architecture'
      }
    },

    components: {
      AppTitle: () => import('@/components/AppTitle'),
      // AppPosts: () => import('@/components/AppPosts')
    }
  }
</script>

<template>
  <div class="container">
    <div class="intro">
      <AppTitle content="Software/Cloud Engineering and Architecture"/>
    </div>
    <!-- <AppPosts/> -->
  </div>
</template>

<style lang="stylus" scoped>
.container
  max-width 512px
  margin 0 50vw 0 auto
  // outline 1px dashed
  min-height calc(100vh - 128px)
  display flex
  flex-direction column
.intro
  flex 1
.description
  margin-top 0
  margin-bottom 32px
  font-size rem(16px)
h2
  font-weight 400
  font-size 24
  margin-bottom 0
[role="button"]
  background-color #000
  color #fff
  font-size rem(14px)
  text-decoration none
  height 32px
  padding 0 16px
  border-radius 4px
  display inline-block
  line-height 32px
  box-shadow 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)
small
  // color #ccc
  display inline-block
@media (max-width 1280px)
  .container
    margin 0 auto

@media (max-width 512px)
  .container
    padding 0 16px
  >>> h1 span
    display none
</style>
