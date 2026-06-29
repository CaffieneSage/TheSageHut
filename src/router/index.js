import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Youtube from '../pages/Youtube.vue'
import About from '../pages/About.vue'
import Support from '../pages/Support.vue'
import Privacy from '../pages/Privacy.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/youtube', component: Youtube },
  { path: '/about', component: About },
  { path: '/support', component: Support },
  { path: '/privacy', component: Privacy }

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
