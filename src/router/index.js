import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import course from '../views/course1.vue'
import options from '../views/options.vue'
import pricing from '../views/pricing.vue'



Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  }
  ,
  {
    path: '/course',
    name: 'course',
    component: course
  },
  {
    path: '/options',
    name: 'options',
    component: options
  },
  {
    path: '/pricing',
    name: 'pricing',
    component: pricing
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
