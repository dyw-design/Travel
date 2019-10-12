<template>
  <div class="home">
     <home-header></home-header>
     <home-swiper></home-swiper>
     <home-classify></home-classify>
     <home-location></home-location>
  </div>
</template>

<script>
import HomeHeader from './components/HomeHeader'
import HomeSwiper from './components/Swiper'
import HomeClassify from './components/SightsClassify'
import HomeLocation from './components/Location'
export default {
  name: 'Home',
  components: {
      HomeHeader,
      HomeSwiper,
      HomeClassify,
      HomeLocation
  },
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
