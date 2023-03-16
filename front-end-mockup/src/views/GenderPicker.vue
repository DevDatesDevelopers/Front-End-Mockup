<template>
  <div>
    <button class="back">
      <div class="arrow">
      
      </div>
    </button>
    <button class="skip">Skip</button>
    <h1 class="header">I am a</h1>
    <button class="woman" @click="changeColor" :class="{ checked: womanChecked }">
      <h1 :class="{textWoman: true}">Woman</h1>
    </button>
    <button class="man" @click="changeColor2" :class="{ checked: manChecked }">
      <h1 :class="{textMan: true}">Man</h1>
    </button>
    <div class="dropdown" @click="changeColor3" :class="{ checked: dropdownChecked }">
      <div class="select" :class="{ 'select-clicked': dropdownClicked }">
        <span class="selected">{{ selected }}</span>
        <div class="caret" :class="{ 'caret-rotate': dropdownClicked }"></div>
      </div>
      <ul class="menu" :class="{ 'menu-open': dropdownClicked }">
        <li v-for="(option, index) in options" :key="index" :class="{ active: option.active }" @click="selectOption(option)">
          {{ option.name }}
        </li>
      </ul>
    </div>
    <button class="continue" :disabled="continueDisabled">
      <h1 class="textConti">Continue</h1>
    </button>
  </div>
</template>

<script>

export default {
  data() {
    return {
      womanChecked: false,
      manChecked: false,
      dropdownClicked: false,
      dropdownChecked:false,
      options: [
        { name: "Pedalche", active: false },
        { name: "Nejen", active: false },
        { name: "Smeshnik", active: false },
        { name: "Gei", active: true },
        { name: "Pan sexual", active: false }
      ],
      selected: "Choose another"
    };
  },
  computed: {
    continueDisabled() {
      return !this.womanChecked && !this.manChecked && this.selected === "Choose another";
    }
  },
  methods: {
    changeColor() {
      this.womanChecked = true;
      this.manChecked = false;
      this.dropdownChecked = false;
    },
    changeColor2() {
      this.manChecked = true;
      this.womanChecked = false;
      this.dropdownChecked = false;
    },
    changeColor3() {
      this.manChecked = false;
      this.womanChecked = false;
      this.dropdownChecked = true;
      this.dropdownClicked = !this.dropdownClicked;

      
    },
    selectOption(option) {
      this.selected = option.name;
      this.options.forEach(option => {
        option.active = false;
      });
      option.active = true;
    }
  }
};

</script>

<style scoped>

    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap');






.back {
    width: 65px;
    height: 50px;
    background: #B20CEC;
    border: none;
    border-radius: 15px;
    font-size: 1.3em;
    margin: 30px 20px;
    
}
.arrow{
    position: absolute;
    height: 15px;
    width: 15px;
    top: 73px;
    left: 46px;
    border-top: 3px solid black;
    border-left: 3px solid black;
    transform: rotate(-50deg);
}

.back:active {

    background:pink;
    
}

.continue:disabled {
  background-color: #a6a6a6;
  color: #808080;
}
.skip {
    width: 65px;
    height: 50px;
    border: none;
    color: #B20CEC;
    background: transparent;
    font-size: 1.3em;
    position: absolute;
    top: 0;
    right: 0;

    margin: 45px 20px;
    
    
}

.header {
    /* header */

position: absolute;
width: 295px;
height: 51px;
left: 40px;
top: 128px;



/* I am a */

position: absolute;
width: 295px;
height: 51px;
left: 40px;
top: 128px;

/* H1 / 34 Bold */
font-family: 'Poppins', sans-serif;
font-style: normal;
font-weight: 700;
font-size: 34px;
line-height: 150%;
/* identical to box height, or 51px */

/* Default purple */
color: #B20CEC;


}


.woman {


    /* container */

box-sizing: border-box;


position: absolute;
left: 10.67%;
right: 10.67%;
top: 33.25%;
bottom: 59.61%;

/* default black

background color
*/
background: #1E1E1E;
/* border #E8E6EA    #1E1E1E*/
border: 1px solid #E8E6EA;
border-radius: 15px;


}
.woman.checked{
  background: #B20CEC;
  
}
.checked .textWoman {
  color:#1E1E1E; /* change the color to whatever you like */
}


