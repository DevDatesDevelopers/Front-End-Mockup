<template>
  <div v-for="(profile, index) in profiles" :key="index">
    <div class="flex flex-col bg-black h-screen" v-if="profileIndex == index">
      <img :src="require(`@/assets/images/${profile.image}`)" class="min-w-[400px] self-center">
      <section class="absolute top-[25rem] pt-20 w-full h-fit bg-black rounded-t-[2rem] border-t-8 border-black">
        <div class="flex justify-between px-10 absolute w-full -top-8">
          <div
            class="bg-primary hover:bg-[#DF8CFC] cursor-pointer rounded-full aspect-square w-[4.5rem] flex items-center justify-center"
            @click="nextProfile()">
            <Icon icon="fa6-solid:x" class="text-3xl aspect-square" />
          </div>
          <div
            class="bg-primary hover:bg-[#DF8CFC] cursor-pointer rounded-full aspect-square w-[4.5rem] flex items-center justify-center"
            @click="prevProfile()">
            <Icon icon="fa6-solid:heart" class="text-3xl" />
          </div>
        </div>
        <div class="absolute top-2 left-0 right-0 h-[0.15rem] w-1/3 mx-auto bg-[#DF8CFC]"></div>
        <div class="flex flex-row justify-between text-primary px-10 mb-8 w-full">
          <div>
            <h1 class="text-2xl font-semibold">{{ profile.title }}</h1>
            <h3 class="text-1xl">{{ profile.subtitle }}</h3>
          </div>
          <div class="border-[1px] rounded-2xl p-1 text-2xl w-14 aspect-square flex justify-center items-center">
            <Icon icon="fa6-solid:paper-plane" />
          </div>
        </div>
        <div class="flex flex-row justify-between text-primary px-10 mb-8">
          <div>
            <h2 class="text-1xl font-bold">Location</h2>
            <h3 class="text-1xl">{{ profile.location }}</h3>
          </div>
          <div class="rounded-2xl p-2 px-3 bg-primary bg-opacity-30 text-base w-fit h-1/2 flex justify-center items-center">
            <Icon class="mr-1" icon="fa6-solid:location-dot" /> 1km
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
              <div class="border-[1px] rounded-md p-1 text-sm" v-for="(interest, index) in profile.interests"
                :key="index">
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
  </div>
</template>

<script setup>
import { Icon } from '@iconify/vue';
import { ref } from 'vue';

const profileIndex = ref(0);
const profiles = ref([
  {
    id: 1,
    image: 'parker1-main.png',
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
    image: 'parker2-main.png',
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
    image: 'parker3-main.png',
    title: 'Grace May, 26',
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
    image: 'parker4-main.png',
    title: 'Rebecca Leigh, 22',
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
]);

function nextProfile() {
  profileIndex.value = profileIndex.value == profiles.value.length - 1 ? 0 : profileIndex.value + 1;
}

function prevProfile() {
  profileIndex.value = profileIndex.value == 0 ? profiles.value.length - 1 : profileIndex.value - 1;
}
</script>