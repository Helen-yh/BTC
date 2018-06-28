<template>
    <div>
        <myHeader v-bind:headerToChild="name"></myHeader>
        <section>
            <ul class="list">
                <li  v-for="(list,index) in lists" :class="{active:index==active}" @click="addClass(index)" :key="index">
                    {{list.title}}
                </li>
            </ul>
            <div class="content">
                <ul  class="contents" v-for="(con,index) in contents" :class="{active:index==active}" :key="con.id">
                    <!-- 未完成 --> <!-- 已完成 --><!-- 已取消 -->
                </ul>
            </div>
        </section>
    </div>
</template>

<script>
import myHeader from '../components/header'
import myFooter from '../components/footer'
export default {
  name: 'order',
  components: {
    myHeader,
    myFooter
  },
  data () {
    return {
      lists: [
        {
          title: '未完成'
        }, {
          title: '已完成'
        }, {
          title: '已取消'
        }
      ],
      contents: [
        {
          name: 'd'
        }
      ],
      name: 'order',
      active: 0
    }
  },
  methods: {
    addClass: function (index) {
      this.active = index
    }
  }
}

</script>

<style lang="scss" scoped>
    body{
        background: #f6f7fb;
    }
    section {
        width: 100%;
        overflow: hidden;
        float: left;
        margin-bottom: 1.4rem;
        margin-top: 1.6rem;
    }
    section .list{
        width: 100%;
        display: flex;
        justify-content: space-around;
        background: #fff;
    }
    section .list>li{
        width: 33%;
        height:1.2rem;
        text-align: center;
        line-height: 1.2rem;
    }
    section .list>li.active{
        color:#2978ef;
        border-bottom: 1px solid #2978ef;
    }
    section .content{
        width: 100%;
        background: #fff;
        margin-top: 0.4rem;
        /* height: 2rem; */
    }
    section .content .contents{
        width: 100%;
        overflow: hidden;
        text-align: center;
        display: none;
    }
    section .content .contents.active{
        display: block;
    }
</style>
