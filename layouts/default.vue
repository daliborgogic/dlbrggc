<script>
  import AppNav from '@/components/AppNav'

  export default {
    components: {
      AppNav,
      AppFooter: () => import('@/components/AppFooter')
    }
  }
</script>

<template>
  <div class="default">
    <AppNav/>
    <main>
      <nuxt/>
    </main>
    <AppFooter/>
  </div>
</template>

<style lang="stylus">
// https://github.com/necolas/normalize.css/blob/master/normalize.css
// https://github.com/twbs/bootstrap/blob/v4-dev/dist/css/bootstrap-reboot.css

*
*::before
*::after
  box-sizing border-box

html
  line-height 1.15
  font-family sans-serif
  -webkit-text-size-adjust 100%
  -webkit-tap-highlight-color transparent
  -ms-text-size-adjust 100%
  -ms-overflow-style scrollbar

@-ms-viewport
  width device-width

body
  // Remove the margin in all browsers.
  margin 0
  background-color #fff

// Correct the font size and margin on `h1` elements within `section` and
// `article` contexts in Chrome, Firefox, and Safari.
// h1
//   font-size 2em
//   margin 0.67em 0


a
  // Remove the gray background on active links in IE 10.
  background-color transparent

// img
  // Remove the border on images inside links in IE 10.
  // border-style none

// textarea
  // Remove the default vertical scrollbar in IE 10+.
  // overflow auto

// 1. Change the font styles in all browsers.
// 2. Remove the margin in Firefox and Safari.
// button
// input
// optgroup
// select
// textarea
  // font-family inherit // 1
  // font-size 100% // 1
  // line-height 1.15 // 1
  // margin 0 // 2

// button
// input
  // Show the overflow in IE/Edge.
  // overflow visible

// button
  // Correct the inability to style clickable types in iOS and Safari.
  // -webkit-appearance button

// Remove the inner border and padding in Firefox.
// button::-moz-focus-inner
// [type="button"]::-moz-focus-inner
// [type="reset"]::-moz-focus-inner
// [type="submit"]::-moz-focus-inner
  // border-style none
  // padding 0

// Restore the focus styles unset by the previous rule.
// button:-moz-focusring
// [type="button"]:-moz-focusring
// [type="reset"]:-moz-focusring
// [type="submit"]:-moz-focusring
  // outline 1px dotted ButtonText

[tabindex="-1"]:focus
  outline 0 !important

#__nuxt
  font-family $sansSerif
  font-size rem(14px)
  font-weight 400
  line-height 1.714283
  color #000
.default
  min-height 100vh
  display flex
  flex-direction column
main
  flex 1

.page-enter-active
.page-leave-active
  transition all .2s ease
.page-enter
.page-leave-active
  opacity 0
pre
  color: rgb(212, 0, 255);
  font-family: Menlo, Monaco, "Lucida Console", "Liberation Mono", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Courier New", monospace, serif;
  font-size: 13px;
  line-height: 20px;
  white-space: pre;
  margin: 40px 0px;
  overflow: auto;
  padding 0
</style>
