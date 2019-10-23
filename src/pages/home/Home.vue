<template>
  <div class="home">
     <home-header></home-header>
     <home-swiper></home-swiper>
     <home-classify></home-classify>
     <home-location></home-location>
     <hot-list></hot-list>
     <home-like></home-like>
     <home-week></home-week>
  </div>
</template>

<script>
import HomeHeader from './components/HomeHeader'
import HomeSwiper from './components/Swiper'
import HomeClassify from './components/SightsClassify'
import HomeLocation from './components/Location'
import HotList from './components/HotList'
import HomeLike from './components/Guess_You_Like'
import HomeWeek from './components/Week'
export default {
  name: 'Home',
  components: {
      HomeHeader,
      HomeSwiper,
      HomeClassify,
      HomeLocation,
      HotList,
      HomeLike,
      HomeWeek
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
