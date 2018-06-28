<template>
<div>
    <myHeader v-bind:headerToChild="name"></myHeader>
    <!-- BTC start -->
    <div class="btc">
        <div class="main-btc">
            <div class="total">
                56721.44
            </div>
            <div class="right-btc">
                <div class="highest">
                    <span class="active">最高</span>
                    <span>54821.44</span>
                </div>
                <div class="lowest">
                    <span class="active">最底</span>
                    <span>35678.44</span>
                </div>
            </div>
        </div>
    </div>
    <!-- BTC end -->
    <!-- section start  -->
    <section>
        <div class="header">
            <ul class="list">
                <li v-for="(item,index) in items" @click="addClass(index)"
                    :class="{active:index==current}" :key="item.id">
                    <span v-bind:class="item.icon"></span>
                    {{item.title}}
                </li>
            </ul>
        </div>
        <div class="section" v-for="(item,index) in items" :class="{active:index==current}" :key="item.id">
            <div class="tops" v-if="index != 2">
                <div class="top-list">价格/数量</div>
                <div class="top-list">操作</div>
            </div>
            <ul v-if="index != 2">
                <li v-for="(data,index) in message" :key="index">
                    <div class="detail-in">
                        <div class="price">
                            <p>{{data.CNY}}CNY</p>
                            <P>{{data.OSC}} OSC</P>
                        </div>
                        <div class="set">
                            <a href="#" class="info" @click="show(index)">{{item.val}}</a>
                        </div>
                    </div>
                    <buy-now v-show="data.FlagShow" v-bind:parentToChild="item"></buy-now>
                </li>
            </ul>
        </div>
    </section>
</div>
</template>

<script>
import myHeader from '../components/header'
import buyNow from '../components/buyNow'
import myFooter from '../components/footer'
// import $ from 'jquery'
export default {
  name: 'bargin',
  components: {
    myHeader,
    buyNow,
    myFooter
  },
  data () {
    return {
      items: [
        {
          title: '买入',
          icon: 'iconfont icon-xiazai1',
          val: '买入',
          color: '#329845'

        }, {
          title: '卖出',
          icon: 'iconfont icon-daochu',
          val: '出售',
          color: '#c24549'
        }, {
          title: '交易单',
          icon: 'iconfont',
          color: '#2b82c0'
        }
      ],
      message: [
        {
          'CNY': '2.33',
          'OSC': '100',
          FlagShow: false
        },
        {
          'CNY': '2.34',
          'OSC': '100',
          FlagShow: false
        }
      ],
      current: 0,
      name: 'bargin'
    }
  },
  methods: {
    addClass: function (index) {
      this.current = index
    },
    show: function (index) {
      var temp = this.message
      temp[index].FlagShow = !temp[index].FlagShow
      this.message = temp
    }
  }

}
</script>

<style lang="scss" scoped>
    body{
        background: #fff;
    }
    .btc{
        width: 100%;
        height: 2rem;;
        background: #fff;
        float: left;
        margin-top: 1.6rem;
        border-bottom: 1px solid #f4f4f4;
    }
    .main-btc{
        width: 90%;
        height: 100%;
        padding: 0 0.5rem;

    }

    .main-btc .total{
        width: 50%;
        height: 100%;
        line-height: 2rem;
        float: left;
        color: #2b82c7;
        font-size: 0.48rem;
        font-weight: 600;
        /* text-align: center; */
    }
    .main-btc .right-btc{
        width: 50%;
        height: 100%;
        float: right;
        padding: 0.15rem 0;
    }
    .main-btc .right-btc .highest,.main-btc .right-btc .lowest{
        width: 100%;
        height: 50%;
        float: right;
        text-align: right;
        line-height: 1rem;
    }
    .main-btc .right-btc .highest>span,.main-btc .right-btc .lowest>span{
        margin-left: 0.2rem
    }
    .main-btc .right-btc .highest .active,.main-btc .right-btc .lowest .active{
        color: #8a959b;
    }
    section{
        width: 100%;
        overflow: hidden;
        /* background: #fff; */
        float: left;
    }
    section .tops{
        width: 100%;
        height: 0.8rem;
        display: flex;
        justify-content: space-between;
        float: left;
        background: #f4f4f4;
    }
    section .top-list{
        text-align: center;
        line-height: 0.8rem;
        width: 50%;
    }
    section .header{
        width: 100%;
        height: 1.2rem;
    }

    .header .list{
        width: 100%;
        height: 100%;
        background: #fff;
        display: flex;
        justify-content: space-around;
    }
    .header .list>li{
        width: 33%;
        height: 100%;
        text-align: center;
        line-height: 1.2rem;

    }
    .header .list>li.active{
        border-bottom: 1px solid #2b82c7;
    }
    section{
        margin-bottom: 1.4rem;
    }
    section  .detail-in{
        width: 100%;
        float: left;
        height: 1.8rem;
    }
    section .section{
        width: 100%;
        overflow: hidden;
        display: none
    }
    section .section .use{
        width: 100%;
        height: 1rem;
        color: #979ca0;
        margin-top: 0.3rem;
        padding: 0 0.8rem;
    }
    section .section .use .pri{
        font-size: 0.24rem;
        width: 70%;
        float: left;
        height: 100%;
    }
    section .section .use .go{
        font-size: 0.24rem;
        width: 30%;
        float: left;
        height: 100%;
        line-height: 1rem;
        text-align: right;
        color:#319ff8;
    }
    section .section .use .go>a{
        color:#319ff8;
    }
    section .section .use .pri>p{
        width: 100%;
        float: left;
        line-height: 0.6rem;
        height: 50%;
        margin-top: 0.1rem;
    }
    section .section>ul{
        width: 100%;
        overflow: hidden;
    }
    section .section.active{
        display: block;
    }
    section .section>ul>li{
        width: 100%;
        overflow: hidden;
        background: #fff;
        color:#979ca0;
    }
    section .section>ul>li:nth-child(2){
        background: #f4f4f4;
    }
    section .section>ul>li .set,section .section>ul>li .price{
        width: 50%;
        height: 100%;
        padding: 0.4rem 0.4rem;
        float: left;
    }
    section .section>ul>li .set{
        position: relative;
    }
    section .section>ul>li .price>p{
        width: 100%;
        text-align: center;
    }
    section .section>ul>li .price>p:first-child{
        color: #000;
        font-size: 0.36rem;
    }
    section .section>ul>li .price>p:nth-child(2){
        color: #aaaaaa;
        font-size: 0.36rem;
    }
    section .section>ul>li .set .info,section .section>ul>li .set .inout{
        width: 1.8rem;
        height: 0.8rem;
        border-radius: 0.5rem;
        text-align: center;
        line-height: 0.8rem;
        color: #fff;
        position: absolute;
        left: 0;
        right: 0;
        top:0;
        bottom: 0;
        margin: auto;
        background: #2b82c7;
    }
    section .section>ul>li .bottom{
        width: 100%;
        float: left;
        line-height: 1rem;
    }
    section .section>ul>li .bottom .price{
        width: 50%;
        display: inline-block;
        padding-left: 0.4rem;
        color: #000;
        float: left;
    }
    section .section>ul>li .bottom .num{
        width: 50%;
        text-align: left;
        float: left;
    }
    section .detail-num>form>button{
        width: 80%;
        height: 1rem;
        margin-left: 1rem;
        margin-top: 0.4rem;
        background: #329845;
        color: #fff;
        border: none;
    }
    section .section.out .detail-num>form>button{
        background: #c24549;
    }
</style>
