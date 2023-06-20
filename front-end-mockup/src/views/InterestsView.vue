<template>
  <div class="flex flex-col items-center">
    <div class="flex flex-row w-10/12 items-center justify-between py-4">
      <router-link to="/gender-picker">
        <div class="flex justify-center items-center bg-primary-purple w-10 aspect-square rounded-lg">
          <Icon icon="material-symbols:arrow-back-ios-new-rounded" style="width:1.25rem; height:1.25rem;"
            class="text-primary" />
        </div>
      </router-link>
      <router-link to="/">Skip</router-link>
    </div>
    <h2 class="text-left font-semibold w-10/12 py-4">Your interests</h2>
    <p class="w-10/12 pb-4">Select a few of your interests and let everyone know what you're passionate about.</p>

    <div
      class="grid grid-flow-row grid-cols-2 gap-4 gap-x-5 [&_.selectedInterest]:bg-primary-purple [&_.selectedInterest]:border-primary-purple">
      <button v-for="button in buttons" v-bind:value="button" @click="selectButton(button)"
        class="m-0 flex h-fit group btn-primary px-4 py-3" :class="{ selectedInterest: button.selected }">
        <Icon :icon="button.icon" style="width:20px; height:20px" class="group-[.selectedInterest]:text-primary" />
        <p class="group-[.selectedInterest]:text-primary float-left ml-1">{{ button.name }}</p>
      </button>
    </div>


    <button class="btn-continue mb-1" @click="routing()" :disabled="totalSelected < 2">Finish</button>
    <p class="mb-4">{{ submitButtonCaption }}</p>
  </div>
</template>

<script setup>
import { Icon } from '@iconify/vue';
import { ref } from 'vue';
import { useUserStore } from '/userStore';
import  router from '../router';

let buttons = ref([


]);
let totalSelected = ref(0);
let selectedInterests = ref([]);
const submitButtonCaption = ref("Please select only five interests");

function selectButton(button) {
  if (totalSelected < 2) {
    button.selected = !button.selected;
    if (button.selected) {
      selectedInterests.value.push(button.name);
    } else {
      selectedInterests.value = selectedInterests.value.filter((item) => item !== button.name);
    }
  } else if (totalSelected === 2 && button.selected === true) {
    button.selected = false;
    selectedInterests.value = selectedInterests.value.filter((item) => item !== button.name);
  }

  totalSelected = Array.from(buttons.value).filter((item) => item.selected == true).length;
}
function requests() {
  try {
    fetch("http://localhost:5219/Interest/interests")
      .then(response => response.json())
      .then(data => {
        console.log(data);
        data.forEach(element => {
          // console.log(element.displayName)
          buttons.value.push({ name: element.displayName, icon: "", selected: false })
        });
      })
      .catch(error => {
        // console.log(error);
      });
  } catch (error) {
    //console.log(error);
  }

}
function routing(){
    const store = useUserStore();
    store.interests = selectedInterests;
    console.log(store.interests);
    console.log(store.user.uid);
    let user = {};
    user.id = store.user.uid;
    user.firstName  =store.firstName;
    user.sexualInterest = store.seaxualInterest;
    user.lastName = store.lastName;
   // user.birthdate = store.birthDate;
    user.interests = store.interests;
    user.gender = store.selected;
    
create(user);
    
    router.push('/profile');
}

function create(user){
  fetch('http://localhost:5219/User/addUser/user', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  })
    .then(response => {
      if (response.ok) {
        console.log('User created successfully!');
        // Additional logic here if needed
      } else {
        console.error('Error creating user.');
        // Additional error handling logic here if needed
      }
    })
    .catch(error => {
      console.error('Request failed:', error);
      // Additional error handling logic here if needed
    });

}
requests();
</script>

