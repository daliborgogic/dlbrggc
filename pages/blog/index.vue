<script>
  import r2 from 'r2'
  import AppPosts from '@/components/AppPosts'

  export default {
    head () {
      return {
        title: 'Blog'
      }
    },

    components: {
      AppTitle: () => import('@/components/AppTitle'),
      AppPosts
    },

    async asyncData () {
      const posts = await r2(`http://localhost:3000/posts.json`).json
      return { posts }
    }
  }
</script>

<template>
  <div class="container">
    <AppTitle content="Blog"/>
    <AppPosts :posts="posts"/>
  </div>
</template>

<style lang="stylus" scoped>
.container
  max-width 512px
  margin 0 50vw 0 auto
@media (max-width 1280px)
  .container
    margin 0 auto

@media (max-width 512px)
  .container
    padding 0 16px
</style>

