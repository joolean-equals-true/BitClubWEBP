<script setup>
import { ref } from 'vue'
const logo = "/public/BITClubLogoTransparent.png"
defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
  <img id = "bitclublogo" :src = logo>
<div> 
  <h1> 
    Next Event:
  </h1>
</div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
