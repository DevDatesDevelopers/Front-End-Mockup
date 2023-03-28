<template>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css">
    <button class="button">Skip</button>
    <h1 class="title">Profile details</h1>
    <img src="../assets/images/parker1-gallery4.png" alt="" class="img">
    <div class="container">
        <i class="fa-solid fa-camera"></i>
    </div>
    <input type="text" id="fname" name="fname" placeholder="firstname"><br>
    <input type="text" id="lname" name="fname" placeholder="lastname"><br>
    <input type="text" id="lname" name="fname" class="data" placeholder="date"><br>
    <button class="confirm">Confirm</button>
</template>
<style>
.button {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 32px;
    margin-left: 400px;
    margin-bottom: 50px;
}

.title {
    font-family: Arial, Helvetica, sans-serif;
    margin-left: -80px;
    font-size: 48px;
    margin-bottom: 40px;
}

#fname {
    width: 380px;
    height: 60px;
    border-radius: 6px;
    border-color: none;
    margin-bottom: 12px;
    padding: 12px 24px;
    background-color: gray;
}

#lname {
    width: 380px;
    height: 60px;
    border-radius: 6px;
    border-color: none;
    padding: 12px 24px;
    background-color: gray;
}

.confirm {
    margin-left: 4px;
    margin-right: 80px;
    padding: 14px 160px;
    background-color: blueviolet;
    border-radius: 6px;
    color: black;
    margin-top: 20px;

}

.data {
    margin-top: 24px;
    background-color: gray;
    width: 380px;
    height: 60px;
    padding: 12px 24px;
    border-radius: 6px;
    border-color: none;

}

.img {
    margin-bottom: 24px;
    margin-left: 144px;
    border-radius: 8px;
}

.container{
    position: relative;
}
.fa-solid.fa-camera{
    position: absolute;
    left: 220px;
    bottom: 20px;
    size: 50%;
}
</style>
