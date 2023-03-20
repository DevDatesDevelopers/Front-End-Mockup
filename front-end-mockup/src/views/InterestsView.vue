<template>
<div class = "container">
  <button type="submit" class="Back-Button" >&lt;</button>

    <h1 >Your interests</h1>
    <a class="text">Select a few of your interests and let everyone know what you're passionate about.</a>

    <div v-for="(button, index) in buttons" :key="index">
       <button @click="interactsButtons(index)" :toggle="false" class="Design-Button"
        :class="{ 'Selected': buttonBr[index] === 1 }">
        <Icon :icon="button.icon" class="Design-Icon" /> {{ button.name }}
      </button>
    </div>

    <button ref="submitButton" class="Continue-Button" :class="{ 'Selected': totalSelected === 5 }"
      :disabled="totalSelected === 5">Submit</button>
    <a ref="selectButton" class="Selection">{{ submitButtonCaption }}</a>
  </div>
</template>

<script>
import { Icon } from '@iconify/vue';
export default {
  components: {
  Icon
  },
  data() {
    return {
      buttonBr: Array(18).fill(0),
      buttons: [
        {
          name: "Photography",
          icon: "mdi-light:camera"
        },
        {
          name: "Streaming",
          icon: "mdi-light:monitor"
        },
        {
          name: "Cooking",
          icon: "ph:bowl-food"
        },
        {
          name: "Running",
          icon: "ph:person-simple-run"
        },
        {
          name: "Painting",
          icon: "ph:paint-brush"
        },
        {
          name: "Football",
          icon: "ph:soccer-ball"
        },
        {
          name: "Drink",
          icon: "arcticons:drinkable"
        },
        {
          name: "Writing",
          icon: "ph:pen"
        },
        {
          name: "Reading",
          icon: "ph:book"
        },
        {
          name: "Shopping",
          icon: "ph:shopping-cart"
        },
        {
          name: "Skiing",
          icon: "ph:snowflake"
        },
        {
          name: "Tennis",
          icon: "ph:tennis-ball"
        },
        {
          name: "Swimming",
          icon: "ph:swimming-pool"
        },
        {
          name: "Traveling",
          icon: "ph:airplane"
        },
        {
          name: "Music",
          icon: "ph:music-notes"
        },
        {
          name: "Videogames",
          icon: "ph:game-controller"
        },
        {
          name: "Programming",
          icon: "carbon:cics-program"
        },
        {
          name: "Student",
          icon: "ph:student"
        }
      ],
      totalSelected: 0,
      submitButtonCaption: "Please select only five interests"
    };
  },
  methods: {
    interactsButtons(index) {
      if (this.buttonBr[index] === 0) {
        this.buttonBr[index] = 1;
        this.totalSelected++;
      } else {
        this.buttonBr[index] = 0;
        this.totalSelected--;
      }
      if (this.totalSelected === 5) {
        this.submitButtonCaption = "";
      }
      else {
        this.submitButtonCaption = "Please select only five interests";
      }
    },
  },
};
</script>

<style scoped>

  .container{
    width:340px;
    background:black;
    display: flex;
    flex-direction:row;
    gap: 1rem;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0 auto;
  }

  h1{
      color: #B20CEC;
      font-size: 30px;
      font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
      width:100%;
      margin-left: 1.5rem;
  }

  .text{
      color: #B20CEC;
      font-size: 13px;
      font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Verdana, sans-serif;
      margin-left: 1.5rem;
      margin-top: -1rem;
  }

  .Selection{
    color: #B20CEC;
    font-size: 12px;
    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Verdana, sans-serif;
  }

  .Back-Button{
    background-color: #B20CEC; 
    color: #1E1E1E;
    border: 1px solid black;
    border-radius: 12px;
    font-size: 20px;
    width: 48px;
    height: 44px;
    margin-right: 15rem;
    margin-top: 2rem;
  }

  .Design-Button{
    text-align: left;
    width: 140px;
    height: 47px;
    border: 1px solid #EAEAE6;
    border-radius: 12px;
    background: #1E1E1E; 
    color: #B20CEC;
    font-size: 15px;
    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Verdana, sans-serif;
  }

  .Design-Icon{
      display: inline;
      font-size: 1.5rem; 
      padding-left: 5px;
      padding-bottom: 5px;
  }

  button.Selected{
    background-color: #B20CEC ; 
    color: #1E1E1E;
    border: 1px solid black;
    border-radius: 12px;
    box-shadow: 5px 10px 18px #f8008850;
    }

  .Continue-Button{
    background-color: #141414; 
    color: #363434;
    border: 1px solid black;
    border-radius: 12px;
    font-size: 15px;
    width: 280px;
    height: 55px;
    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Verdana, sans-serif;
  }
</style>
