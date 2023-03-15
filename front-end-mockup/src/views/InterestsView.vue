<template>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css"/>

  <button type="submit" class="Back-Button">&lt;</button>

  <div id="information">
    <a ref="selectButton" class="Selection">Please select only five interests</a>
    <h1>Your interests</h1>
    <a class="text">Select a few of your interests and let everyone know what you're passionate about.</a>
  </div>

  <div>
    <div v-for="(button, index) in buttons" :key="index">
      <button :id="'button'+(index+1)" @click="interactsButtons('button'+(index+1))" :toggle="false" :class="{'Photography-Button': index === 0, 'Streaming-Button': index === 1,  'Cooking-Button': index === 2 , 'Running-Button': index === 3 , 'Painting-Button': index === 4, 'Football-Button': index === 5,  'Drink-Button': index === 6,  'Writing-Button': index === 7,  'Reading-Button': index === 8,  'Shopping-Button': index === 9,  'Skiing-Button': index === 10, 'Tennis-Button': index === 11, 'Swimming-Button': index === 12, 'Traveling-Button': index === 13, 'Music-Button': index === 14, 'Videogames-Button': index === 15, 'Programming-Button': index === 16, 'Student-Button': index === 17}"> <span v-if="index === 0"><i class="fa-solid fa-camera"></i> </span>  
    <span v-if="index === 1"><i class="fa-solid fa-microphone-lines"></i> </span>  
    <span v-if="index === 2"><i class="fa-solid fa-utensils"></i> </span>  
    <span v-if="index === 3"><i class="fa-solid fa-person-running"></i> </span>  
    <span v-if="index === 4"><i class="fa-solid fa-palette"></i> </span>  
    <span v-if="index === 5"><i class="fa-solid fa-futbol"></i> </span>  
    <span v-if="index === 6"><i class="fa-solid fa-martini-glass-empty"></i> </span>  
    <span v-if="index === 7"><i class="fa-solid fa-pencil"></i> </span>  
    <span v-if="index === 8"><i class="fa-solid fa-book"></i> </span>  
    <span v-if="index === 9"><i class="fa-solid fa-shopping"></i> </span>  
    <span v-if="index === 10"><i class="fa-solid fa-skiing"></i> </span>  
    <span v-if="index === 11"><i class="fa-solid fa-table-tennis-paddle-ball"></i> </span>  
    <span v-if="index === 12"><i class="fa-solid fa-person-swimming"></i> </span>  
    <span v-if="index === 13"><i class="fa-solid fa-location-dot"></i> </span>  
    <span v-if="index === 14"><i class="fa-solid fa-music"></i> </span>  
    <span v-if="index === 15"><i class="fa-solid fa-gamepad"></i> </span>  
    <span v-if="index === 16"><i class="fa-brands fa-stack-overflow"></i> </span>  
    <span v-if="index === 17"><i class="fa-solid fa-school"></i> </span>  
    {{button}}</button>
    </div>
    <button ref="submitButton" class="Continue-Button" disabled>Submit</button>
  </div>

</template>

<script>
export default {
  data() {
  backgroundColor:"#16a085"
    return {
      buttonBr: Array(18).fill(0),
      buttons: ["Photography", "Streaming", "Cooking", "Running", "Painting", "Football", "Drink", "Writing", "Reading", "Shopping", "Skiing", "Tennis", "Swimming", "Traveling", "Music", "Videogames", "Programming", "Student"]
    };
  },
  methods: {
    interactsButtons(buttonName) {
      const button = document.getElementById(buttonName);
      const index = parseInt(buttonName.replace("button", "")) - 1;
      if (button.getAttribute("toggle") == "false") {
        button.style.backgroundColor = "#B20CEC";
        button.style.color = "#1E1E1E";
        button.style.border = "1px solid #1E1E1E";
        button.style.boxShadow = "5px 10px 18px #f8008850";
        button.setAttribute("toggle", "true");
        this.buttonBr[index]++;
      } else {
        button.style.backgroundColor = null;
        button.style.color = null;
        button.style.border = null;
        button.style.boxShadow = null;
        button.setAttribute("toggle", "false");
        this.buttonBr[index]--;
      }

      const submitButton = this.$refs.submitButton;
      const selectButton = this.$refs.selectButton;
      let totalSelected = 0;
      for (let i = 0; i < this.buttonBr.length; i++) {
        totalSelected += this.buttonBr[i];
      }
      if (totalSelected == 5) {
        submitButton.disabled = false;
        submitButton.style.backgroundColor = "#B20CEC";
        submitButton.style.color = "#1E1E1E";
        selectButton.text = '';
      } else {
        submitButton.disabled = true;
        submitButton.style.backgroundColor = null;
        submitButton.style.color = null;
        selectButton.text = 'Please select only five interests';
      }
    },
  },
};
</script>