.woman.checked:after {
  
    content: "✔️";
    position: absolute;
    left: 100%;
    top: 20%;
    margin-left: 10px;
}

.textWoman {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 1em;
    margin-left: 10px;

    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 1.2em;
    line-height: 150%;
    /* identical to box height, or 24px */
    
    /* Default purple */
    color: #B20CEC;
}


.man {


    /* container */
 
 position: absolute;
 left: 10.67%;
 right: 10.67%;
 top: 41.63%;
 bottom: 51.23%;
 
 /* Default purple
 
 green text and button collor
 */
 background: rgb(30, 30, 30);
 /* border #E8E6EA    #1E1E1E*/
 border: 1px solid #E8E6EA;
 border-radius: 15px;
 
 
 
 }

 .man.checked{
  background: #B20CEC;
  
}
.checked .textMan {
  color:#1E1E1E; /* change the color to whatever you like */
}
 
 .man.checked:after {
    content: "✔️";
    position: absolute;
    left: 100%;
    top: 20%;
    margin-left: 10px;
}

 .textMan {
    /* Man */
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 1em;
    margin-left: 10px;
 
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 1.2em;
    line-height: 150%;
    /* identical to box height, or 24px */
    
    /* Default purple */
    color: #B20CEC;
 
 
 }



.dropdown {
    box-sizing: border-box;

    position: absolute;
    left: 10.67%;
    right: 10.67%;
    top: 50%;
    bottom: 42.86%;

    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 1em;
    /* Default purple
    
    green text and button collor
    */
    background: rgb(30, 30, 30);
    /* border #E8E6EA    #1E1E1E*/
    border: 1px solid #E8E6EA;
    border-radius: 15px;
}

.dropdown.checked{
  background: #B20CEC;
}
.checked .select{
  color:#1E1E1E;
}

.dropdown.checked:after {
  
  content: "✔️";
  position: absolute;
  left: 100%;
  top: 20%;
  margin-left: 10px;
}

.select {
    

    background:  transparent;
    color: #B20CEC;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 1.5em;
    padding: 1.5em;
    transition: 0.3s;
  
    
    


   font-family: 'Poppins', sans-serif;
   font-weight: 400;
   font-size: 1.1em;
   line-height: 20%;
}



.caret {
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 6px solid #fff;
    transition: 0.3s;

    position: absolute;
    right: 30px; 
    top: 50%;
    transform: translateY(-50%);
}

.caret-rotate {
    transform: rotate(180deg);
}

.menu {
    list-style: none;
    padding: 0.2em 0.5em;
    background: #323741;
    border: 1px #363a43 solid;
    box-shadow: 0 0.5em 1em rgba(0, 0, 0, 0.2);
    border-radius: 0.5em;
    color: #9fa5b5;
    position: absolute;
    top: 3em;
    left: 50%;
    width: 100%;
    transform: translateX(-50%);
    opacity: 0;
    display: none;
    transition: 0.2s;
    z-index: 1;

    
}
.menu li {
    font-family: 'Poppins', sans-serif;
    padding: 0.7em 0.5em;
    margin: 0.3em 0;
    border-radius: 0.5em;

}

.menu-open {
    display: block;
    opacity: 1;
}

.continue {
    /* container */

/*position: absolute;
width: 295px;
height: 56px;
left: 40px;
top: 708px;*/

position: fixed;
bottom: 10%;
left: 50%;
width: 295px;
height: 56px;
transform: translateX(-50%);

/* Default purple

green text and button collor
*/
background: #B20CEC;
border-radius: 15px;

}

.textConti {
    /* Continue */

    
 
    font-family: 'Poppins', sans-serif;
    font-weight: 900;
    font-size: 1.3em;
    line-height: 150%;
    /* identical to box height, or 24px */
    
    /* Default purple */
    color: rgb(30, 30, 30);


}


</style>