<template>
    <div class="message-page-container flex flex-col items-center">
      <h2 class="text-left font-semibold w-11/12 py-4">Messages</h2>

      <div id="search-box" class="w-11/12 flex flex-col items-center">
        <input class="w-10/12 bg-[#1E1E1E] border rounded-lg leading-8 px-6 py-1 mb-4" type="text" v-model="input" placeholder="Search" />
      </div>

        <div id="activity-slider" class="w-10/12 py-4">
            <h3 class="pb-4">Activities</h3>
            <div id="slider-containter" class="flex flex-row overflow-x-auto scrollbar-hide">
              <div class="message-preview flex-none pr-6" v-for="(profile, index) in profiles" :key="index">
                <img :src="require(`@/assets/images/${profile.image}`)" class="aspect-square w-[5rem] self-center rounded-full">
                <p class="text-center">{{profile.name.split(' ')[0]}}</p>
              </div>
            </div>
        </div>

        <div class="messages-list w-10/12">
            <h3 class="pb-4">Messages</h3>
            <div class="message-preview flex mb-4 flex-row justify-center" v-for="chat in filteredList()" :key="chat">
                <img :src="require(`@/assets/images/${chat.image}`)" class="aspect-square h-[4rem] rounded-full">
                <div class="grid grid-rows-2 grid-flow-col pb-3 border-b border-primary-border w-full ml-4 justify-between">
                  <h4>{{chat.name}}</h4>
                  <p>{{chat.lastMessage}}</p>
                  <p>{{chat.timeLastSent}}</p>
                  <p v-if="chat.unreadMessages>0" class="w-6 bg-secondary-purple font-bold rounded-full aspect-square text-center justify-self-end pt-[2px]" >{{chat.unreadMessages}}</p>
                </div>
            </div>
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
    name: 'Jessica Parker',
    lastMessage: 'Imam glisti',
    read: false,
    unreadMessages: 2,
    timeLastSent: "20min", 
  },
  {
    id: 2,
    image: 'parker2-main.png',
    name: 'Cindy Richards',
    lastMessage: 'Suck me cock',
    read: true,
    unreadMessages: 0,
    timeLastSent: "11min",
  },
  {
    id: 3,
    image: 'parker3-main.png',
    name: 'Grace May',
    lastMessage: 'Surbi me guza',
    read: true,
    unreadMessages: 0,
    timeLastSent: "12min",
  },
  {
    id: 4,
    image: 'parker4-main.png',
    name: 'Rebecca Leigh',
    lastMessage: 'Suck me cock',
    read: true,
    unreadMessages: 0,
    timeLastSent: "21min",
  },
  {
    id: 5,
    image: 'parker4-main.png',
    name: 'Ceca Cacheva',
    lastMessage: 'Suck me cock',
    read: true,
    unreadMessages: 0,
    timeLastSent: "21m",
  },
]);

let input = ref("");
const chats = new Array(profiles);
console.log(chats[0].value);
function filteredList() {
  return chats[0].value.filter((chat) =>
    chat.name.toLowerCase().startsWith(input.value.toLowerCase())
  );
}
</script>