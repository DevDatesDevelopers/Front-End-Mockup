import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from './router'
import './assets/css/input.css'



  // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBUIlmx_YEFchkHF-tqxDASP37W43SkN7A",
  authDomain: "devdates-282f0.firebaseapp.com",
  projectId: "devdates-282f0",
  storageBucket: "devdates-282f0.appspot.com",
  messagingSenderId: "20760007046",
  appId: "1:20760007046:web:04f9dcae02f9f473551c07",
  measurementId: "G-P0NM8MBB95"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const pinia = createPinia()

createApp(App).use(router).use(pinia).mount('#app')
