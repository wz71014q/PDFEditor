import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/layout',
    name: 'Layout',
    component: () => import(/* webpackChunkName: "net" */ '../views/layout')
  },
  {
    path: '/net',
    name: 'Net',
    component: () => import(/* webpackChunkName: "net" */ '../views/net')
  }
]

const router = new VueRouter({
  routes
})

export default router
export {
  routes,
  router
}
