
<template>
  <nav class="bg-black text-white">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/profile">Profile</router-link>
    <router-link to="/genderPicker">Gender</router-link>
  </nav>
  <router-view/>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');

:root {
    --clr-primary: #000;
    --clr-secondary: #8507B2;
    --clr-content: #A0A0A0;
    --clr-white: #E9DADA;
    
    --clr-black1: #1E1E1E;
    --clr-purple1: #B20CEC;

    --font-primary: 'Inter', sans-serif;
}

#app {
  max-width: 400px;
  position: relative;
  margin-left: auto;
  margin-right: auto;
}
</style>
