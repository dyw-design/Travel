<template>
  <div class="header">
      <div class="header-back">
        <span class="iconfont">&#xe624;</span>
      </div>
      <div class="header-search">
        <span class="iconfont">&#xe632;</span>        
        输入城市/景点/游玩主题
        </div>
      <div class="header-city">
        城市
        <span class="iconfont arow-down">&#xe64a;</span>                
      </div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    @import 'styles/varibles.scss';
    .header{
      line-height:.86rem;
      display:flex;
      // background:#00bcd4;
      background:$bgColor;
      color:#fff;
      .header-back{ 
          float:left; 
          width:.64rem;
          text-align:center;
        } 
      .header-search{
        flex:1;
        background:#fff;
        height:.64rem;
        line-height:.64rem;
        margin-top:.12rem;
        margin-left:.2rem;
        border-radius:.1rem;
        color:#ccc;
        padding-left:.2rem;
    }
      .header-city{
        float:right;
        width:1.24rem;
        text-align:center;
        .arow-down{
          font-size: .24rem;
          margin-left:-.05rem;
        }
      } 
    }
</style>
