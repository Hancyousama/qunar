<template>
    <div class="header">
        <div class="header-left">
            <span class="iconfont back-icon">&#xe660;</span>
        </div>
        <div class="header-input">
            <span class="iconfont">&#xe651;</span>
            输入城市景点内容
        </div>
        <div class="header-right">城市
            <span class="iconfont arrow-icon">&#xe65c;</span>
        </div>
    </div>

</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>

<style lang="stylus" scoped>
  @import '~@/assets/styles/global.styl'
  .header
    display: flex
    line-height: 0.86rem
    background: $bgcolor
    color: #ffffff
    font-weight: bold
    text-align: center
    .header-left
      width: .64rem
      .back-icon
        text-align :center
        font-size:.28rem
        font-weight normal
    .header-right
       width: 1rem
       .arrow-icon
         font-size:.2rem
         font-weight normal
         margin-left:-.06rem
    .header-input
      flex: 1
      line-height:.62rem
      height:.62rem
      border-radius : .1rem
      background: white
      margin : .12rem .2rem
      color: #ccc
      text-align: left
      padding-left: .2rem
      font-weight: normal
</style>
