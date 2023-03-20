import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProfileView from '../views/ProfileView.vue';
import SignUpView from '../views/SignUpView.vue';
// import GenderPicker from '../views/GenderPicker.vue'
// import InterestsView from '../views/InterestsView.vue'

const routes = [{
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/profile',
        name: 'profile',
        component: ProfileView,
    },
    {
        path: '/signup',
        name: 'signup',
        component: SignUpView,
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
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router