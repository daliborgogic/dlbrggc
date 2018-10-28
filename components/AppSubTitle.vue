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
  <h2 v-html="content"/>
</template>

<style lang="stylus" scoped>
h2
  font-weight 400
  font-size rem(24px)
  line-height 1.2
</style>

