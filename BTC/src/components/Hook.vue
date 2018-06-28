<template>
    <div>
        <input v-model="example0">
    </div>
</template>

<script>
/* eslint-disable no-unused-expressions */

import Vue from 'vue'
export default {
  name: 'hook'

}

// Vue 实例的数据都保存在 data 对象中，Vue 将会递归将 data 的属性转换为 getter/setter，
// 从而让 data 的属性能够响应数据变化。
// var data = {a: 1}
var vm = new Vue({
  data: {
    a: 1,
    example0: 'huihui'
  }, // 保存在 data 对象中
  computed: {
    add: function () {
      return this.a + 1
    }
  },
  methods: {
    remove: function () {
      return this.a - 1
    }
  },
  watch: {
    example0: {
      handler (curVal, oldVal) {
        console.log(curVal, oldVal)
      },
      deep: true
    }
  }
})
// console.log(vm.a) // 1
// console.log(vm.$data === data) // true
console.log(vm.remove())
console.log(vm.$data)
// computed  计算属性

</script>

<style scoped>

</style>
