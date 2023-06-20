
<template>
    <div class="flex flex-col items-center">
        <div class="flex flex-row w-10/12 items-center justify-between py-4">
            <div class="flex justify-center items-center bg-primary-purple w-10 aspect-square rounded-lg">
                <Icon icon="material-symbols:arrow-back-ios-new-rounded" style="width:1.25rem; height:1.25rem;"
                    class="text-primary" />
            </div>
            <router-link to="/interests">Skip</router-link>
        </div>
        <h2 class="w-10/12 text-left font-semibold pt-4 pb-8">Profile details</h2>
        <form class="flex flex-col w-10/12 items-center" lazy-validation>
            <input @change="displayProfilePic(this)" id="profPicInput" type="file" ref="profilePic" name="picture"
                accept="image/gif, image/jpeg, image/png" class="hidden" />
            <input v-model="birthDate" type="date" id="birthDateInput" class="hidden" />
            <div id="profileImageContainter" class="w-24 aspect-square bg-content rounded-xl mb-8">
                <lable for="picture" class="w-fit cursor-pointer absolute mt-16 ml-16" @click="addImage()">
                    <span class="block w-fit bg-primary-purple text-white p-2 rounded-full border-[3px]">
                        <Icon icon="jam:camera-f" style="width: 25px; height: 25px;" class="" />
                    </span>
                </lable>
            </div>

            <input v-model="firstName" placeholder="First name" class="w-full btn-primary border-none" />
            <input v-model="lastName" placeholder="Last name" class="w-full btn-primary border-none" />

            <div @click="prevloader()" id="date" class="bg-primary-black w-full btn-primary border-none flex flex-row">
                <Icon icon="material-symbols:calendar-today-rounded" style="width: 22px; height:22px;" />
                <input v-model="birthDate" class="font-semibold pl-4 bg-primary-black" disabled />
            </div>

            <button type="submit" @click="routing()" class="btn-continue w-full">Continue</button>
        </form>


        <!-- calendar -->
        <div id="card"
            class="h-4/6 bg-zinc-900 fixed w-96 rounded-3xl ml-2 bottom-0 text-center hidden transition duration-300 ease-in-out	">
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
                    <span id="current-month" class="text-md text-center">January</span>
                </div>
            </div>
            <div class="calendar">
                <ul class="days list-none grid grid-cols-7 text-center"></ul>
            </div>
            <button type="button" @click="hide()" class="my-5 btn-continue">Save</button>

        </div>

    </div>
</template>

<script setup>
import { Icon } from '@iconify/vue';
import { ref } from 'vue';
import { useUserStore } from '/userStore';
import  router from '../router';

const profilePic = ref(null);
const firstName = ref('');
const lastName = ref('');
let birthDate = ref('Choose birthday date');

function addImage() {
    document.getElementById("profPicInput").click();
}

function displayProfilePic(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            document.getElementById('profileImageContainter').backgroundImage = url(e.target.result);
            console.log(reader.result);
        };

        console.log(reader.readAsDataURL(input.files[0]));
    }
}


//clendar
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
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

function prevloader() {
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

    for (let i = 1; i <= lastDateMonth; i++) {
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
            for (let i = 1; i <= lastDateMonth; i++) {
                liTag += `<li class="li" data-v-40eee2db="">${i}</li>`
            }

            currentMonth.innerText = `${months[currMonth]}`

            if (currMonth < 0 || currMonth > 11) {
                date = new Date(currentYear, currMonth),
                    currentYear = date.getFullYear(),
                    currMonth = date.getMonth();
                currentMonth.innerText = `${months[currMonth]}`
                currenYear.innerText = `${currentYear}`

                month = currMonth;
                year = currenYear.innerText;
            }
            else {
                date = new Date();
            }
            daysTag.innerHTML = liTag;
            month = currMonth;
            year = currenYear.innerText;
            activateClass();
        });
    });
}

function activateClass() {
    var liList = document.getElementsByClassName("li");
    for (var i = 0; i < liList.length; i++) {
        liList[i].addEventListener("click", function () {
            var current = document.getElementsByClassName("active");
            if (current.length > 0) {
                current[0].className = current[0].className.replace(" active", "");
                day = current[0];
            }

            this.className += " active";
            day = this.innerText
            var birthdate = new Date(year, parseInt(month), parseInt(day));
            birthDate.value = `${birthdate.getDate()}-${birthdate.getMonth()}-${birthdate.getFullYear()}`;
            console.log(birthDate);
        });
    }
}
function routing(){
    const store = useUserStore();
    store.firstName = this.firstName;
    store.lastName = this.lastName;
    store.birthDate = this.birthDate;
    console.log(store.firstName);
    router.push('/gender-picker');
}
</script>
    
