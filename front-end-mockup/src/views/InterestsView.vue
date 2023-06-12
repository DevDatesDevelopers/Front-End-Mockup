<template>
<div class="flex flex-col items-center">
    <div class="flex flex-row w-10/12 items-center justify-between py-4">
        <router-link to="/gender-picker">
            <div class="flex justify-center items-center bg-primary-purple w-10 aspect-square rounded-lg">
                <Icon icon="material-symbols:arrow-back-ios-new-rounded" style="width:1.25rem; height:1.25rem;" class="text-primary" />
            </div>
        </router-link>
        <router-link to="/">Skip</router-link>
    </div>
    <h2 class="text-left font-semibold w-10/12 py-4">Your interests</h2>
    <p class="w-10/12 pb-4">Select a few of your interests and let everyone know what you're passionate about.</p>

    <div class="grid grid-flow-row grid-cols-2 gap-4 gap-x-5 [&_.selectedInterest]:bg-primary-purple [&_.selectedInterest]:border-primary-purple">
       <button v-for="button in buttons" v-bind:value="button" @click="selectButton(button)" class="m-0 flex h-fit group btn-primary px-4 py-3" :class="{ selectedInterest: button.selected }">
        <Icon :icon="button.icon" style="width:20px; height:20px" class="group-[.selectedInterest]:text-primary"/>  
        <p class="group-[.selectedInterest]:text-primary float-left ml-1">{{button.name}}</p>
      </button>
    </div>


    <button class="btn-continue mb-1" :disabled="totalSelected < 5">Finish</button>
    <p class="mb-4">{{ submitButtonCaption }}</p>
  </div>
</template>

<script setup>
import { Icon } from '@iconify/vue';
import { ref } from 'vue';

const buttons = ref([
    {
        name: "Photography",
        icon: "mdi-light:camera",
        selected: false
    },
    {
        name: "Streaming",
        icon: "mdi-light:monitor",
        selected: false
    },
    {
        name: "Cooking",
        icon: "ph:bowl-food",
        selected: false
    },
    {
        name: "Running",
        icon: "ph:person-simple-run",
        selected: false
    },
    {
        name: "Painting",
        icon: "ph:paint-brush",
        selected: false
    },
    {
        name: "Football",
        icon: "ph:soccer-ball",
        selected: false
    },
    {
        name: "Drink",
        icon: "arcticons:drinkable",
        selected: false
    },
    {
        name: "Writing",
        icon: "ph:pen",
        selected: false
    },
    {
        name: "Reading",
        icon: "ph:book",
        selected: false
    },
    {
        name: "Shopping",
        icon: "ph:shopping-cart",
        selected: false
    },
    {
        name: "Skiing",
        icon: "ph:snowflake",
        selected: false
    },
    {
        name: "Tennis",
        icon: "ph:tennis-ball",
        selected: false
    },
    {
        name: "Swimming",
        icon: "ph:swimming-pool",
        selected: false
    },
    {
        name: "Traveling",
        icon: "ph:airplane",
        selected: false
    },
    {
        name: "Music",
        icon: "ph:music-notes",
        selected: false
    },
    {
        name: "Videogames",
        icon: "ph:game-controller",
        selected: false
    },
    {
        name: "Programming",
        icon: "carbon:cics-program",
        selected: false
    },
    {
        name: "Student",
        icon: "ph:student",
        selected: false
    }
]);
let totalSelected=ref(0);
const submitButtonCaption=ref("Please select only five interests");

function selectButton(button) {
    if(totalSelected<5){
        button.selected = !button.selected;
    }
    if(totalSelected==5 && button.selected==true){
        button.selected=false;
    }

    totalSelected=Array.from(buttons.value).filter(item=>item.selected==true).length;
}
function requests() {
  try {
    fetch("http://localhost:5219/Interest/interests")
      .then(response => response.json())
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.log(error);
      });
  } catch (error) {
    console.log(error);
  }
}

requests();
</script>

