<template>
  <nav>
    <div class="container">
      <nuxt-link to="/" exact>DALIBOR GOGIC</nuxt-link>
      <div>
        <nuxt-link to="/blog">BLOG</nuxt-link>
        <nuxt-link to="/about">ABOUT</nuxt-link>
        <nuxt-link to="/oos">OOS</nuxt-link>
      </div>
    </div>
  </nav>
</template>

<style lang="stylus" scoped>
.container
  min-height 64px
  max-width 512px
  margin 0 50vw 0 auto
  display flex
  align-items center
  justify-content space-between
a
  font-size rem(13px)
  color #ccc
  text-decoration none
  margin-right 16px
  &:last-child
    margin-right 0
    color #ff0080
    font-weight 500
.nuxt-link-active
  color #000
@media (max-width 1280px)
  .container
    margin 0 auto

@media (max-width 512px)
  nav
    padding 0 16px
  .container
    padding-top 0
</style>
