<template>
    <div class="bak">
        <span class="title">快速方式登录</span>
        <form action="" class="login">
            <div class="phone">
                <label for="">+86</label>
                <input type="text">
            </div>
            <div class="code">
                <input type="text" placeholder="请输入验证码">
                <label for="" @click="tab()">获取验证码</label>
            </div>
            <div class="password">
                <input type="password" placeholder="请输入密码">
            </div>
            <button type="submit" >立即登录</button>
        </form>
    </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      flag: false
    }
  }
}
</script>

<style lang="scss" scoped>
   .bak{
       width: 100%;
       height: 100%;
       position: fixed;
       top: 0;
       left: 0;
        background: #fff;
    }
    .title{
        width: 100%;
        font-size: 0.46rem;
        padding-left: 1rem;
        line-height: 2rem;
    }
    .login{
        width: 100%;
        overflow: hidden;
        padding: 1rem;
        margin: 0 auto;
        margin-top: 0.1rem;
        .phone,.code,.password{
            width: 100%;
            height: 1.4rem;
            line-height: 1.4rem;
            border: none;
            border-bottom: 1px solid #ccc;
            padding: 0.2rem;
            input[type="text"]{
                width: 80%;
                border: none;
                height: 100%;
                line-height: 1.4rem;
            }
        }
    }
    .phone>label{
        width: 10%;
        float: left;
    }
   .password>input[type="password"]{
       width: 100%;
       height: 100%;
       border: none;
       float: left;
   }
   .phone>input[type="text"]{
       float: right;
   }
    .code>label{
        width: 25%;
        float: left;
    }
   .login .code>input[type="text"]{
       float: left;
       width: 75%;
   }
    button[type="submit"]{
        width: 100%;
        height: 1.2rem;
        margin-top: 1rem;
        color: #fff;
        border: none;
        font-size: 0.38rem;
    }
    footer{
        display: none;
    }
</style>
