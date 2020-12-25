import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
  {
    path:"/nav1",
    name:"Nav1",
    component:()=>import(/* webpackChunkName:"nav1-1" */ '../views/Nav1.vue')
  },
  {
    path:"/nav1-1",
    name:"Nav1-1",
    component:()=>import(/* webpackChunkName:"nav1-1" */ '../views/Nav1-1.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
