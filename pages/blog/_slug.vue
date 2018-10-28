<script>
  import r2 from 'r2'

  export default {
    async asyncData ({ route }) {
      const item = await r2(`http://localhost:3001/post/`).json
      return { item }
    },

    head () {
      return {
        title: this.item.title,
        meta: [
          { hid: 'description', name: 'description', content: this.item.description }
        ]
      }
    },

    components: {
      AppTitle: () => import('@/components/AppTitle'),
      AppSubTitle: () => import('@/components/AppSubTitle')
    }
  }
</script>

<template>
  <div class="container">
    <AppTitle :content="item.title"/>
    <AppSubTitle :content="item.subtitle"/>
    <div v-html="item.content"/>
  </div>
</template>

<style lang="stylus" scoped>
.container
  max-width 512px
  margin 0 50vw 0 auto
>>> h3
  font-size rem(18px)
>>> code
  font-family $monospace
  color rgb(212, 0, 255)
  &:before
  &:after
    content '`'
>>> a
  color #067df7
  text-decoration none
  &:hover
    text-decoration underline
</style>
