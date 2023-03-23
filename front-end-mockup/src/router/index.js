import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProfileView from '../views/ProfileView.vue';
import MessagesListing from '../views/MessagesListing.vue';
import DatePickerView from '../views/DatePickerView.vue';
import GenderPicker from '../views/GenderPicker.vue'
import InterestsView from '../views/InterestsView.vue'
import SignUpView from '../views/SignUpView.vue';
import SignUpPage from '../views/SignUpPage.vue';

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
        path: '/datepicker',
        name: 'datepicker',
        component: DatePickerView,
    },
    {
        path: '/interests',
        name: 'Interests',
        component: InterestsView
    },
    {
        path: '/messages',
        name: 'messages',
        component: MessagesListing
    },
    {
        path: '/signuppage',
        name: 'signuppage',
        component: SignUpPage
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router