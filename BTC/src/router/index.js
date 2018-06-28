import Vue from 'vue'
import Router from 'vue-router'
import bargin from '@/view/bargain'
import order from '@/view/order'
import own from '@/view/own'
import login from '@/view/login'
import hook from '@/components/Hook'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: bargin
    },
    {
      path: '/order',
      component: order
    },
    {
      path: '/own',
      component: own
    },
    {
      path: '/login',
      component: login,
      query: {
        flag: true
      }
    },
    {
      path: '/hook',
      component: hook
    }
  ]
})
