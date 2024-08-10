<script setup>
import { ref } from 'vue'
const presidentPhoto = "public/officerImages/jenna.png"
const vpPhoto = "public/officerImages/julian.png"
const secretaryPhoto = "public/officerImages/arri.png"
const chaplainPhoto = "public/officerImages/matthew.png"
const socialmediaManagerPhoto = "public/officerImages/emily.png"

function scrollIntoViewCall(targetElement){
   
    var target = document.getElementById(targetElement);
    target.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest"
    })
}


</script>

<template>

    <ul class = "officer-navbar">
        <h3 id = "number1"@click = "scrollIntoViewCall('president-label')">
                  1
        </h3>
        <h3  @click = "scrollIntoViewCall('vp-label')">
            2
        </h3>
        <h3 @click = "scrollIntoViewCall('secretary-label')">
            3
        </h3>
        <h3 @click = "scrollIntoViewCall('chaplain-label')">
            4
        </h3>
        <h3 id= "number5"@click = "scrollIntoViewCall('social-media-manager-label')">
            5
        </h3>
    </ul>


    <h1 id = "officer-header" class = "green-header orbitron-font">
        Meet Our Team
    </h1>


    <h2 id = "president-label"class = "officer-label transparent-paragraph center orbitron-font">
        President: Jenna Stilling
    </h2>
    <p class = "image-container">
        <img id = "president-image" class = "officer-image":src = presidentPhoto>
    </p>
    <p id= "president-description"class = "officer-description center transparent-paragraph orbitron-font">
        Jenna is a senior earning her dual degree in Computer Science with Gaming & Animation, and software engineering.
        
        <br>
        <br>
        Favorite professor: North (also her advisor, pushes her to grow outside her comfort zone and challenges her)
        
        <br>
        <br>
        Favorite class: SE III-Ethics (loves the open discussion)

        <br>
        <br>
        Fun fact: Has a personal cast letter & signature from Julia Andrews!

        <br>
        <br>
        We love you Jenna and can't wait to have you as our prez this year!!
    </p>


    <h2 id = "vp-label"class = "officer-label transparent-paragraph center orbitron-font">
        Vice President: Julian Moore
    </h2>
    <p class = "image-container">
        <img id = "" class = "officer-image":src = vpPhoto>
    </p>
    <p id= ""class = "officer-description center transparent-paragraph orbitron-font">
        Julian is a junior majoring in Computer Science with Business.

        <br>
        <br>
        Favorite professor: Dimick (Discrete mathematics)

        <br>
        <br>
        Favorite class: Data Structures & Algorithms (North)

        <br>
        <br>
        Fun fact(s): Julian loves fishing, and is a roller coaster enthusiast 🎢🎣

        <br>
        <br>
        We're excited to have you as VP this year Julian!
    </p>



    <h2 id = "secretary-label"class = "officer-label transparent-paragraph center orbitron-font">
        Secretary: Arrian Naiomi Taton
    </h2>
    <p class = "image-container">
        <img id = "" class = "officer-image":src = secretaryPhoto>
    </p>
    <p id= "secretary-description" class = "officer-description center transparent-paragraph orbitron-font">
        She is a senior completing her undergraduate degree in pure Computer Science, as well as a graduate degree in software engineering.

        <br>
        <br>
        Favorite professor: “Don't make me choose!”
        
        <br>
        <br>
        Favorite class: Software Engineering or Patterns (Griffin).

        <br>
        <br>
        Fun fact: Ari has been programming since 2018 💻

        <br>
        <br>
        Ari is accomplished and capable- in addition to her two officer positions at BITClub, she is also a tutor in various computer science courses. We love having you again as an officer this year Ari!
    </p>

    <h2 id = "chaplain-label" class = "officer-label transparent-paragraph center orbitron-font">
        Chaplain: Matthew Jang
    </h2>
    <p class = "image-container">
        <img id = "" class = "officer-image":src = chaplainPhoto>
    </p>
    <p id= "" class = "officer-description center transparent-paragraph orbitron-font">
        Major - Straight CS (but hopefully grad cyber one day :O)
        <br>
        <br>
        Year - Senior
        <br>
        <br>
        Fun Fact - I love Jesussss! (and cats are cool too :P)
        <br>
        <br>
        Fav Prof/Class - All of Lefties bc they are challenging and cooooool, plus who doesn't love that little tree killer lol
    </p>


    <h2 id = "social-media-manager-label"class = "officer-label transparent-paragraph center orbitron-font">
        Social Media Manager: Emily Forester
    </h2>
    <p class = "image-container">
        <img id = "" class = "officer-image":src = socialmediaManagerPhoto>
    </p>
    <p id= "social-media-manager-description" class = "officer-description center transparent-paragraph orbitron-font">
    Degree: Computer Science with Cybersecurity
    <br>
    <br>
    Year: Junior
    <br>
    <br>
    Favorite prof is Coleman, I like any cyber class, especially the CTF competitions
    <br>
    <br>
    Fun fact: I have pet hermit crabs named Mabel and Dipper (Gravity Falls reference)
    </p>




</template>

<style scoped>

</style>
