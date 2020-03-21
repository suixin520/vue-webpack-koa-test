import Vue from 'vue'
import Router from 'vue-router'
import Test from '../pages/test'
import Error from '../pages/404'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/test'
    },
    {
      path: '/test',
      component: Test,
    },
    {
      path: '/error',
      component: Error,
    }
  ]
})
