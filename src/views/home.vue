<script setup>
import { ref } from 'vue'
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

<ul class = "slanted-light-grey-banner"> 
  <h1> 
    News:
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

<p id = "newsImgContainer" class = "image-container">
  <img id = "newsImg" :src = newsImg>
</p>




</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
