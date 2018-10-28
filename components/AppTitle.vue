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
  font-weight 700
  font-size 7.61rem //4.44rem
  line-height 0.8
  font-family $monospace
  text-transform uppercase
  word-break break-all
@media (max-width 512px)
  h1
    font-size 5.1rem
</style>

