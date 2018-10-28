<script>
  import { format } from 'date-fns'

  export default {
    props: {
      posts: {
        type: Object,
        default: () => []
      }
    },

    methods: {
      time (value) {
        return format(new Date(value), 'yyyy/MM/dd')
      }
    }
  }
</script>

<template>
  <ul>
    <nuxt-link v-for="(item, index) in posts.items" tag="li" :key="index" :to="'/blog/' + item.fields.slug">
      <h2>{{item.fields.title}} Lorem ipsum dolor sit amet.</h2>
      <time :datetime="item.sys.createdAt">{{ time(item.sys.createdAt) }}</time>
    </nuxt-link>

    <!-- <pre>{{posts}}</pre> -->
  </ul>
</template>

<style lang="stylus" scoped>
ul
  list-style-type none
  cursor pointer
  padding-left 0
h2
  font-size rem(24px)
  font-weight 400
  line-height 1.3
  margin 0
li
  padding-bottom 16px
time
  color #ccc
  font-size rem(13px)
</style>
