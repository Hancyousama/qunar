<template>
  <div>
    <home-header></home-header>
    <banner></banner>
  </div>

</template>

<script>
import HomeHeader from '@/pages/home/components/header.vue'
import Banner from '@/pages/home/components/banner.vue'
export default {
  name: 'home',
  components: {
    HomeHeader,
    Banner
  }

}
</script>

<style scoped>

</style>
