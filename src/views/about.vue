<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const liandlefty = "/public/aboutImages/LiandLeftwich.jpg"
const departmentday = "/public/aboutImages/departmentday.jpg"
const officerPhoto = "/public/aboutImages/officerPhoto.png"
const lanpartyPhoto = "/public/aboutImages/lanpartyPhoto.jpg"

</script>

<template>

<div id = "about-container"class = "row-container">

   
    <div class = "column-container about-div">
        <p class = "image-container">
            <img class = "about-image":src = lanpartyPhoto>
        </p>
        <p class = "image-container">
            <img class = "about-image":src = liandlefty>
        </p>
    </div>

    <div id = "middle-about-div" class = "column-container about-div">
        <h1 id = "about-header"class = "green-header orbitron-font center">Who we Are</h1>
        <p id= "about-description"class = "orbitron-font center">
        Bit Club is the official ACM (Math and Computer Science) chapter for OC, but everyone at OC is welcome!

        <br>
        <br>
        We meet Tuesdays in HSH 208.

        <br>
        <br>
        Some weeks we will have guest speakers to show you something new and interesting. Other weeks we hangout and play board games and video games.

        <br>
        <br>
        We can also help with computer science homework and answer related questions if needed.

        <br>
        <br>
        We have other fun events and several yearly events in addition to our weekly meetings.
        </p>
    </div>

    <div class = "column-container about-div">
        <p class="image-container">
            <img class = "about-image" :src = officerPhoto>
        </p>
        <p id ="bottom-left-about-image"class = "image-container">
            <img class = "about-image" :src = departmentday>
        </p>
    </div>
</div>
   


</template>

<style scoped>

</style>
