<template>
   
   <button class = "back"><ion-icon name="chevron-back"></ion-icon></button>
   
   <button class = "skip">Skip</button>

   <h1 class = "header">I am a</h1>

   
       <button class="woman" onclick="changeColor()">
           <h1 class = "textWoman">Woman</h1>
       </button>

       <button class="man" onclick="changeColor2()">
           <h1 class = "textMan">Man</h1>
       </button>


       <div class="dropdown">
           <div class="select" onclick="changeColor3()">
               <span class="selected">Choose another</span>
               <div class="caret"></div>
           </div>
           <ul class="menu">
               <li>Pedalche</li>
               <li>Nejen</li>
               <li>Smeshnik</li>
               <li class="active">Gei</li>
               <li>Pan sexual</li>
           </ul>
       </div>

       <button class = "continue">
           <h1 class = "textConti">Continue</h1>
       </button>

</template>

<script scope>
 const button = document.querySelector(".woman");
const heading = document.querySelector(".textWoman");

const button2 = document.querySelector(".man");
const heading2 = document.querySelector(".textMan");

const dropdown = document.querySelector(".dropdown");
const dropdownjr = document.querySelector(".select");
const dropText = document.querySelector(".selected");

button.addEventListener("click", changeColor, { once: true })

function changeColor() {
    if(button.style.backgroundColor === 'rgb(30, 30, 30)'){
        button.style.backgroundColor = "#B20CEC";
        heading.style.color = "black";
        
    }
    else{
        button.style.backgroundColor = 'rgb(30, 30, 30)';
        heading.style.color = "#B20CEC";
    }
}



button2.addEventListener("click", changeColor2, { once: true })

function changeColor2() {
    if(button2.style.backgroundColor === 'rgb(30, 30, 30)'){
        button2.style.backgroundColor = "#B20CEC";
        heading2.style.color = "black";
        
    }
    else{
        button2.style.backgroundColor = 'rgb(30, 30, 30)';
        heading2.style.color = "#B20CEC";
    }
}

dropdown.addEventListener("click", changeColor3, { once: true })

function changeColor3() {
    if(button2.style.backgroundColor === "rgb(30, 30, 30)" && button.style.backgroundColor === "rgb(30, 30, 30)"){
        
        dropdown.style.backgroundColor = "#B20CEC";
        dropdownjr.style.backgroundColor = "#B20CEC";
        dropText.style.color = "black";
    }
    else{

        dropdown.style.backgroundColor = "rgb(30, 30, 30)";
        dropdownjr.style.backgroundColor = "rgb(30, 30, 30)";
        dropText.style.color = "#B20CEC";
    }
       
        
    
}

var buttonn = document.querySelector(".woman");
    buttonn.addEventListener('click', () => {
        buttonn.classList.toggle("checked");
    })
    



    var buttonn2 = document.querySelector(".man");
    buttonn2.addEventListener('click', () => {
        buttonn2.classList.toggle("checked");
    })



    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(dropdown => {
    const select = dropdown.querySelector('.select');
    const caret = dropdown.querySelector('.caret');
    const menu = dropdown.querySelector('.menu');
    const options = dropdown.querySelectorAll('.menu li');
    const selected = dropdown.querySelector('.selected');


    select.addEventListener('click', () =>{
        select.classList.toggle('select-clicked');
        caret.classList.toggle('caret-rotate');
        menu.classList.toggle('menu-open');
    })

    options.forEach(option => {
        option.addEventListener('click', () => {
            selected.innerText = option.innerText;
            select.classList.remove('select-clicked');
            caret.classList.remove('caret-rotate');
            menu.classList.remove('menu-open');

            options.forEach(option => {
                option.classList.remove('active');
            })
            option.classList.add('active');
        })
    })
})
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap');





.body {
   
    background: black;
}

.back {
    width: 65px;
    height: 50px;
    background: #B20CEC;
    border: none;
    border-radius: 15px;
    font-size: 1.3em;
    margin: 40px 20px;
}

.back:active {

    background:pink;
    
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

    /* Default purple
    
    green text and button collor
    */
    background: rgb(30, 30, 30);
    /* border #E8E6EA    #1E1E1E*/
    border: 1px solid #E8E6EA;
    border-radius: 15px;
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