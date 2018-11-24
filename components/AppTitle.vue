<script>
  export default {
    props: {
      content: {
        type: String,
        default: ''
      }
    }
  }
</script>

<template>
  <h1 v-html="content"/>
</template>

<style lang="stylus" scoped>
h1
  margin-top 16px
  margin-bottom 0
  font-weight 300
  font-size rem(32px)
  line-height 0.8
</style>

