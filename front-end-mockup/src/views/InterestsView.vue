<template>
<div>
    <button type="submit" class="Back-Button">&lt;</button>

<div id = "information">
    <a class ="Selection">Please select only five interests</a>
    <h1>Your interests</h1>
    <a class="text">Select a few of your interests and let everyone know what you're passionate about.</a>
</div>

<div id = "interacts">
    <button type="submit" toggle = "false" class="Photography-Button" onclick="interactsButtons(this)"><i class="fa-solid fa-camera"></i> Photography</button>
    <button type="submit" toggle = "false" class="Streaming-Button" onclick="interactsButtons(this)"><i class="fa-solid fa-microphone-lines"></i> Streaming</button>
    <button type="submit" toggle = "false" class="Cooking-Button" onclick="interactsButtons(this)"><i class="fa-solid fa-utensils"></i> Cooking</button>
    <button type="submit" toggle = "false" class="Running-Button" onclick="interactsButtons(this)"><i class="fa-solid fa-person-running"></i> Running</button>
    <button type="submit" toggle = "false" class="Painting-Button" onclick="interactsButtons(this)"><i class="fa-solid fa-palette"></i> Painting</button>
    <button type="submit" toggle = "false" class="Football-Button" onclick="interactsButtons(this)"><i class="fa-regular fa-futbol"></i> Football</button>
    <button type="submit" toggle = "false" class="Drink-Button" onclick="interactsButtons(this)"><i class="fa-solid fa-martini-glass-empty"></i> Drink</button>
    <button type="submit" toggle = "false" class="Writing-Button" onclick="interactsButtons(this)"><i class="fa-solid fa-pencil"></i> Writing</button>
    <button type="submit" toggle = "false" class="Reading-Button" onclick="interactsButtons(this)"><i class="fa-solid fa-book"></i> Reading</button>

    <button type="submit" toggle = "false" class="Shopping-Button" onclick="interactsButtons(this)"><i class="fa-solid fa-bag-shopping"></i> Shopping</button>
    <button type="submit" toggle = "false" class="Skiing-Button" onclick="interactsButtons(this)"><i class="fa-solid fa-person-skiing"></i> Skiing</button>
    <button type="submit" toggle = "false" class="Tennis-Button" onclick="interactsButtons(this)"><i class="fa-solid fa-table-tennis-paddle-ball"></i> Tennis</button>
    <button type="submit" toggle = "false" class="Swimming-Button" onclick="interactsButtons(this)"><i class="fa-solid fa-person-swimming"></i> Swimming</button>
    <button type="submit" toggle = "false" class="Traveling-Button" onclick="interactsButtons(this)"><i class="fa-solid fa-location-dot"></i> Traveling</button>
    <button type="submit" toggle = "false" class="Music-Button" onclick="interactsButtons(this)"><i class="fa-solid fa-music"></i> Music</button>
    <button type="submit" toggle = "false" class="Videogames-Button" onclick="interactsButtons(this)"><i class="fa-solid fa-gamepad"></i> Videogames</button>
    <button type="submit" toggle = "false" class="Programming-Button" onclick="interactsButtons(this)"><i class="fa-brands fa-stack-overflow"></i> Programming</button>
    <button type="submit" toggle = "false" class="Student-Button" onclick="interactsButtons(this)"><i class="fa-solid fa-school"></i> Student</button>
</div>

    <button type="submit" class="Continue-Button">Continue</button>
    
</div>
</template>

<script>
const submitButton = document.querySelector(".Continue-Button")
const selectionText = document.querySelector(".Selection")
br = 0;

submitButton.disabled = true;
    
function interactsButtons(button){

    if (button.getAttribute("toggle") == "false"){
        button.style.backgroundColor = '#B20CEC';
        button.style.color = '#1E1E1E';
        button.style.border = '1px solid #1E1E1E';
        button.style.boxShadow = "5px 10px 18px #f8008850";
        button.setAttribute("toggle", "true");
        br++;
    } else{
        button.style.backgroundColor = null;
        button.style.color = null;
        button.style.border = null;
        button.style.boxShadow = null;
        button.setAttribute("toggle", "false");
        br--;
    }

    if (br < 5 || br > 5){
        submitButton.disabled = true;
        submitButton.style.backgroundColor = null;
        submitButton.style.color = null;
        selectionText.style.color = '#B20CEC';
    }
    else{
        submitButton.disabled = false;
        submitButton.style.backgroundColor = '#B20CEC';
        submitButton.style.color = '#1E1E1E';
        selectionText.style.color = '#131010';
    }
}
</script>

<style scoped>
h1{
    position: absolute;
    top: 85px;
    left: 50px;
    color: #B20CEC;
    font-size: 30px;
    font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
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
    padding: 8px 10px;
    text-align: center;
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