<style scoped>

div {  
  border: 21px solid black;  
}  

h1{
    position: absolute;
    top: 85px;
    left: 50px;
    color: #B20CEC;
    font-size: 30px;
    font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}

.styled-button {
  background-color: #1E1E1E; 
  color: #B20CEC;
  border: 1px solid #EAEAE6;
  border-radius: 12px;
  padding: 8px 10px;
  text-align: justify;
  text-decoration: none;
  font-size: 15px;
  width: 140px;
  height: 47px;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Verdana, sans-serif;
  cursor: pointer;
}


.text{
    position: absolute;
    top: 150px;
    left: 55px;
    color: #B20CEC;
    font-size: 16px;
    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Verdana, sans-serif;
}

.Selection{
  position: absolute;
  top: 815px;
  left: 109px;
  color: #B20CEC;
  font-size: 12px;
  font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Verdana, sans-serif;
}

  .Back-Button{
    background-color: #B20CEC; 
    color: #1E1E1E;
    border: 1px solid black;
    position: absolute;
    top: 30px;
    left: 50px;
    border-radius: 12px;
    text-align: 30px;
    text-decoration: none;
    font-size: 20px;
    width: 48px;
    height: 44px;
    cursor: pointer;
  }

  .Photography-Button{
    background: #1E1E1E; 
    color: #B20CEC;
    border: 1px solid #EAEAE6;
    position: absolute;
    top: 230px;
    left: 52px;
    border-radius: 12px;
    padding: 8px 10px;
    text-align:justify;
    text-decoration: none;
    font-size: 15px;
    width: 140px;
    height: 47px;
    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Verdana, sans-serif;
    cursor: pointer;
  }

  .Streaming-Button{
    background-color: #1E1E1E; 
    color: #B20CEC;
    border: 1px solid #EAEAE6;
    position: absolute;
    top: 285px;
    left: 52px;
    border-radius: 12px;
    padding: 8px 10px;
    text-align:justify;
    text-decoration: none;
    font-size: 15px;
    width: 140px;
    height: 47px;
    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Verdana, sans-serif;
    cursor: pointer;
  }

  .Cooking-Button{
    background-color: #1E1E1E; 
    color: #B20CEC;
    border: 1px solid #EAEAE6;
    position: absolute;
    top: 340px;
    left: 52px;
    border-radius: 12px;
    padding: 8px 10px;
    text-align:justify;
    text-decoration: none;
    font-size: 15px;
    width: 140px;
    height: 47px;
    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Verdana, sans-serif;
    cursor: pointer;
  }

  .Running-Button{
    background-color: #1E1E1E; 
    color: #B20CEC;
    border: 1px solid #EAEAE6;
    position: absolute;
    top: 395px;
    left: 52px;
    border-radius: 12px;
    padding: 8px 10px;
    text-align:justify;
    text-decoration: none;
    font-size: 15px;
    width: 140px;
    height: 47px;
    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Verdana, sans-serif;
    cursor: pointer;
  }

  .Painting-Button{
    background-color: #1E1E1E; 
    color: #B20CEC;
    border: 1px solid #EAEAE6;
    position: absolute;
    top: 450px;
    left: 52px;
    border-radius: 12px;
    padding: 8px 10px;
    text-align:justify;
    text-decoration: none;
    font-size: 15px;
    width: 140px;
    height: 47px;
    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Verdana, sans-serif;
    cursor: pointer;
  }

  .Football-Button{
    background-color: #1E1E1E; 
    color: #B20CEC;
    border: 1px solid #EAEAE6;
    position: absolute;
    top: 505px;
    left: 52px;
    border-radius: 12px;
    padding: 8px 10px;
    text-align:justify;
    text-decoration: none;
    font-size: 15px;
    width: 140px;
    height: 47px;
    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Verdana, sans-serif;
    cursor: pointer;
  }

  .Drink-Button{
    background-color: #1E1E1E; 
    color: #B20CEC;
    border: 1px solid #EAEAE6;
    position: absolute;
    top: 560px;
    left: 52px;
    border-radius: 12px;
    padding: 8px 10px;
    text-align:justify;
    text-decoration: none;
    font-size: 15px;
    width: 140px;
    height: 47px;
    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Verdana, sans-serif;
    cursor: pointer;
  }

  .Writing-Button{
    background-color: #1E1E1E; 
    color: #B20CEC;
    border: 1px solid #EAEAE6;
    position: absolute;
    top: 615px;
    left: 52px;
    border-radius: 12px;
    padding: 8px 10px;
    text-align:justify;
    text-decoration: none;
    font-size: 15px;
    width: 140px;
    height: 47px;
    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Verdana, sans-serif;
    cursor: pointer;
  }

  .Reading-Button{
    background-color: #1E1E1E; 
    color: #B20CEC;
    border: 1px solid #EAEAE6;
    position: absolute;
    top: 670px;
    left: 52px;
    border-radius: 12px;
    padding: 8px 10px;
    text-align:justify;
    text-decoration: none;
    font-size: 15px;
    width: 140px;
    height: 47px;
    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Verdana, sans-serif;
    cursor: pointer;
  }

  .Shopping-Button{
    background-color: #1E1E1E; 
    color: #B20CEC;
    border: 1px solid #EAEAE6;
    position: absolute;
    top: 230px;
    left: 210px;
    border-radius: 12px;
    padding: 8px 10px;
    text-align:justify;
    text-decoration: none;
    font-size: 15px;
    width: 140px;
    height: 47px;
    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Verdana, sans-serif;
    cursor: pointer;
  }

  .Skiing-Button{
    background-color: #1E1E1E; 
    color: #B20CEC;
    border: 1px solid #EAEAE6;
    position: absolute;
    top: 285px;
    left: 210px;
    border-radius: 12px;
    padding: 8px 10px;
    text-align:justify;
    text-decoration: none;
    font-size: 15px;
    width: 140px;
    height: 47px;
    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Verdana, sans-serif;
    cursor: pointer;
  }

  .Tennis-Button{
    background-color: #1E1E1E; 
    color: #B20CEC;
    border: 1px solid #EAEAE6;
    position: absolute;
    top: 340px;
    left: 210px;
    border-radius: 12px;
    padding: 8px 10px;
    text-align:justify;
    text-decoration: none;
    font-size: 15px;
    width: 140px;
    height: 47px;
    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Verdana, sans-serif;
    cursor: pointer;
  }

  .Swimming-Button{
    background-color: #1E1E1E; 
    color: #B20CEC;
    border: 1px solid #EAEAE6;
    position: absolute;
    top: 395px;
    left: 210px;
    border-radius: 12px;
    padding: 8px 10px;
    text-align:justify;
    text-decoration: none;
    font-size: 15px;
    width: 140px;
    height: 47px;
    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Verdana, sans-serif;
    cursor: pointer;
  }

  .Traveling-Button{
    background-color: #1E1E1E; 
    color: #B20CEC;
    border: 1px solid #EAEAE6;
    position: absolute;
    top: 450px;
    left: 210px;
    border-radius: 12px;
    padding: 8px 10px;
    text-align:justify;
    text-decoration: none;
    font-size: 15px;
    width: 140px;
    height: 47px;
    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Verdana, sans-serif;
    cursor: pointer;
  }

  .Music-Button{
    background-color: #1E1E1E; 
    color: #B20CEC;
    border: 1px solid #EAEAE6;
    position: absolute;
    top: 505px;
    left: 210px;
    border-radius: 12px;
    padding: 8px 10px;
    text-align:justify;
    text-decoration: none;
    font-size: 15px;
    width: 140px;
    height: 47px;
    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Verdana, sans-serif;
    cursor: pointer;
  }

  .Videogames-Button{
    background-color: #1E1E1E; 
    color: #B20CEC;
    border: 1px solid #EAEAE6;
    position: absolute;
    top: 560px;
    left: 210px;
    border-radius: 12px;
    padding: 8px 10px;
    text-align:justify;
    text-decoration: none;
    font-size: 15px;
    width: 140px;
    height: 47px;
    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Verdana, sans-serif;
    cursor: pointer;
  }

  .Programming-Button{
    background-color: #1E1E1E; 
    color: #B20CEC;
    border: 1px solid #EAEAE6;
    position: absolute;
    top: 615px;
    left: 210px;
    border-radius: 12px;
    padding: 8px 10px;
    text-align:justify;
    text-decoration: none;
    font-size: 15px;
    width: 140px;
    height: 47px;
    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Verdana, sans-serif;
    cursor: pointer;
  }

  .Student-Button{
    background-color: #1E1E1E; 
    color: #B20CEC;
    border: 1px solid #EAEAE6;
    position: absolute;
    top: 670px;
    left: 210px;
    border-radius: 12px;
    padding: 8px 10px;
    text-align:justify;
    text-decoration: none;
    font-size: 15px;
    width: 140px;
    height: 47px;
    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Verdana, sans-serif;
    cursor: pointer;
  }

  .Continue-Button{
    background-color: #141414; 
    color: #363434;
    border: 1px solid black;
    position: absolute;
    top: 750px;
    left: 60px;
    border-radius: 12px;
    padding: 8px 10px;
    text-align:center;
    text-decoration: none;
    font-size: 15px;
    width: 280px;
    height: 55px;
    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Verdana, sans-serif;
    cursor: pointer;
  }
</style>
