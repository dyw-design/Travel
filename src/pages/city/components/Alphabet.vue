<template>
  <ul class="list">
    <li
      class="item"
      v-for="item of letters"
      :key="item"
      :ref="item"
      @click="handleLetterClick"
      @touchstart="handletouchstart" 
      @touchmove="handletouchmove" 
      @touchend="handletouchend" 
    >
      {{item}}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'CityAlphabet',
  props: {
    cities: Object
  },
  computed: {
    letters () {
    const letters = [];
    for(let i in this.cities){
      letters.push(i)
    }
    return letters;
    }
  },
  data () {
    return {
      touchStatus: false,
      startY: 0,
      timer: null
    }
  },
  methods: {
    handleLetterClick (e) {
      // console.log(e.target.innerText);
      this.$emit('change', e.target.innerText)
    },
    handletouchstart(){
      this.touchStatus = true;
    },
    handletouchmove(e){
      //此处需要优化
      if(this.touchStatus){
          let scrollTop = this.$refs['A'][0].offsetTop;
          let touchY = e.touches[0].clientY - 79;
          let index = Math.floor((touchY - scrollTop) / 20);
          if(index >= 0 && index < this.letters.length){
            this.$emit('change',this.letters[index]); 
          }
      }
    },
    handletouchend(){

    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .list
    display: flex
    flex-direction: column
    justify-content: center
    position: absolute
    top: 1.58rem
    right: 0
    bottom: 0
    width: .4rem
    .item
      line-height: .4rem
      text-align: center
      color: $bgColor
</style>
