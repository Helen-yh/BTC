<template>
    <footer >
        <ul class="main-footer" >
            <li v-for="(foo,index) in Fooarr" :key="foo.id" @click.prevent="Link(index)" >
                <router-link  :to="foo.to"  :class="{active:index==fooActive}" >
                    <span :class="foo.icon"></span>
                    <span class="icon">{{foo.title}}</span>
                </router-link>
            </li>
        </ul>
    </footer>
</template>

<script>
export default {
  name: 'my-footer',
  data () {
    return {
      Fooarr: [
        {
          title: '交易',
          icon: 'iconfont icon-shouye',
          to: '/'
        },
        {
          title: '订单',
          icon: 'iconfont icon-fangxinjiaoyi',
          to: '/order'
        },
        {
          title: '我的',
          icon: 'iconfont icon-gerenzhongxin',
          to: '/own'
        }
      ],
      fooActive: 0
    }
  },
  methods: {
    Link: function (index) {
      this.fooActive = index
    }
  }
}
</script>

<style lang="scss" scoped>
    footer{
        width: 100%;
        height:1.4rem;
        border-top:0.1rem #ccc;
        box-shadow: 0.1rem 0.1rem 0.4rem #ccc;
        position: fixed;
        bottom: 0px;
        left: 0px;
    }
    footer .main-footer{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-around;
        background: #fff;
        li{
            height: 100%;
            width: 33.33%;
        }
        a{
            color: #000;
            background: #fff;
            font-size: 0.44rem;
            /* display: flex; */
            /* justify-content: space-between; */
            line-height: 1.4rem;
            z-index: 999;
            width: 100%;
        }
        .iconfont{
            width: 100%;
            text-align: center;
            display: block;
            height: 50%;
            line-height: 1rem;
            font-size: 0.6rem;
        }
    }
    footer .main-footer>li>a .icon{
        display: block;
        width: 100%;
        text-align: center;
        line-height: 0.8rem;
    }
    footer .main-footer  a.active{
        color: #2b82c7;
    }

</style>
