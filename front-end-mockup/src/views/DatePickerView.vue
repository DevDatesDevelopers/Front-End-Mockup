
<template>
  <div id="card" class="h-4/6 bg-zinc-900 fixed w-96 rounded-3xl ml-2 bottom-0 text-center hidden transition duration-300 ease-in-out	">
    <div id="wrapper">
        <h1 id="birthday" class="text-sm mt-5">Birthday</h1>
        <div class="icons">
            <span id="prev-icon" class="float-left ml-7 mt-9 ">
                <Icon icon="material-symbols:arrow-back-ios-new-rounded" style="width: 20px; height:20px;" />
            </span>
            <span id="current-year" class="text-3xl text-center">2023</span>
            <span id="next-icon" class="float-right mr-7 mt-9 cursor-pointer">
                <Icon icon="material-symbols:arrow-forward-ios-rounded" style="width: 20px; height:20px;" />
            </span>
        </div>
        <div class="text-center mt-4">
            <span id="current-month"  class="text-md text-center">January</span>
        </div>
    </div>
    <div class="calendar">
        <ul class="days list-none grid grid-cols-7 text-center"></ul>
    </div>
    <button @click="hide()" id="save-btn" class="my-5 btn-continue">Save</button>
  </div>
</template>


<script setup>
    //clendar
    const months = ["January","February","March","April","May","June", "July","August","September","October","November","December"];
    let year = ""
    let month = ""
    let day = ""
  
    function hide(){
        let card = document.getElementById("card")
        let classList = card.classList;
        if(classList.contains("hidden")){
            document.getElementById("card").classList.remove("hidden");
            console.log(birthDate); 
            return
        }else{
            document.getElementById("card").classList.add("hidden");
            console.log(birthDate); 
            return;
        }
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

        for(let i = 1; i <= lastDateMonth; i++){
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
                for(let i = 1; i <= lastDateMonth; i++){
                    liTag += `<li class="li" data-v-40eee2db="">${i}</li>`
                }

                currentMonth.innerText = `${months[currMonth]}` 
            
                if(currMonth < 0 || currMonth > 11){
                    date = new Date(currentYear, currMonth),
                    currentYear = date.getFullYear(),
                    currMonth = date.getMonth();
                    currentMonth.innerText = `${months[currMonth]}`
                    currenYear.innerText = `${currentYear}`
                    
                    month = currMonth;
                    year = currenYear.innerText;
                }
                else{
                    date = new Date();
                }
                daysTag.innerHTML = liTag;
                month = currMonth;
                year = currenYear.innerText;
                activateClass();
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
                var birthdate = new Date(year, parseInt(month), parseInt(day));
                birthDate.value=`${birthdate.getDate()}-${birthdate.getMonth()}-${birthdate.getFullYear()}`;
                console.log(birthDate); 
            });
        }
    }
</script>