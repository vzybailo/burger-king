import Vue from 'vue'
import VueRouter from 'vue-router'
import List from '../components/List.vue'
import BurgerItem from '../pages/BurgerItem.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'List',
    component: List
  },
  {
    path: '/burger',
    name: 'BurgerItem',
    component: BurgerItem
  }
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
export default router