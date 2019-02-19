<template>
  <div>
    <home-header></home-header>
    <banner></banner>
    <icons></icons>
  </div>

</template>

<script>
import HomeHeader from '@/pages/home/components/header.vue'
import Banner from '@/pages/home/components/banner.vue'
import Icons from '@/pages/home/components/icons.vue'
export default {
  name: 'home',
  components: {
    HomeHeader,
    Banner,
    Icons
  }

}
</script>

<style scoped>

</style>
