<template>
    <div class="icons">
      <swiper :options="swiperOption" ref="mySwiper" >
          <div class="swiper-slide" >
             <div class="icon" v-for="item of iconslist" :key="item.id">
               <div  class= "icon-img">
                 <img  class="icon-img-concent" :src="item.imgurl">
               </div>
               <p class="icon-des">{{item.desc}}</p>
              </div>
          </div>
        </swiper>
     </div>
        <!--div class="icon">
            <div  class= "icon-img">
                <img  class="icon-img-concent" src="../../../img/icons/shortcut_identify.png">
            <div  class= "icon-img">
                <img  class="icon-img-concent" src="../../../img/icons/shortcut_identify.png">
            </div>
            <p class="icon-des">个性推荐</p>
        </div>
        <div class="icon">
            <div  class= "icon-img">
                <img  class="icon-img-concent" src="../../../img/icons/shortcut_local_music.png">
            </div>
            <p class="icon-des">个性推荐</p>
        </div>
        <div class="icon">
            <div  class= "icon-img">
                <img  class="icon-img-concent" src="../../../img/icons/shortcut_search.png">
            </div>
            <p class="icon-des">个性推荐</p>
        </div>-->
</template>

<script>
export default {
  name: 'icons',
  data () {
    return {
      swiperOption: {
        el: '.swiper-pagination'
      },
      iconslist: [{
        id: '0001',
        imgurl: '../../../img/icons/shortcut_fm.png',
        desc: '个性推荐1'
      }, {
        id: '0002',
        imgurl: '../../../img/icons/shortcut_fm.png',
        desc: '个性推荐2'
      }, {
        id: '0003',
        imgurl: '../../../img/icons/shortcut_fm.png',
        desc: '个性推荐3'
      }, {
        id: '0004',
        imgurl: '../../../img/icons/shortcut_fm.png',
        desc: '个性推荐4'
      }, {
        id: '0005',
        imgurl: '../../../img/icons/shortcut_fm.png',
        desc: '个性推荐8'
      }]
      // computed: {
      //   pages () {
      //     const pages = []
      //     this.iconslist,forEach(item,index){
      //       const page =Math.floor()
      //     }
      //   }
      //
      // }
    }
  }
}

</script>

<style lang="stylus" scoped>
  .icons
    overflow : hidden
    height : 0
    padding-bottom : 25%
    border-bottom:thin solid #dde4eb
    .icon
      position :relative
      overflow : hidden
      width:25%
      height: 0
      padding-bottom: 25%
      float: left
      .icon-img
        position : absolute
        top:0
        left:0
        right:0
        bottom :.23rem
        box-sizing : border-box
        padding: .2rem
        padding-top: .1rem
        .icon-img-concent
          height :100%
          display block
          margin : 0 auto
      .icon-des
        position : absolute
        left: 0
        right: 0
        bottom: 0
        height:.4rem
        line-height: .30rem
        text-align: center
</style>
