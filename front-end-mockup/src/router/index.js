import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProfileView from '../views/ProfileView.vue';
import SignUpView from '../views/SignUpView.vue';
import GenderPicker from '../views/GenderPicker.vue'
import InterestsView from '../views/InterestsView.vue'

const routes = [{
        path: '/',
        name: 'Home',
        component: HomeView
    },
    {
        path: '/profile',
        name: 'Profile',
        component: ProfileView,
    },
    {
        path: '/sign-up',
        name: 'SignUp',
        component: SignUpView,
    },
    {
        path: '/gender-picker',
        name: 'GenderPicker',
        component: GenderPicker
    },
    {
        path: '/interests',
        name: 'Interests',
        component: InterestsView
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router