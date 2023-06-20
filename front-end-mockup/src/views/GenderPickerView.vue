<template>
  <div class="flex flex-col items-center">
    <div class="flex flex-row w-10/12 items-center justify-between py-4">
      <div class="flex justify-center items-center bg-primary-purple w-10 aspect-square rounded-lg">
        <Icon icon="material-symbols:arrow-back-ios-new-rounded" style="width:1.25rem; height:1.25rem;" class="text-primary" />
      </div>
      <router-link to="/interests">Skip</router-link>
    </div>
    <h2 class="text-left font-semibold w-10/12 py-4">I am a</h2>

    <div class="pt-4 flex flex-col justify-between w-10/12 pc:max-h-[50vh] pc:overflow-y-scroll scrollbar-hide">
      <div class="flex flex-col justify-center [&_.selected]:bg-primary-purple [&_.selected]:border-primary-purple">
        <button :id="item.id" v-for="item in options" v-bind:value="item" v-bind:class="selected" class="group btn-primary" :class="{selected: item.active }" @click="selectItem(item)">
          <h5 class="group-[.selected]:text-primary float-left m-0">{{item.name}}</h5>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="3 3 18 18" class="hidden float-right text-primary group-[.selected]:block"><path fill="currentColor" d="M9 16.17L5.53 12.7a.996.996 0 1 0-1.41 1.41l4.18 4.18c.39.39 1.02.39 1.41 0L20.29 7.71a.996.996 0 1 0-1.41-1.41L9 16.17z"/></svg>
        </button>
      </div>
       
  
      <!-- <select class="bg-primary-black focus:bg-primary-purple rounded-xl py-4 px-6 mb-6 border border-white" id="dropdown">
        <ul class="menu" :class="{ 'menu-open': dropdownClicked }">
          <option v-for="(option, index) in options" :key="index" :class="{ active: option.active }" @click="selectOption(option)">
            {{ option.name }}
          </option>
        </ul>
      </select> -->
    </div>

    <button class="btn-continue" @click="routing()" :disabled="selected==''">Continue</button>
      
  </div>
</template>

<script setup>
import { Icon } from '@iconify/vue';
import { ref } from 'vue';
import { useUserStore } from '/userStore';
import  router from '../router';

let options = ref([
    { name: "Man", active: false, id: "man-select" },
    { name: "Woman", active: false, id: "woman-select" },
    { name: "Other", active: false, id: "other-select" },
]);

const moreOptions = ref([
    { name: "Man", active: false, id: "man-select" },
    { name: "Woman", active: false, id: "woman-select" },
    { name: "Gay", active: false, id: "gay-select" },
    { name: "Bi", active: false, id: "bi-select" },
    { name: "Lesbos", active: false, id: "lesbos-select" },
    { name: "Pederuga", active: false, id: "pederuga-select" },
    { name: "Lainar", active: false, id: "lainar-select" },
    { name: "Agusta A129 Mangusta", active: false, id: "agusta-select" },
]);

let selected="";

function selectItem(item){
  Array.from(options.value).map(element => {
    element.active=false;
  });
  item.active=true;

  if(item.id=="other-select"){
    options=moreOptions;
    if(selected!=""){
      Array.from(options.value).find(element => element.id==selected).active=true;
    }
  }else{
    selected=item.id;
  }
}
function routing(){
    const store = useUserStore();
    store.selected = selected;
    console.log(store.selected);
    router.push('/sexual');
}
</script>