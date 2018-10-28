<script>
  export default {
    head () {
      return {
        title: 'About'
      }
    },

    components: {
      AppTitle: () => import('@/components/AppTitle')
    }
  }
</script>

<template>
  <div class="container">
    <AppTitle content="About"/>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia impedit hic corporis, sunt praesentium illo molestias nisi veniam quisquam rerum delectus non at nemo enim incidunt facere possimus ea architecto, eius inventore quas aliquid eligendi quod. A molestias optio non?</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim praesentium adipisci delectus earum molestias accusantium. Distinctio praesentium voluptatibus tenetur ullam eius excepturi quos, dolorum consectetur.</p>

    <h3>Links</h3>
    <ul>
      <li><a href="https://twitter.com/dalibor_gogic/">Twitter</a></li>
      <li><a href="https://www.instagram.com/dalibor_gogic/">Instagram</a></li>
      <li><a href="https://github.com/daliborgogic">GitHub</a></li>
      <li><a href="https://www.npmjs.com/~dlbr">npm</a></li>
      <li>daliborgogic.com (this page)</li>
    </ul>
  </div>
</template>

<style lang="stylus" scoped>
.container
  max-width 512px
  margin 0 50vw 0 auto
a
  color #067df7
  text-decoration none
  &:hover
    text-decoration underline
ul
  list-style-type none
  padding-left 0
  margin-left 16px
li
  margin-bottom 8px
  &::before
    content "-"
    display inline-block
    margin-left -16px
    position absolute
    color rgb(153, 153, 153)

@media (max-width 1280px)
  .container
    margin 10vh auto 0 auto
</style>
