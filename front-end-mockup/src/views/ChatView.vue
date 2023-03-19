<template>
<head>
   <link rel="stylesheet" href="../src/assets/css/chat_list.css">
   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css"/>
</head>
<body>  
    <div class="header" id="myHeader">
        
        <h2>Deni</h2>
        <img src='https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light' />
      </div>
      <i class="arrow left"></i>
    <div class="base-container">
      <div class="time-send">3:20</div>
        <div class="friend-text-div">
          <img src='https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light' />
          <div class="friend-text-container">
            <div class="friend-text">Hello, Miss Deni!</div>
          </div>
        </div>
        <div class="my-text-div">
          <div class="my-text-container">
            <div class="my-text">Hello how are you?</div>
          </div>
        </div>
          </div>
     <div class ="bottom-line">
        <input class ="writebox" type="text" id="writebox" name="text" placeholder="Write">
        <button class="btn1"><i class="fa-solid fa-comment"></i>
        </button>
          <button class="btn2"><i class="fa-solid fa-camera"></i>
        </button>      
      </div>
</body>

</template>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Montserrat);
* {
  margin: 0;
  padding: 0;
  font-family: "Montserrat", sans-serif;
}
.header {
  position:fixed;
  text-align: center;
  padding: 10px 16px;
  font-size: 2rem;
  background: #000000;
  color: #f1f1f1;
  top: 0px;
  width: 100%

}
.header img {
  position: fixed;
  height: 3.5rem;
  align-self: flex-end;
  left: 180px;
  top: 1px;
}
 .time-send
{
  color: #ffffff;
  height: 2rem;
  font-size: 2rem;
  align-self: center;
  bottom: 500px;
  left: 500px;
  position: absolute;
}
.bottom-line{
  position:fixed;
  display: flex;
  justify-content: center;
  gap: 10px;
  text-align:center;
  bottom: 10px;
  width: 100%
  
}
.btn1 {
  background-color: #B20CEC;
  border: none;
  color: solid #B20CEC;
  padding: 12px 16px;
  font-size: 3.4rem;
  color: #000000;
  cursor: pointer;
  border-radius: 1rem 0.5rem 0.5rem 0.5rem;
}
.btn2 {
  background-color: #B20CEC;
  border: none;
  color: solid #B20CEC;
  padding: 12px 16px;
  font-size: 3.4rem;
  color: #000000;
  cursor: pointer;
  border-radius: 1rem 0.5rem 0.5rem 0.5rem;
}


.btn1:hover {
  background-color: #590b75;
}
.btn2:hover {
  background-color: #590b75;
}
.writebox{
  flex:2;
  position:static;
  width: 60%;
  height: 90px;
  border-radius: 1rem 1rem 0.5rem 0.5rem;
  background: #4e4e4e94;
  font-size: 2.5rem;;
}
.arrow {
  position:fixed;
  text-align: left;
  top: 20px;
  left: 20px;
  border: solid #B20CEC;
  border-width: 0 5px 5px 0;
  display: inline-block;
  padding: 15px;
}
.left {
  transform: rotate(135deg);
  -webkit-transform: rotate(135deg);
}
body {
  background: #000000;
  height: 50vh;
  width: 100%;
  display: flex;
  padding-top: 47rem;
}
.base-container {
  width: 100%;
  height: 50%;
}
.friend-text-div {
  display: flex;
  margin-left: 0.5rem;
}

.friend-text-div > img {
  position: fixed;
  height: 5rem;
  align-self: flex-end;
  bottom: 260px;
}

.friend-text-container {
  position: fixed;
  width: 10rem;
  display: flex;
  flex-direction: column;
  bottom: 280px;
  left: 80px;
}

.friend-text {
  background: #262626;
  border-radius: 0.5rem;
  color: #fff;
  height: 3.5rem;
  width: 15rem;
  font-size: 1.5rem;
  padding: 0.5rem 1rem;
  margin: 0.12rem 0.5rem;
}

.my-text-div {
  display: flex;
  justify-content: flex-end;
}
.my-text-container {
  position: fixed;
  display: flex;
  align-items: flex-end;
  bottom: 160px;
  right:20px;
}


.my-text {
  background: linear-gradient(
      180deg,
      #B20CEC 0%,
      #B20CEC 51%,
      #B20CEC 92%
    )
    no-repeat center;
  background-attachment: fixed;
  color: #fff;
  border-radius: 0.5rem 0.2rem 0.2rem 0.5rem;
  font-size: 1.5rem;
  height: 5rem;
  width: 15rem;
  padding: 0.5rem 1rem;
  margin: 0.12rem 0.5rem;
}

.my-text-container > div:first-child {
  border-radius: 0.5rem 1rem 0.2rem 0.5rem;
}
.my-text-container > div:last-child {
  border-radius: 0.5rem 0.2rem 1rem 0.5rem;
}
.friend-text-container > div:first-child {
  border-radius: 1rem 0.5rem 0.2rem 0.5rem;
}
.friend-text-container > div:last-child {
  border-radius: 0.5rem 0.2rem 0.5rem 1rem;
}
</style>

