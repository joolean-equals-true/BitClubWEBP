<script setup>
import { ref } from 'vue'
const logo = "/public/BITClubLogoTransparent.png"
const promoImg = "/public/LIandLeftwhich.jpg"
defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
  <div>
    <img id = "bitclublogo" :src = logo>
  </div>

<ul class = "slanted-light-grey-banner"> 
  <h1> 
    Next Event:
  </h1>
</ul>

<h1 id ="promoHeaderHomePage" class = "green-header audiowide-regular"> 
  Kickoff
</h1>
  <img id = "promoImg" :src = promoImg>

</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
