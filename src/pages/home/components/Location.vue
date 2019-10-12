<template>
    <div class="location">
        <ul>
            <li><i class="iconfont">&#xe6e3;</i><span>定位失败</span></li>
            <li><i class="iconfont">&#xe6c0;</i><span>必游榜单</span></li>
        </ul>
    </div>
</template>
<script>
    export default {

    }
</script>
<style lang="scss" scoped>
    .location {
        width:100%;
        border-top:1px solid #ccc;
        ul {
            width:100%;
            overflow:hidden;
            li{
                width:50%;
                float:left;
                text-align:center;
                i{
                    font-size:16px;
                    margin-right:5px;
                }
                span{
                    font:14px/49px "";
                }
            }
        }
    }
</style>  