<template>
    <div>
    <swiper :options="swiperOption" ref="mySwiper" >

        <!--<swiper-slide>-->
            <!--<img class="banner-img" src="http://p1.music.126.net/0M36SZ_vzW0XjIXxq4dWKg==/109951163861432962.jpg">-->
        <!--</swiper-slide>-->
        <!--<swiper-slide>-->
            <!--<img class="banner-img" src="http://p1.music.126.net/0-t93UCZotUj6C-liP2Ofw==/109951163862208062.jpg">-->
        <!--</swiper-slide>-->
        <!--<swiper-slide>-->
            <!--<img class="banner-img" src="http://p1.music.126.net/1x7XuuHs2rLlOrxmOA-58g==/109951163861450552.jpg">-->
        <!--</swiper-slide>-->
        <swiper-slide v-for="item of list" :key="item.id" >
            <img class="banner-img" :src="item.bannerurl">
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
        <!--<div class="swiper-button-prev" slot="button-prev"></div>-->
        <!--<div class="swiper-button-next" slot="button-next"></div>-->
    </swiper>
    </div>
</template>

<script>
export default {
  name: 'banner',
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        },
        autoplay: true,
        loop: true
      },
      list: [{
        id: 'banner-one',
        bannerurl: 'http://p1.music.126.net/0M36SZ_vzW0XjIXxq4dWKg==/109951163861432962.jpg'
      }, {
        id: 'banner-two',
        bannerurl: 'http://p1.music.126.net/0-t93UCZotUj6C-liP2Ofw==/109951163862208062.jpg'
      }]

    }
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.swiper
    }
  },
  mounted () {
    // current swiper instance
    // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
    // console.log('this is current swiper instance object', this.swiper)
    // this.swiper.slideTo(3, 8000, false)
  }
}

</script>

<style lang="stylus" scoped>
.banner-img
    width:100%
</style>
