<template>
    <div class="icons border-bottom">
      <swiper>
          <swiper-slide  v-for="(page,index) of pages" :key="index">
             <div class="icon" v-for="item of page" :key="item.id">
               <div  class= "icon-img">
                 <img  class="icon-img-concent" :src="item.imgurl">
               </div>
               <p class="icon-des">{{item.desc}}</p>
              </div>
          </swiper-slide >
        </swiper>
     </div>
</template>

<script>
export default {
  name: 'icons',
  data () {
    return {
      iconslist: [{
        id: '0001',
        imgurl: require('../../../img/icons/shortcut_fm.png'),
        desc: '私人FM'
      }, {
        id: '0002',
        imgurl: require('../../../img/icons/shortcut_identify.png'),
        desc: '排行榜sssssssssssssssss谁打打ssssssssssa打法sfasfsafasfsdss'
      }, {
        id: '0003',
        imgurl: require('../../../img/icons/shortcut_local_music.png'),
        desc: '歌单'
      }, {
        id: '0004',
        imgurl: require('../../../img/icons/shortcut_search.png'),
        desc: '每日推荐'
      }, {
        id: '0005',
        imgurl: require('../../../img/icons/shortcut_fm.png'),
        desc: '商城'
      }]
    }
  },
  computed: {
    pages () {
      const pages = []
      this.iconslist.forEach((item, index) => {
        const page = Math.floor(index / 4)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages//  轮播分页
    }
  }
}
</script>

<style lang="stylus" scoped>
  .icons
    overflow : hidden
    height : 0
    padding-bottom : 20%
    /*border-bottom:thin solid #dde4eb*/
    .icon
      position :relative
      overflow : hidden
      width:25%
      height: 0
      padding-bottom: 20%
      float: left

      .icon-img
        position : absolute
        top:-.2rem
        left:0
        right:0
        bottom :.23rem
        box-sizing : border-box
        padding: .2rem
        padding-top: .3rem
        .icon-img-concent
          height :100%
          display block
          margin : 0 auto
      .icon-des
        position : absolute
        left: 0
        right: 0
        bottom: 0
        height:.38rem
        line-height: .30rem
        text-align: center
        overflow : hidden
        white-space : nowrap
        text-overflow : ellipsis

</style>
