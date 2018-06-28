<template>
    <div>
        <header class="ownHeader">
            <div class="main-header">
                <div class="account">
                    <div class="own">
                        <span class="iconfont icon-gerenzhongxinsel"></span>
                    </div>
                    <div class="log">
                        <span>18516283230</span>
                        <span>OKEX</span>
                    </div>
                    <a href="">切换账户</a>
                </div>
                <div class="asset">
                    <div class="ukb">
                        <span>UKB</span>
                        <span>￥0</span>
                    </div>
                    <div class="rmb">
                        <span>RMB</span>
                        <span>￥0</span>
                    </div>
                </div>
            </div>
        </header>
    </div>
</template>
<script>
export default {
  name: 'ownHeader'
}
</script>

<style lang="scss" scoped>
    header.ownHeader{
        width: 100%;
        height: 3.6rem;
        background:#2b82c7;
    }
    header .main-header{
        width: 90%;
        height: 100%;
        margin: 0 auto;
    }
    header .main-header .account{
        width: 100%;
        overflow: hidden;
        float: left;
    }
    header .main-header .own{
        width: 0.8rem;
        height: 0.8rem;
        float: left;
        margin-top: 0.4rem;
        text-align: center;
        color: #96f0f9;
        line-height: 0.8rem;
    }
    header .main-header .own .iconfont{
        font-size: 0.5rem;
    }
    header .main-header .own>img{
        width: 0.8rem;
        float: left;
    }
    header .main-header .log{
        float: left;
        margin-left: 0.2rem;
    }
    header .main-header .log>span{
        line-height: 0.8rem;
        display: inline-block;
        margin-top: 0.4rem;
    }
    header .main-header .log>span:first-child{
        color: #fff;
    }
    header .main-header .log>span:nth-child(2){
        color: #b0d3ff;
        margin-left: 0.2rem;
    }
    header .main-header .account>a{
        float: right;
        line-height: 1.6rem;
        color: #b0d3ff;
    }
    header .main-header .asset{
        width: 100%;
        height: 2rem;
        float: left;
    }
    header .main-header .asset .ukb,header .main-header .asset .rmb{
        width: 50%;
        height: 100%;
        float: left;
        text-align: left;
    }
    header .main-header .asset .ukb>span,header .main-header .asset .rmb>span{
        display: block;
        line-height: 0.8rem;
    }
    header .main-header .asset .ukb>span:first-child{
        color: #6fb0e8;
    }
    header .main-header .asset .ukb>span:nth-child(2){
        color: #fff;
    }
    header .main-header .asset .rmb>span:first-child{
        color: #6fb0e8;
    }
    header .main-header .asset .rmb>span:nth-child(2){
        color: #fff;
    }
</style>
