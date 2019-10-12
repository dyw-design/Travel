<template>
    <div class="swiper">
        <swiper :options="swiperOption" >
            <swiper-slide v-for="item in swiperList" :key="item.id">
                <img :src="item.imgUrl" alt="">
            </swiper-slide>
            <!-- <swiper-slide>I'm Slide 5</swiper-slide>
            <swiper-slide>I'm Slide 6</swiper-slide>
            <swiper-slide>I'm Slide 7</swiper-slide> -->
            <!-- Optional controls -->
            <div class="swiper-pagination"  slot="pagination"></div>
            <!-- <div class="swiper-button-prev" slot="button-prev"></div> -->
            <!-- <div class="swiper-button-next" slot="button-next"></div> -->
            <!-- <div class="swiper-scrollbar"   slot="scrollbar"></div> -->
        </swiper>
    </div>
</template>
<script>
    export default {
        name:'Homeswiper',
        data(){
            return {
                swiperOption : {
                    pagination:'.swiper-pagination',
                    // autoplay:true
                },
                swiperList:[
                    {
                        id:'0001',
                        imgUrl:'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20198/083c708a3949958bcbca0fcc0ea3d57f.jpg_750x200_e47acfc7.jpg'
                    },
                    {
                        id:'0002',
                        imgUrl:'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20197/0645bd625b46216a55e3835d0f677ce2.jpg_750x200_1e9a0cbf.jpg'
                    },
                    {
                        id:'0003',
                        imgUrl:'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20198/da3db1d9761f8984fd9c84c4eccf93ee.jpg_750x200_b7f8686a.jpg'
                    },
                    {
                        id:'0004',
                        imgUrl:'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20199/cd40bfe8cc78b91664dd9eddc844b9be.jpg_750x200_e1cb5b42.jpg'
                    }
                ]
            }
        },
        methods:{

        }
    }
</script>  
<style lang="scss" scoped>
    .swiper >>> .swiper-pagination-bullet-active{
        background:#fff;
    }
    .swiper{
        overflow:hidden;
        width:100%;
        height:0;
        padding-bottom:26.6667%;
        img{
            width:100%;
            // height:100%;
        }
    }
</style>