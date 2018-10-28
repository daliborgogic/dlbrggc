<template>
  <footer>
    <div class="container">
      <a href="mailto:mail@daliborgogic.com">mail@daliborgogic.com</a>
    </div>
  </footer>
</template>

<style lang="stylus" scoped>
.container
  min-height 64px
  max-width 512px
  margin 0 50vw 0 auto
  display flex
  align-items center
a
  color #ccc
  font-size rem(13px)
  text-decoration none
@media (max-width 1280px)
  .container
    margin 0 auto

@media (max-width 512px)
  footer
    padding 0 16px
  .container
    padding-bottom 0
</style>
