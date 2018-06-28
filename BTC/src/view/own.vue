<template>
    <div>
        <ownHeader></ownHeader>
        <!--pay start-->
        <div class="pay">
            <div class="recharge">
                <a href="#">
                    <span class="iconfont icon-gerenzhongxin"></span>
                    <span>充值</span>
                </a>

            </div>
            <div class=" Withdraw">
                <a href="#">
                    <span class="iconfont icon-tixian"></span>
                    <span>提现</span>
                </a>

            </div>
        </div>
        <!--pay end-->
        <!--section start-->
        <section>
            <ul>
                <li v-for="(list,index) in lists" :key="index">
                    <a href="#">
                        <span>{{list.title}}</span>
                        <span :class="list.icon"></span>
                    </a>
                </li>
            </ul>
        </section>
        <!--section end-->
    </div>
</template>

<script>
import ownHeader from '../components/ownHeader'
import myFooter from '../components/footer'
export default {
  name: 'own',
  components: {
    ownHeader,
    myFooter
  },
  data () {
    return {
      lists: [
        {title: '安全中心', icon: 'iconfont icon-jiantou'},
        {title: '支付信息', icon: 'iconfont icon-jiantou'},
        {title: '建议反馈', icon: 'iconfont icon-jiantou'},
        {title: '版本更新', icon: 'iconfont icon-jiantou'},
        {title: '退出登录', icon: 'iconfont icon-jiantou'}
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
    .pay{
        width: 100%;
        height: 1.8rem;
        background: #fff;
        display: flex;
        justify-content: space-around;
    }
    .pay .recharge,.pay .Withdraw{
        width: 50%;
        height: 100%;
    }
    .pay .recharge>a,.pay .Withdraw>a{
        width: 100%;
        height: 100%;
        display: block;
    }
    .pay .recharge{
        border-right: 1px solid #ccc;
    }
    .pay .recharge .iconfont,.pay .Withdraw .iconfont{
        line-height: 1.86rem;
        width: 30%;
        text-align: right;
        font-size: 0.48rem;
    }
    .pay .recharge>a>span,.pay .Withdraw>a>span{
        line-height: 1.8rem;
        color: #646464;
        font-weight: 600;
        font-size: 0.42rem;
        float: left;
        padding-left: 0.2rem;
    }
    section{
        width: 100%;
        overflow: hidden;
        margin-top: 0.4rem;
        float: left;
        margin-bottom: 1.4rem;
    }
    section>ul{
        width: 100%;
        overflow: hidden;
        float: left;
    }
    section>ul>li{
        width: 100%;
        height: 1.4rem;
        border-bottom: 1px solid #edebeb;
        background: #fff;
    }
    section>ul>li>a{
        display: block;
        width: 100%;
        height: 100%;
        float: left;
        line-height: 1.2rem;
        padding: 0 0.6rem;
    }

    section>ul>li>a>span:first-child{
        color: #313131;
        font-weight: 600;
    }
    section>ul>li>a>span:nth-child(2){
        color: #e0e0e0;
        /*font-size: 0.6rem;*/
        float: right;
    }
    section>ul>li>a .iconfont{
        font-size: 0.4rem;
    }
</style>
