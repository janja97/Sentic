import { createRouter, createWebHistory } from 'vue-router'
import Galery from '../views/Galery.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'


const routes = [
  {
    path: '/galery',
    name: 'galery',
    component: Galery
  },
  {
    path: '/',
    name: 'home',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: About

  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
