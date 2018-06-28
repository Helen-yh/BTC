<template>
    <div class="detail-num" rel="detail" >
        <form class="">
            <div class="active-label">
                <label >金额 <span>88.00-4400CNY</span></label>
                <input type="text" class="" v-bind:placeholder="'输入要'+parentToChild.val+'金额'">
            </div>
            <div class="active-label">
                <label >数量<span>88.00-4400CNY</span></label>
                <input type="text" class="" v-bind:placeholder="'输入要'+parentToChild.val+'数量'">
            </div>
            <button type="button" class="btn" :style="{background:parentToChild.color}" >立即{{parentToChild.val}}</button>
        </form>
    </div>
</template>
<script>
export default {
  name: 'buyNow',
  data () {
    return {
      flag: true
    }
  },
  props: ['parentToChild']

}
</script>

<style lang="scss" scoped>
    .detail-num{
        width: 100%;
        overflow: hidden;
        float: left;
        padding: 0 0.4rem;
        margin-bottom: 1rem;
    }
    .detail-num .active-label{
        width: 100%;
        height: 1rem;
        padding-left: 1rem;
        font-size: 0.16rem;
    }
    .detail-num .active-label>label{
        font-size: 0.16rem;
        width: 100%;
        float: left;
        line-height: 1rem;
        color: #888888;
    }
    .detail-num .active-label>input{
        width: 90%;
        height: 100%;
        float: left;
        font-size: 0.3rem;
        padding-left: 0.1rem;border: 1px solid #ccc;

    }
    .detail-num .active-label>label>span{
        color: red;
        padding-left: 0.2rem;
        font-size: 0.16rem;

    }
    .detail-num>form>button{
        width: 80%;
        height: 1rem;
        margin-left: 1rem;
        margin-top: 0.4rem;
        background: #329845;
        color: #fff;
        border: none;
    }
</style>
