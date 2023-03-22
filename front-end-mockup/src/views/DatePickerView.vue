
<template>
  
  <div class="text-center mt-20">
    <button @click="prevloader()" id="date" class="bottom-0 bg-zinc-900 text-primary w-72 p-3 rounded-xl text-center">
      <span class="align-middle inline-block">
        <svg aria-hidden="true" class="w-5 h-5 text-primary align-middle" fill="#B20CEC" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
      </span>
      <span class="align-middle inline-block ml-2">Choose birthday date</span>
  </button>
      <div id="card" class="h-4/6 bg-zinc-900 fixed w-96 rounded-3xl ml-2 bottom-0 text-center hide">
        <div id="wrapper">
          <h1 id="birthday" class="text-primary text-sm mt-5">Birthday</h1>
            <div class="icons">
              <span id="prev-icon" class="float-left ml-5 mt-9 ">
                <svg xmlns="http://www.w3.org/2000/svg" fill="" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#B20CEC" class="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
              </span>
            <span id="current-year" class="text-primary text-3xl text-center">2023</span>
            <span id="next-icon" class="float-right mr-5 mt-9 cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#B20CEC" class="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </span>
            </div>
              <div class="text-center mt-4">
                <span id="current-month"  class="text-primary text-md text-center">January</span>
              </div>
        </div>
              <div class="calendar">
                <ul class="days"></ul>
              </div>
              <button @click="hide()" id="save-btn" class="mt-9 text-primary w-72 p-3 rounded-xl text-center">Save</button>
    
      </div>
     
  </div>
      
</template>


<script setup>

  const months = ["January","February","March","April","May","June",
  "July","August","September","October","November","December"];

  let year = ""
  let month = ""
  let day = ""
  
function hide(){
  
    let card = document.getElementById("card")
    let classList = card.classList;

    document.getElementById("card").classList.toggle("hide");
    
}

  function prevloader(){
 
  
    const prevNextIcon = document.querySelectorAll(".icons span")
    let date = new Date(),
    currentYear = date.getFullYear(),
    currMonth = date.getMonth();
    
    const daysTag = document.querySelector(".days");
    const currentMonth = document.getElementById("current-month")
    const currenYear = document.getElementById("current-year")
    
    
    
hide();

    let lastDateMonth = new Date(currentYear, currMonth + 1, 0).getDate();
    let liTag = "";
    for(let i = 1; i <= lastDateMonth; i++)
    {
      liTag += `<li class="li" data-v-40eee2db="">${i}</li>`
    }
    
    currentMonth.innerText = `${months[currMonth]}`
    currenYear.innerText = `${currentYear}`
    
    daysTag.innerHTML = liTag;

    activateClass();

    month = currMonth;
    year = currenYear.innerHTML;
    

    prevNextIcon.forEach(icon => {


      icon.addEventListener("click", () => {
        currMonth = icon.id === "prev-icon" ? currMonth - 1 : currMonth + 1;
        let lastDateMonth = new Date(currentYear, currMonth + 1, 0).getDate();
        let liTag = "";
        for(let i = 1; i <= lastDateMonth; i++)
        {
          liTag += `<li class="li" data-v-40eee2db="">${i}</li>`
        }


      
        currentMonth.innerText = `${months[currMonth]}` 
       
        if(currMonth < 0 || currMonth > 11)
        {
        
          date = new Date(currentYear, currMonth),
          currentYear = date.getFullYear(),
          currMonth = date.getMonth();
          currentMonth.innerText = `${months[currMonth]}`
          currenYear.innerText = `${currentYear}`
         
          month = currMonth;
        year = currenYear.innerText;
        }
        else
        {
          date = new Date();
          
        }
        daysTag.innerHTML = liTag;
        month = currMonth;
        year = currenYear.innerText;
        activateClass()

        
    });
    });

 
}

    function activateClass(){
    var liList = document.getElementsByClassName("li");

      for(var i = 0; i < liList.length; i++){
        liList[i].addEventListener("click", function(){
          var current = document.getElementsByClassName("active");
            if(current.length > 0){
              current[0].className = current[0].className.replace(" active", "");
              day = current[0];
            }
        
        this.className += " active";
        day = this.innerText
        var birthdate = new Date(year, parseInt(month + 1), parseInt(day));
      
        console.log(`Birthday is on - ${birthdate.getDate()}/${birthdate.getMonth()}/${birthdate.getFullYear()}`); 
       
    })
      
  }

}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap');
#next-icon,
#prev-icon,
#text,
#current-year {
  vertical-align: middle;
  display: inline-block;
  
}
svg{
  cursor: pointer;
}
.calendar{
  margin-top:5px;
}

.calendar ul{
  display: flex;
  list-style: none;
  flex-wrap: wrap;
  text-align: center;

}



.calendar .days li{
  width: calc(100% / 7);
  cursor: pointer;
  margin-top: 25px;
}


.calendar .days li{
  z-index: 1;
  cursor: pointer;
  color: #B20CEC;
  position: relative;
  margin-top: 30px;
 
}
.days li::before{
  position: absolute;
  content: "";
  left: 50%;
  top: 50%;
  height: 40px;
  width: 40px;
  z-index: -1;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  transition: all 0.5s;
}

  #save-btn{
    
    background: #B20CEC;
    color: black;
    transition: all 0.5s;
}
  #save-btn:hover{
    background: white;
    transition: all 0.5s;
  }
.days li.active::before{
  background: #B20CEC;
  color: white;
}
.days li:not(.active):hover::before{
  background: #B20CEC;
  color: white;
  transition: all 0.5s;
}
.days li:hover{
  color: white;
}

.active{
  color: white !important;
}
#text,
#current-year{
  font-weight: 700;
  font-size: 34px;
  line-height: 41px;
  text-align: center;
  text-shadow: 0px 15px 15px rgba(233, 64, 87, 0.2);
}

#birthday{
  font-family: 'Poppins';
}

#card { 
  transition: all 1s;
 }


 
 /* (B) HIDE */
 #card.hide {
   visibility: hidden;
   opacity: 0;
   height: 0; /* optional */
 }
</style>