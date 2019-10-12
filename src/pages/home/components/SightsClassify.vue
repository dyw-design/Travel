<template>
  <div class = "sightClassify">
    <swiper :options = "swiperOption">
      <swiper-slide v-for="(page,index) in pages" :key="index">
        <ul>
          <li v-for = "item in page" :key = "item.id">
            <img :src = "item.sightsUrl" :alt = "item.title">
            <p>{{item.title}}</p>
          </li>
        </ul>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
  export default {
    name: 'SightsClassify',
    data() {
      return {
        swiperOption: {
          pagination: '.swiper-pagination'
        },
        sights: [{
            id: '001',
            sightsUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
            title: '景点门票'
          },
          {
            id: '002',
            sightsUrl: 'http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png',
            title: '动植物园'
          },
          {
            id: '003',
            sightsUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/3ef092d0a89ffddb7f781cda30c8ae49.png',
            title: '国庆大促'
          },
          {
            id: '004',
            sightsUrl: 'http://img1.qunarzz.com/piao/fusion/1803/f5/c4c9d9830404e602.png',
            title: '室内娱乐'
          },
          {
            id: '005',
            sightsUrl: 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
            title: '一日游'
          },
          {
            id: '006',
            sightsUrl: 'http://img1.qunarzz.com/piao/fusion/1803/3e/86314b2af03b7502.png',
            title: '黄埔江游船'
          },
          {
            id: '007',
            sightsUrl: 'http://img1.qunarzz.com/piao/fusion/1803/47/c2b659e048b11602.png',
            title: '上海野生'
          },
          {
            id: '008',
            sightsUrl: 'http://img1.qunarzz.com/piao/fusion/1803/de/f26be47a6bf02a02.png',
            title: '上海迪士尼'
          },
          {
            id: '009',
            sightsUrl: 'http://img1.qunarzz.com/piao/fusion/1803/de/f26be47a6bf02a02.png',
            title: '更多'
          }
        ],
      }
    },
    computed: {
      pages() {
        const pages = [];
        this.sights.forEach((item, index) => {
          const page = Math.floor(index / 8);
          if (!pages[page]) {
            pages[page] = [];
          }
          pages[page].push(item);
        });
        return pages;
      }
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import 'styles/mixins.scss';

  .sightClassify>>>.swiper-pagination-bullet-active {
    background: rgba(0, 175, 190, .8);
  }

  .sightClassify {
    width: 100%;

    ul {
      width: 100%;
      clear: both;

      li {
        width: 25%;
        overflow: hidden;
        float: left;
        height: 1.6rem;
        padding-top: .1rem;

        img {
          width: 1.1rem;
          display: block;
          margin: 0 auto;
          // height:1.1rem;
        }

        p {
          text-align: center;
          font-size: 0.28rem;
          margin-top: .1rem;
          @include ellipse;
        }
      }
    }
  }

</style>
