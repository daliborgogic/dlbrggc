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
