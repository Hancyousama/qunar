<template>
    <div class="wrapper">
    <swiper :options="swiperOption" ref="mySwiper" >
        <swiper-slide v-for="item of list" :key="item.id" >
            <img class="banner-img" :src="item.bannerurl">
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
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
          el: '.swiper-pagination',
          clickable: true
        },
        autoplay: true,
        loop: true
      },
      list: [{
        id: 'banner-one',
        bannerurl: 'http://p1.music.126.net/0-t93UCZotUj6C-liP2Ofw==/109951163862208062.jpg'
      }, {
        id: 'banner-two',
        bannerurl: 'http://p1.music.126.net/NwnO-SkbG42GC3O9Uj1XHw==/109951163864771970.jpg'
      }, {
        id: 'banner-three',
        bannerurl: 'http://p1.music.126.net/Z5GGj8mohwhaSryK_u8-tA==/109951163861449029.jpg'
      }, {
        id: 'banner-four',
        bannerurl: 'http://p1.music.126.net/1x7XuuHs2rLlOrxmOA-58g==/109951163861450552.jpg'
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
  .wrapper >>>.swiper-pagination-bullet-active
      background : white
      opacity : .5
  .wrapper
      width : 100%
      overflow : hidden
      height : 0
      padding-bottom :46.02%
      background : #cacaca
    .banner-img
      width:100%
</style>
