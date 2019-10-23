<template>
    <div class="hot-list">
        <div class="space-top"></div>
        <div class="hot-list-title">
            <div class="title-left"><span class="iconfont fire">&#xe601;</span>本周热门榜单</div>
            <div class="title-right">全部榜单<span class="iconfont more">&#xe6e7;</span></div>
        </div>
        <div class="hot-content">
            <ul :style="allWidth">
                <li>
                    <img src="http://img1.qunarzz.com/sight/p0/1607/7c/7cda8b6782dabd80b4.img.jpg_250x250_57ac4faa.jpg" alt="">
                    <p>上海迪士尼乐园</p>
                    <b><span>￥399</span>起</b>
                </li>
                <li>
                    <img src="http://img1.qunarzz.com/sight/p0/1607/7c/7cda8b6782dabd80b4.img.jpg_250x250_57ac4faa.jpg" alt="">
                    <p>上海迪士尼乐园</p>
                    <b><span>￥399</span>起</b>
                </li>
                <li>
                    <img src="http://img1.qunarzz.com/sight/p0/1607/7c/7cda8b6782dabd80b4.img.jpg_250x250_57ac4faa.jpg" alt="">
                    <p>上海迪士尼乐园</p>
                    <b><span>￥399</span>起</b>
                </li>
                <li>
                    <img src="http://img1.qunarzz.com/sight/p0/1607/7c/7cda8b6782dabd80b4.img.jpg_250x250_57ac4faa.jpg" alt="">
                    <p>上海迪士尼乐园</p>
                    <b><span>￥399</span>起</b>
                </li>
                <li>
                    <img src="http://img1.qunarzz.com/sight/p0/1607/7c/7cda8b6782dabd80b4.img.jpg_250x250_57ac4faa.jpg" alt="">
                    <p>上海迪士尼乐园</p>
                    <b><span>￥399</span>起</b>
                </li>
                <li>
                    <img src="http://img1.qunarzz.com/sight/p0/1607/7c/7cda8b6782dabd80b4.img.jpg_250x250_57ac4faa.jpg" alt="">
                    <p>上海迪士尼乐园</p>
                    <b><span>￥399</span>起</b>
                </li>
                <li>
                    <img src="http://img1.qunarzz.com/sight/p0/1607/7c/7cda8b6782dabd80b4.img.jpg_250x250_57ac4faa.jpg" alt="">
                    <p>上海迪士尼乐园</p>
                    <b><span>￥399</span>起</b>
                </li>
                <li>
                    <img src="http://img1.qunarzz.com/sight/p0/1607/7c/7cda8b6782dabd80b4.img.jpg_250x250_57ac4faa.jpg" alt="">
                    <p>上海迪士尼乐园</p>
                    <b><span>￥399</span>起</b>
                </li>
                <li>
                    <img src="http://img1.qunarzz.com/sight/p0/1607/7c/7cda8b6782dabd80b4.img.jpg_250x250_57ac4faa.jpg" alt="">
                    <p>上海迪士尼乐园</p>
                    <b><span>￥399</span>起</b>
                </li>
                <li>
                    <img src="http://img1.qunarzz.com/sight/p0/1607/7c/7cda8b6782dabd80b4.img.jpg_250x250_57ac4faa.jpg" alt="">
                    <p>上海迪士尼乐园</p>
                    <b><span>￥399</span>起</b>
                </li>
                <li>
                    <img src="http://img1.qunarzz.com/sight/p0/1607/7c/7cda8b6782dabd80b4.img.jpg_250x250_57ac4faa.jpg" alt="">
                    <p>上海迪士尼乐园</p>
                    <b><span>￥399</span>起</b>
                </li>
                <li>
                    <img src="http://img1.qunarzz.com/sight/p0/1607/7c/7cda8b6782dabd80b4.img.jpg_250x250_57ac4faa.jpg" alt="">
                    <p>上海迪士尼乐园</p>
                    <b><span>￥399</span>起</b>
                </li>
            </ul>
        </div>
        <div class="space-top"></div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            allWidth:'width:25.68rem;'
        }
    },
    methods:{

    }

}
</script>

<style lang="scss" scoped>
    .hot-list{
        margin-top:.2rem;
        width:100%;
        .space-top{
            height:.2rem;
            background:ghostwhite;
        }
        .hot-list-title{
            display:flex;
            justify-content:space-between;
            padding:0 .32rem 0 .2rem;
            height:.98rem;
            .title-left{
                font:.32rem/.98rem "";
                .fire{
                    color:orange;
                }
            }
            .title-right{
                font:.24rem/.98rem "";
                .more{
                    color:gainsboro;
                }
            }
        }
        .hot-content {
            width:100%;
            overflow-x:scroll;
            white-space: nowrap;
            ul {
                width:24rem;
                padding:0 .24rem;
                box-sizing: border-box;
                height:153px;
                &:after{
                    height:0;
                    clear:both;
                    display:block;
                }
                li{
                    &:last-child{
                        margin:0;
                    }
                    margin-right:.1rem;
                    width:2rem;
                    float:left;
                    padding:.06rem 0 .2rem;
                    img{
                        width:2rem;
                        display:block;
                        height:2rem;
                    }
                    p{
                        font:.24rem/.32rem "";
                        margin-top:.12rem;
                        text-align:center;
                    }
                    b{
                        display:block;
                        text-align: center;
                        font:.24rem/.36rem "";
                        span{
                            color:orange;
                        }
                    }
                } 
            }
        }
    }
</style>