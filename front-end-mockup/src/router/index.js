import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProfileView from '../views/ProfileView.vue';
// import GenderPicker from '../views/GenderPicker.vue'
// import InterestsView from '../views/InterestsView.vue'
import MessagesListing from '../views/MessagesListing.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/profile',
    name: 'profile',
    component: ProfileView,
  },
  // {
  //   path: '/genderPicker',
  //   name: 'genderPicker',
  //   component: GenderPicker
  // },
  // {
  //   path: '/Interests',
  //   name: 'Interests',
  //   component: InterestsView
  // }
  {
    path: '/messages',
    name: 'messages',
    component: MessagesListing
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
