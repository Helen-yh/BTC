<template>
    <header>
        <div class="main-header">
            <p v-if="headerToChild == 'bargin' ">
                BTC
            </p>
            <p v-if="headerToChild == 'order' ">
                全部订单
            </p>
        </div>
    </header>
</template>

<script>
export default {
  name: 'my-header',
  data () {
    return {}
  },
  props: ['headerToChild']
}
</script>

<style lang="scss" scoped>
    header{
        width: 100%;
        height:1.4rem;
        background: #fff;
        line-height: 1.4rem;
        font-size: 0.44rem;
        font-weight: 800;
        position: fixed;
        top: 0;
        left: 0;
        border-bottom:1px solid  #f4f4f4;
    }
    .main-header{
        width: 100%;
        height: 100%;
        margin: 0 auto;
        text-align: center;
    }
    .main-header>p{
        font-size: 0.48rem;
        width: 100%;
        color: #223345;
        float: left;
        text-align: center;
    }
</style>
