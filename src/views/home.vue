<script setup>
import { ref } from 'vue'
const eventImg = "/public/homePageEventGraphics/kickoff-party-graphic.png"
const professorImg = "/public/David-North-2.webp"
const newsImg = "/public/newsImages/aiRatBrain.jpg"
const logo = "/public/BITClubLogoTransparent.png"




const promoImg = "/public/LIandLeftwhich.jpg"
defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
<p class = "image-container">
    <img id = "bitclublogo" :src = logo>
  </p>

<div class = "row-container">

<div class = "column-container">
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
    <p class = "image-container">
        <img id = "eventImg" :src = eventImg>
    </p>
    
      <button class = "rubik-font center-content"> 
        Register
      </button>

    
</div>


<div class = "column-container">
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
