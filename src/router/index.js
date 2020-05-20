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
    component: () => import(/* webpackChunkName: "layout" */ '../views/layout')
  },
  {
    path: '/net',
    name: 'Net',
    component: () => import(/* webpackChunkName: "net" */ '../views/net')
  },
  {
    path: '/drag',
    name: 'Drag',
    component: () => import(/* webpackChunkName: "drag" */ '../views/drag')
  },
  {
    path: '/grid',
    name: 'Grid',
    component: () => import(/* webpackChunkName: "grid" */ '../views/grid')
  },
  {
    path: '/pdfGenerate',
    name: 'PdfGenerate',
    component: () => import(/* webpackChunkName: "pdfGenerate" */ '../views/pdfGenerate')
  },
  {
    path: '/Canvas',
    name: 'canvas',
    component: () => import(/* webpackChunkName: "canvas" */ '../views/canvas')
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
