<script setup>
import { ref } from 'vue'
const professorImg = "/public/David-North-2.webp"
const newsImg = "/public/newsImages/aiRatBrain.jpg"
const eventImg = "/public/lanPartyBanner.png"
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

<ul class = "left-slanted-light-grey-banner"> 
  <h1> 
    News:
  </h1>
</ul>

<ul class = "right-slanted-light-grey-banner">
  <h1>
    Quote of the Day:
  </h1>
</ul>

<h1 id ="nextEventHeader" class = "green-header orbitron-font center"> 
  Next Event
</h1>

<p class = "image-container">
    <img id = "eventImg" :src = eventImg>
</p>

<div class = "center-content"> 
  <button class = "rubik-font"> 
  Register
</button>
</div>

<div id = "newsDiv" class = "image-paragraph-container">
  <p id = "newsImgContainer" class = "image-container">
  <img id = "newsImg" :src = newsImg>
 
</p>
<P id = "newsDescription" class = "rubik-font description-box">
    Google trains new AI model on rat brains,
    our over lords will replace are primitive human minds in next
    5 years...
</P>

</div>

<div id = "quoteDiv" class = "image-paragraph-container">
  <p id = "quoteImgContainer" class ="image-container">
    <img id ="quoteImg" :src = professorImg>
  </p>
  <p id = "quoteDescription"class = "rubik-font description-box">
      "I'm gonna replace you guys with students that actually care." - North
  </p>
</div>


=




</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
