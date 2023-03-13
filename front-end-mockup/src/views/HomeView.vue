<template>
  <div class="flex flex-col bg-black h-screen" v-for="(profile, index) in profiles" :key="index">
    <img :src="require(`${profile.image}`)" class="min-w-[400px] self-center">
    <section class="absolute top-[25rem] pt-20 w-full h-fit bg-black rounded-t-[2rem] border-t-8 border-black">
      <div class="flex justify-between px-10 absolute w-full -top-8">
        <div class="bg-primary rounded-full aspect-square w-[4.5rem] flex items-center justify-center">
          <Icon icon="fa6-solid:x" class="text-3xl aspect-square" />
        </div>
        <div class="bg-primary rounded-full aspect-square w-[4.5rem] flex items-center justify-center">
          <Icon icon="fa6-solid:heart" class="text-3xl" />
        </div>
      </div>
      <div class="absolute top-2 left-0 right-0 h-[0.15rem] w-1/3 mx-auto bg-[#DF8CFC]"></div>
      <div class="flex px-10 mb-8">
        <div class="flex flex-col text-primary">
          <h1 class="text-3xl font-semibold">{{ profile.title }}</h1>
          <h3 class="text-1xl">{{ profile.subtitle }}</h3>
        </div>
      </div>
      <div class="flex px-10 mb-8">
        <div class="flex flex-col text-primary">
          <h2 class="text-1xl font-bold">Location</h2>
          <h3 class="text-1xl">{{ profile.location }}</h3>
        </div>
      </div>
      <div class="flex px-10 mb-8">
        <div class="flex flex-col text-primary">
          <h2 class="text-1xl font-bold">About</h2>
          <p class="text-1xl mb-2">{{ profile.about }}</p>
          <p class="text-1xl font-semibold">Read more</p>
        </div>
      </div>
      <div class="flex px-10 mb-8">
        <div class="flex flex-col text-primary w-full">
          <h2 class="text-1xl font-bold mb-2">Interests</h2>
          <div class="grid grid-cols-3 gap-2 text-center">
            <div class="border-[1px] rounded-md p-1 text-sm" v-for="(interest, index) in profile.interests" :key="index">
              {{ interest }}
            </div>
          </div>
        </div>
      </div>
      <div class="flex px-10 mb-8">
        <div class="flex flex-col text-primary">
          <h2 class="text-1xl font-bold mb-2">Gallery</h2>
          <div class="grid grid-cols-6 gap-2">
            <img src="@/assets/images/parker1-gallery1.png" class="col-span-3">
            <img src="@/assets/images/parker1-gallery2.png" class="col-span-3">
            <img src="@/assets/images/parker1-gallery3.png" class="col-span-2">
            <img src="@/assets/images/parker1-gallery4.png" class="col-span-2">
            <img src="@/assets/images/parker1-gallery5.png" class="col-span-2">
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { Icon } from '@iconify/vue';
import { ref } from 'vue';

const profiles = ref([
  {
    id: 1,
    image: '@/assets/images/parker1-main.jpg',
    title: 'Jessica Parker, 23',
    subtitle: 'Professional Model',
    location: 'Chicago, IL United States',
    about: 'My name is Jessica Parker and I enjoy meeting new people and finding new ways to help them find an uplifting experience. I enjoy reading...',
    interests: ['Travelling', 'Books', 'Dancing', 'Modelling', 'Writing'],
    gallery: [
      '@/assets/images/parker1-gallery1.png',
      '@/assets/images/parker1-gallery2.png',
      '@/assets/images/parker1-gallery3.png',
      '@/assets/images/parker1-gallery4.png',
      '@/assets/images/parker1-gallery5.png',
    ]
  },
  {
    id: 2,
    image: '@/assets/images/parker2-main.jpg',
    title: 'Cindy Richards, 21',
    subtitle: 'Professional Model',
    location: 'Chicago, IL United States',
    about: 'My name is Jessica Parker and I enjoy meeting new people and finding new ways to help them find an uplifting experience. I enjoy reading...',
    interests: ['Travelling', 'Books', 'Dancing', 'Modelling', 'Writing'],
    gallery: [
      '@/assets/images/parker1-gallery1.png',
      '@/assets/images/parker1-gallery2.png',
      '@/assets/images/parker1-gallery3.png',
      '@/assets/images/parker1-gallery4.png',
      '@/assets/images/parker1-gallery5.png',
    ]
  },
  {
    id: 3,
    image: '@/assets/images/parker3-main.jpg',
    title: 'Grace May, 26',
    subtitle: 'Professional Model',
    location: 'Chicago, United States',
    about: 'My name is Jessica Parker and I enjoy meeting new people and finding new ways to help them find an uplifting experience. I enjoy reading...',
    interests: ['Travelling', 'Books', 'Dancing', 'Modelling', 'Writing'],
    gallery: [
      '@/assets/images/parker1-gallery1.png',
      '@/assets/images/parker1-gallery2.png',
      '@/assets/images/parker1-gallery3.png',
      '@/assets/images/parker1-gallery4.png',
      '@/assets/images/parker1-gallery5.png',
    ]
  },
  {
    id: 3,
    image: '@/assets/images/parker4-main.jpg',
    title: 'Jessie Eden, 22',
    subtitle: 'Professional Model',
    location: 'Chicago, United States',
    about: 'My name is Jessica Parker and I enjoy meeting new people and finding new ways to help them find an uplifting experience. I enjoy reading...',
    interests: ['Travelling', 'Books', 'Dancing', 'Modelling', 'Writing'],
    gallery: [
      '@/assets/images/parker1-gallery1.png',
      '@/assets/images/parker1-gallery2.png',
      '@/assets/images/parker1-gallery3.png',
      '@/assets/images/parker1-gallery4.png',
      '@/assets/images/parker1-gallery5.png',
    ]
  },
  ]);
</script>