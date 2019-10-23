<template>
    <div class="guess-you-like">
        <div class="top-title">
            <span>&#xe63c;</span>猜你喜欢
        </div>
        <div class="content">
            <ul>
                <li>
                    <div class="content-top">
                        <div class="left">
                            <img src="http://img1.qunarzz.com/sight/p0/1502/ba/ba5f873a22327e0f.water.jpg_200x200_9bf5cc14.jpg" alt="">
                        </div>
                        <div class="right">
                            <div class="title">上海迪士尼乐园</div>
                            <div class="comments"><i class="star">*****</i><span class="comments-counts">269973条评论</span></div>
                            <div class="price"><span class="price-number">￥399</span> <div class="address">浦东新区</div></div>
                        </div>
                    </div>
                    <div class="bottom">
                        全球最大的迪士尼城堡
                    </div>
                </li>
                <li>
                    <div class="content-top">
                        <div class="left">
                            <img src="http://img1.qunarzz.com/sight/p0/1502/ba/ba5f873a22327e0f.water.jpg_200x200_9bf5cc14.jpg" alt="">
                        </div>
                        <div class="right">
                            <div class="title">上海迪士尼乐园</div>
                            <div class="comments"><i class="star">*****</i><span class="comments-counts">269973条评论</span></div>
                            <div class="price"><span class="price-number">￥399</span> <div class="address">浦东新区</div></div>
                        </div>
                    </div>
                    <div class="bottom">
                        全球最大的迪士尼城堡
                    </div>
                </li>
            </ul>
            <div class="more">
                查看所有商品
            </div>
        </div>
        <div class="watch-more"></div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.guess-you-like{
    padding:0 0 0 .24rem;
    .top-title{
        font:.32rem/.98rem "";
        height:.98rem;
        span {
            color:red;
        }
    }
    .content{
        ul {
            li {
                padding:.2rem 0;
                border-bottom:1px solid gainsboro;
                .content-top {
                    display:flex;
                    justify-content: space-between;
                    .left{
                        width:2rem;
                        img{
                            width:100%;
                        }
                    }
                    .right{
                        width:5.26rem;
                        text-indent: 2em;
                        overflow: hidden;
                        .title {
                            margin-top:.26rem;
                            font-size:.32rem;
                        }
                        .comments{
                            font-size:.24rem;
                            margin-top:.14rem;
                        }
                        .price{
                            display:flex;
                            justify-content: space-between;
                            .price-number {
                                color:orange;
                            }
                            .address{
                                margin-right:.1rem;
                            }
                        }
                    }
                }
                .bottom {
                    font:.24rem/.6rem "";
                    color:red;
                    text-align:center;
                }
            }
        }
        .more{
            font:.32rem/.6rem "";
            color:skyblue;
            text-align:center;
        }
    }
}
</style>