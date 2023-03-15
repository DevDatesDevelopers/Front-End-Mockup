import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PageView from '../views/PageView.vue';
import GenderPicker from '../views/GenderPicker.vue'
<<<<<<< HEAD
import InterestsView from '../views/InterestsView.vue'
=======
>>>>>>> dd7fd671dde634906ae8208185a3b2d6b4d22971

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/profile',
    name: 'profile',
    component: PageView,
  },
  {
    path: '/genderPicker',
    name: 'genderPicker',
    component: GenderPicker
<<<<<<< HEAD
  },
  {
    path: '/Interests',
    name: 'Interests',
    component: InterestsView
=======
>>>>>>> dd7fd671dde634906ae8208185a3b2d6b4d22971
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
