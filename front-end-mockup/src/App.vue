
<template>
  <nav class="bg-black text-white flex gap-4 overflow-auto">
    <router-link to="/">Home</router-link>
    <router-link to="/profile">Profile</router-link>
    <router-link to="/messages">Messages</router-link>
    <router-link to="/gender-picker">Gender</router-link>
    <router-link to="/interests">Interests</router-link>
    <router-link to="/sign-up">SignUp</router-link>
    <router-link to="/datepicker">DatePicker</router-link>
  </nav>
  <router-view/>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');

/*:root {
    --primary: #000;
    --clr-secondary: #8507B2;
    --clr-content: #A0A0A0;
    --clr-white: #E9DADA;
    
    --clr-black1: #1E1E1E;
    --clr-purple1: #B20CEC;

    --font-primary: 'Inter', sans-serif;
}*/

#app {
  max-width: 400px;
  min-height: 100vh;
  height: fit-content;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  background-color: var(--clr-primary);
}
</style>
