<script setup>
import { onMounted, ref } from 'vue'
const eventImg = "/public/homePageEventGraphics/first-meeting-1.png"
const eventImg3 = "/public/homePageEventGraphics/first-meeting-3.png"
const eventImg2 = "/public/homePageEventGraphics/first-meeting-2.png"

const professorImg = "/public/David-North-2.webp"
const newsImg = "/public/newsImages/aiRatBrain.jpg"
const logo = "/public/BITClubLogoTransparent.png"




const promoImg = "/public/LIandLeftwhich.jpg"
defineProps({
  msg: String,
})

const count = ref(0)
function scrollIntoViewCall(targetElement){
   
   var target = document.getElementById(targetElement);
   console.log(target)
   target.scrollIntoView({
       behavior: "smooth",
       block: "start",
       inline: "nearest"
   })
}


</script>

<template>
<p class = "image-container">
    <img id = "bitclublogo" :src = logo>
  </p>

<div class = "row-container">

<div id  = "rightDiv" class = "column-container">
  <ul class = "left-slanted-light-grey-banner"> 
    <h1> 
      News:
    </h1>
  </ul>

  <div id = "newsDiv" class = "image-paragraph-container">
      <p id = "newsImgContainer" class = "image-container">
        <img id = "newsImg" :src = newsImg>
    
      </p>
    <p id = "newsDescription" class = "rubik-font description-box">
        Google trains new AI model on rat brains,
        our over lords will replace are primitive human minds in next
        5 years...
    </p>
  </div>
</div>

<div id = "middleDiv" class ="column-container">
    <h1 id ="nextEventHeader" class = "green-header orbitron-font center"> 
      Next Event
    </h1>

    <section class = "carousel-container">
        <div class = "slider-wrapper">
            <div class = "slider">
              <img id = 'event-img-1' :src = "eventImg">
              <img id = 'event-img-2' :src = "eventImg2">
              <img id = 'event-img-3' :src = "eventImg3">
            </div>
            <div class ="slider-nav">
              <a @click = "scrollIntoViewCall('event-img-1')"></a>
              <a @click = "scrollIntoViewCall('event-img-2')"></a>
              <a @click = "scrollIntoViewCall('event-img-3')"></a>
            </div>
        </div>
    </section>
    
    <div id ="register-button">
      <button id = "button"class = "rubik-font"> 
        Register
      </button>
    </div>
  

    
  </div>


<div id = "rightDiv" class = "column-container">
  <ul class = "right-slanted-light-grey-banner">
    <h1>
      Quote of the Day:
    </h1>
  </ul>

  <div id = "quoteDiv" class = "image-paragraph-container">
    <p id = "quoteImgContainer" class ="image-container">
      <img id ="quoteImg" :src = professorImg>
    </p>
    <p id = "quoteDescription"class = "rubik-font description-box">
        "I'm gonna replace you guys with students that actually care." - North
    </p>
  </div>



</div>


</div>










=




</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
