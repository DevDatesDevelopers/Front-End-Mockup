<template>
    <div class="message-page-container flex flex-col items-center">
      <h2 class="text-left font-semibold w-11/12 py-4">Messages</h2>

      <div id="search-box" class="w-11/12 flex flex-col items-center justify-center mb-4">          
        <input class="w-full bg-[#1E1E1E] border rounded-lg leading-8 px-6 py-2 pl-11" type="text" v-model="input" placeholder="Search" />
        <span class="absolute self-start ml-4">
          <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.833374 8.74998C0.833374 4.37774 4.3778 0.833313 8.75004 0.833313C13.1223 0.833313 16.6667 4.37774 16.6667 8.74998C16.6667 10.6359 16.0072 12.3679 14.9063 13.7277L17.9673 16.7887C18.2927 17.1141 18.2927 17.6418 17.9673 17.9672C17.6418 18.2926 17.1142 18.2926 16.7887 17.9672L13.7278 14.9062C12.3679 16.0072 10.636 16.6666 8.75004 16.6666C4.3778 16.6666 0.833374 13.1222 0.833374 8.74998ZM8.75004 2.49998C5.29828 2.49998 2.50004 5.29822 2.50004 8.74998C2.50004 12.2017 5.29828 15 8.75004 15C12.2018 15 15 12.2017 15 8.74998C15 5.29822 12.2018 2.49998 8.75004 2.49998ZM5.80376 5.38699C6.5569 4.63391 7.5997 4.16665 8.75004 4.16665C9.90038 4.16665 10.9432 4.63391 11.6963 5.38702C12.0217 5.71245 12.0217 6.24009 11.6963 6.56553C11.3709 6.89096 10.8432 6.89096 10.5178 6.56553C10.0645 6.11221 9.44062 5.83331 8.75004 5.83331C8.05947 5.83331 7.4356 6.11221 6.98223 6.56555C6.65679 6.89097 6.12915 6.89095 5.80372 6.56551C5.4783 6.24006 5.47832 5.71242 5.80376 5.38699Z" fill="#B20CEC"/>
          </svg>
        </span>  
      </div>

        <div id="activity-slider" class="w-full ml-[8.5%] py-4">
            <h3 class="pb-4">Activities</h3>
            <div id="slider-containter" class="flex flex-row overflow-x-auto scrollbar-hide">
              <div class="message-preview flex-none pr-6" v-for="(profile, index) in profiles" :key="index">
                <img :src="require(`@/assets/images/${profile.image}`)" class="aspect-square w-[4.6rem] self-center rounded-full">
                <p class="text-center">{{profile.name.split(' ')[0]}}</p>
              </div>
            </div>
        </div>

        <div class="messages-list w-11/12">
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