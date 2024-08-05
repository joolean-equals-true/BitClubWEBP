<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const officerPhoto = "/public/aboutImages/officerPhoto.HEIC"
const lanpartyPhoto = "/public/aboutImages/lanpartyPhoto.jpg"
</script>

<template>
<h1 id = "aboutHeader"class = "green-header orbitron-font">Who we Are</h1>

<p class="image-container">
    <img class = "about-image" :src = officerPhoto>
</p>
<p class = "image-container">
    <img class = "about-image":src = lanpartyPhoto>
</p>
</template>

<style scoped>

</style>
