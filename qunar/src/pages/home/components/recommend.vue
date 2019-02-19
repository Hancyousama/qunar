<template>
 <div class="recommend">
   <div class="recommend-title ">歌单推荐  <span class="recommend-titles">  ></span></div>
   <swiper>
     <swiper-slide v-for="(page,index) of pages" :key="index">
     <div class="recommend-list border-bottom" v-for="item of page" :key="item.id">
       <div class="recommend-img">
       <img class="recommend-img-com" :src="item.imgurl">
       </div>
       <div class="recommend-log">
         <p class="recommend-log-text">{{item.text}}</p>
       </div>
     </div>
     <!--<div class="recommend-list border-bottom">
       <div class="recommend-img">
         <img class="recommend-img-com" src="http://p4.music.126.net/ayouoLxiV-3rOukyyPxesA==/109951163871443133.jpg">
       </div>
       <div class="recommend-log">
         <p class="recommend-log-text">网易云音乐&台湾KKBOX联合推荐！</p>
       </div>
     </div>-->
     </swiper-slide>
   </swiper>
   <!--<div class="recommend-list border-bottom">
     <div class="recommend-img">
       <img class="recommend-img-com" src="http://p4.music.126.net/6ctPKtGX3aUZ-fn4XwTbQg==/19097417463494582.jpg">
     </div>
     <div class="recommend-log">
       <p class="recommend-log-text">海贼王完结了 我的青春就完整了</p>
     </div>
   </div>
   <div class="recommend-list border-bottom">
     <div class="recommend-img">
       <img class="recommend-img-com" src="http://p3.music.126.net/0TjUq5b9Eqs0RMWL_kQkWw==/109951162944061258.jpg">
     </div>
     <div class="recommend-log">
       <p class="recommend-log-text">听！范特西的欧美女声live</p>
     </div>
   </div>
   <div class="recommend-list border-bottom">
     <div class="recommend-img">
       <img class="recommend-img-com" src="http://p4.music.126.net/CzPqggZnlgSYirXCsve5GQ==/109951163870732021.jpg">
     </div>
     <div class="recommend-log">
       <p class="recommend-log-text">元宵 | 愿灯火阑珊，笑语渐浓</p>
     </div>
   </div>
   <div class="recommend-list border-bottom">
     <div class="recommend-img">
       <img class="recommend-img-com" src="http://p3.music.126.net/eXzAaV1JXHUIh1A2GAGqdA==/18800549325555945.jpg">
     </div>
     <div class="recommend-log">
       <p class="recommend-log-text">他们是历经岁月磨砺过后的沧桑</p>
     </div>
   </div>
   <div class="recommend-list border-bottom">
     <div class="recommend-img">
       <img class="recommend-img-com" src="http://p3.music.126.net/eXzAaV1JXHUIh1A2GAGqdA==/18800549325555945.jpg">
     </div>
     <div class="recommend-log">
       <p class="recommend-log-text">他们是历经岁月磨砺过后的沧桑</p>
     </div>-->
   </div>

</template>

<script>
export default {
  name: 'recommend',
  data () {
    return {
      recommend: [{
        id: '001',
        imgurl: 'http://p3.music.126.net/2MVVtM5U8k2ca_5JustxDg==/109951163837041981.jpg?param=200y200',
        text: '催泪向｜一开口便击碎你心底的脆弱'
      }, {
        id: '002',
        imgurl: 'http://p4.music.126.net/ayouoLxiV-3rOukyyPxesA==/109951163871443133.jpg?param=200y200',
        text: '网易云音乐&台湾KKBOX联合推荐！'
      }, {
        id: '003',
        imgurl: 'http://p4.music.126.net/6ctPKtGX3aUZ-fn4XwTbQg==/19097417463494582.jpg?param=200y200',
        text: '海贼王完结了 我的青春就完整了'
      }, {
        id: '004',
        imgurl: 'http://p3.music.126.net/0TjUq5b9Eqs0RMWL_kQkWw==/109951162944061258.jpg?param=200y200',
        text: '听！范特西的欧美女声live'
      }, {
        id: '005',
        imgurl: 'http://p4.music.126.net/CzPqggZnlgSYirXCsve5GQ==/109951163870732021.jpg?param=200y200',
        text: '元宵 | 愿灯火阑珊，笑语渐浓'
      }, {
        id: '006',
        imgurl: 'http://p3.music.126.net/eXzAaV1JXHUIh1A2GAGqdA==/18800549325555945.jpg?param=200y200',
        text: '他们是历经岁月磨砺过后的沧桑'
      }, {
        id: '007',
        imgurl: 'http://p3.music.126.net/eXzAaV1JXHUIh1A2GAGqdA==/18800549325555945.jpg?param=200y200',
        text: '他们是历经岁月磨砺过后的沧桑'
      }]
    }
  },
  computed: {
    pages () {
      const pages = []
      this.recommend.forEach((item, index) => {
        const page = Math.floor(index / 6)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
   @import '~@/assets/styles/ellipsis.styl'
.recommend
  /*padding-bottom 100%*/
  /*height 0*/
  /*background cyan*/
  .recommend-title
    line-height .9rem
    text-indent .2rem
    font-weight bold
    font-size .31rem
  .recommend-titles
    color #ccc
  .recommend-list
    height: 0
    width:33.33%
    padding-bottom 45%
    position relative
    overflow hidden
    float left
    margin 0 auto
  .recommend-img
    overflow hidden
    position absolute
    top: 0
    left: 0
    bottom: .9rem
    box-sizing : border-box
    padding .05rem
    padding-top: .15rem

    .recommend-img-com
      height 100%
      border-radius .2rem

      margin : 0 auto

  .recommend-log
    padding-left .2rem
    position absolute
    left: 0
    right: 0
    bottom:.3rem
    height:.5rem
    line-height: .4rem
    font-weight lighter

  /*.recommend-list
     height 2.3rem
     overflow hidden
     display flex
    .recommend-img
      height 2rem
      width 2rem
      padding .1rem
    .recommend-log
      padding .1rem
      min-width 0
      .recommend-log-title
        overflow : hidden
        white-space : nowrap
        text-overflow : ellipsis
      .recommend-log-text
        overflow : hidden
        white-space : nowrap
        text-overflow : ellipsis*/

</style>
