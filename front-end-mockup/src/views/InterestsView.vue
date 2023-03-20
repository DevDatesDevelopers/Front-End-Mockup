<template>
<div class = "container">
  <button type="submit" class="Back-Button" >&lt;</button>

    <h1 >Your interests</h1>
    <a class="text">Select a few of your interests and let everyone know what you're passionate about.</a>

    <div v-for="(button, index) in buttons" :key="index">
      <button :id="'button'+(index+1)" @click="interactsButtons('button'+(index+1))" :toggle="false" :class="{'Design-Button Design-Button-1': index === 0, 
      'Design-Button Design-Button-2': index === 1, 'Design-Button Design-Button-3': index === 2 , 'Design-Button Design-Button-4': index === 3 , 
      'Design-Button Design-Button-5': index === 4, 'Design-Button Design-Button-6': index === 5, 'Design-Button Design-Button-7': index === 6,  
      'Design-Button Design-Button-8': index === 7, 'Design-Button Design-Button-9': index === 8, 'Design-Button Design-Button-10': index === 9,  
      'Design-Button Design-Button-11': index === 10, 'Design-Button Design-Button-12': index === 11, 'Design-Button Design-Button-13': index === 12, 
      'Design-Button Design-Button-14': index === 13, 'Design-Button Design-Button-15': index === 14, 'Design-Button Design-Button-16': index === 15,
      'Design-Button Design-Button-17': index === 16, 'Design-Button Design-Button-18': index === 17}">
       <span v-if="index === 0"> <Icon inline icon="mdi-light:camera" class = "Design-Icon"></Icon></span>  
       <span v-if="index === 1"> <Icon inline icon="mdi-light:monitor" class = "Design-Icon"></Icon></span>  
       <span v-if="index === 2"> <Icon inline icon="ph:bowl-food" class = "Design-Icon"></Icon></span>  
       <span v-if="index === 3"> <Icon inline icon="ph:person-simple-run" class = "Design-Icon"></Icon></span>  
       <span v-if="index === 4"> <Icon inline icon="ph:paint-brush" class = "Design-Icon"></Icon></span>  
       <span v-if="index === 5"> <Icon inline icon="ph:soccer-ball" class = "Design-Icon"></Icon></span>  
       <span v-if="index === 6"> <Icon inline icon="arcticons:drinkable" class = "Design-Icon"></Icon></span>  
       <span v-if="index === 7"> <Icon inline icon="ph:pen" class = "Design-Icon"></Icon></span>  
       <span v-if="index === 8"> <Icon inline icon="ph:book" class = "Design-Icon"></Icon></span>  
       <span v-if="index === 9"> <Icon inline icon="ph:shopping-cart" class = "Design-Icon"></Icon></span>  
       <span v-if="index === 10"> <Icon inline icon="ph:snowflake" class = "Design-Icon"></Icon></span>  
       <span v-if="index === 11"> <Icon inline icon="ph:tennis-ball" class = "Design-Icon"></Icon></span>  
       <span v-if="index === 12"> <Icon inline icon="ph:swimming-pool" class = "Design-Icon"></Icon></span>  
       <span v-if="index === 13"> <Icon inline icon="ph:airplane" class = "Design-Icon"></Icon></span>  
       <span v-if="index === 14"> <Icon inline icon="ph:music-notes" class = "Design-Icon"></Icon></span>  
       <span v-if="index === 15"> <Icon inline icon="ph:game-controller" class = "Design-Icon"></Icon></span>  
       <span v-if="index === 16"> <Icon inline icon="carbon:cics-program" class = "Design-Icon"></Icon></span>  
       <span v-if="index === 17"> <Icon inline icon="ph:student" class = "Design-Icon"></Icon></span>  
      
      {{button}}
    </button>
    </div>

    <button ref="submitButton" class="Continue-Button" disabled>Submit</button>
      <a ref="selectButton" class="Selection">Please select only five interests</a> 
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
      buttons: ["Photography", "Streaming", "Cooking", "Running", "Painting", 
      "Football", "Drink", "Writing", "Reading", "Shopping", "Skiing",
      "Tennis", "Swimming", "Traveling", "Music", "Videogames", "Programming", "Student"]
    };
  },
  methods: {
    interactsButtons(buttonName) {
      const button = document.getElementById(buttonName);
      const index = parseInt(buttonName.replace("button", "")) - 1;
      const toggleValue = button.getAttribute("toggle") === "true";

      button.classList.toggle("Selected");

      if (button.classList.contains("Selected")) {
        this.buttonBr[index]++;
      } else {
        this.buttonBr[index]--;
      }

      const submitButton = this.$refs.submitButton;
      const selectButton = this.$refs.selectButton;
      let totalSelected = 0;

      for (let i = 0; i < this.buttonBr.length; i++) {
        totalSelected += this.buttonBr[i];
      }
      if (totalSelected === 5) {
        submitButton.disabled = false;
        submitButton.classList.add("Selected");
        selectButton.text = '';
      } else {
        submitButton.disabled = true;
        submitButton.classList.remove("Selected");
        selectButton.text = 'Please select only five interests';
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
