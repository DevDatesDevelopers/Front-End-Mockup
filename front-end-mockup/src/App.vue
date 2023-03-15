<template>
  <nav class="bg-black text-white">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
    <router-link to="/genderPicker">Gender</router-link>
  </nav>
  <router-view/>
</template>

<style>
#app{
  max-width: 400px;
  position: relative;
  margin-left: auto;
  margin-right: auto;
}
</style>