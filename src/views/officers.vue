<script setup>
import { ref } from 'vue'
const presidentPhoto = "public/officerImages/jenna.png"
const vpPhoto = "public/officerImages/julian.png"
const secretaryPhoto = "public/officerImages/arri.png"
const chaplainPhoto = "public/officerImages/matthew.png"
const socialMediaManagerPhoto = "public/officerImages/emily.png"
const presidentProfessor = "/public/David-North-2.webp"
const vpProfessor = "/public/officerImages/professors/dimick.jpg"
const chaplainProfessor = "/public/officerImages/professors/leftwich.jpg"
const socialMediaManagerProfessor = "/public/officerImages/professors/coleman.jpg"
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
    <title>Officers</title>

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




<div class = "column-container">
    <h1 id = "officer-header" class = "green-header orbitron-font center">
        Meet Our Team
    </h1>

<div>
    <h2 id = "president-label"class = "officer-label transparent-paragraph center orbitron-font">
        President: Jenna Stilling
    </h2>
    <p class = "image-container officer-container">
        <div class = "fact-container drop-shadow">
            <h2 class = "orbitron-font"> Favorite Professor:
            </h2>
            <h3 class = "orbitron-font">
                North
            </h3>
            <p class = "image-container no-margins no-padding ">
                <img class = "officer-professor" :src = presidentProfessor>
            </p>
        </div>
        <img class = "officer-image drop-shadow":src = presidentPhoto>
        <div class = "fact-container drop-shadow">
            <h2 class = "orbitron-font">
                Favorite Class:
            </h2>
            <p class="orbitron-font fact-text">SE III ethics (loves discussion)</p>
            <h2 class = "orbitron-font">
                Fun Fact:
            </h2>
            <p class = "orbitron-font fact-text">Has a personal cast letter & signature from Julia Andrews!</p>
        </div>
    </p>
    <p class = "officer-description center orbitron-font">
        Jenna is a senior earning her dual degree in Computer Science with Gaming & Animation, and software engineering.
        
   
        We love you Jenna and can't wait to have you as our prez this year!!
    </p>
</div>

<div>
    <h2 id = "vp-label"class = "officer-label transparent-paragraph center orbitron-font">
        Vice President: Julian Moore
    </h2>
    <p class = "image-container officer-container">
        <div class = "fact-container drop-shadow">
            <h2 class = "orbitron-font"> Favorite Professor:
            </h2>
            <h3 class = "orbitron-font">
                Jeffery Dimick
            </h3>
            <p class = "image-container no-margins no-padding">
                <img class = "officer-professor" :src = vpProfessor>
            </p>
        </div>
        <img class = "officer-image drop-shadow":src = vpPhoto>
        <div class = "fact-container drop-shadow">
            <h2 class = "orbitron-font">
                Favorite Class:
            </h2>
            <p class="orbitron-font fact-text">Data Structures and Algorithms</p>
            <h2 class = "orbitron-font">
                Fun Fact:
            </h2>
            <p class = "orbitron-font fact-text">Loves fishing, is a roller coaster enthusiast</p>
        </div>
    </p>
    <p class = "officer-description center orbitron-font">
        Julian is a junior majoring in Computer Science with Business
        
   
        We’re excited to have you as VP this year Julian!
    </p>
</div>

<div>
    <h2 id = "secretary-label"class = "officer-label transparent-paragraph center orbitron-font">
        Secretary: Arrian Taton
    </h2>
    <p class = "image-container officer-container">
        <div class = "fact-container drop-shadow">
            <h3 class = "orbitron-font"> Favorite Professor:
            </h3>
            <h2 class = "orbitron-font">
                "Don't make me choose!"
            </h2>
        </div>
        <img class = "officer-image drop-shadow":src = secretaryPhoto>
        <div class = "fact-container drop-shadow">
            <h2 class = "orbitron-font">
                Favorite Class:
            </h2>
            <p class="orbitron-font fact-text">Software Engineering (or) Patterns</p>
            <h2 class = "orbitron-font">
                Fun Fact:
            </h2>
            <p class = "orbitron-font fact-text">Has been programming since 2018</p>
        </div>
    </p>
    <p class = "officer-description center orbitron-font">
        Ari is accomplished and capable- in addition to her two officer positions at BITClub, 
        she is also a tutor in various computer science courses. 
        We love having you again as an officer this year Ari!
    </p>
</div>

    
<div>
    <h2 id = "chaplain-label"class = "officer-label transparent-paragraph center orbitron-font">
        Chaplain: Matthew Jang
    </h2>
    <p class = "image-container officer-container">
        <div class = "fact-container drop-shadow">
            <h2 class = "orbitron-font"> Favorite Professor:
            </h2>
            <h3 class = "orbitron-font">
                Don Leftwhich (retired)
            </h3>
            <p class = "image-container no-margins no-padding">
                <img class = "officer-professor" :src = chaplainProfessor>
            </p>
        </div>
        <img class = "officer-image drop-shadow":src = chaplainPhoto>
        <div class = "fact-container drop-shadow">
            <h2 class = "orbitron-font">
                Favorite Class:
            </h2>
            <p class="orbitron-font fact-text">
                Anything taught by leftwich (Assembly Language, Comptuer Organ Arch)
            </p>
            <h2 class = "orbitron-font">
                Fun Fact: 
            </h2>
            <p class = "orbitron-font fact-text">Loves Jesus and Cats</p>
        </div>
    </p>
    <p class = "officer-description center orbitron-font">
        Matthew is a senior finishing his degree in pure computer science, 
        and hoping to pursue a masters degree in cybersecurity. 
        We love your enthusiasm for God Matthew, and we’re excited to have you as chaplain this year!

    </p>
</div>
        


<div>
    <h2 id = "social-media-manager-label"class = "officer-label transparent-paragraph center orbitron-font">
        Social Media Manager: Emily Forester
    </h2>
    <p class = "image-container officer-container">
        <div class = "fact-container drop-shadow">
            <h2 class = "orbitron-font"> Favorite Professor:
            </h2>
            <h3 class = "orbitron-font">
                Curtis Coleman
            </h3>
            <p class = "image-container no-margins no-padding">
                <img class = "officer-professor" :src = socialMediaManagerProfessor>
            </p>
        </div>
        <img class = "officer-image drop-shadow":src = socialMediaManagerPhoto>
        <div class = "fact-container drop-shadow">
            <h2 class = "orbitron-font">
                Favorite Class:
            </h2>
            <p class="orbitron-font fact-text">
                CTF competitions in the CS team experience course hosted by Curtis Coleman 
                (technically not a class)
            </p>
            <h2 class = "orbitron-font">
                Fun Fact(s):
            </h2>
            <p class = "orbitron-font fact-text">
                Favorite color is green, and has a crochet business (is a One Peice fan)
            </p>
        </div>
    </p>
    <p class = "officer-description center orbitron-font">
        I’m excited to promote the opportunities of BIT Club this year! 
        The instagram page is run by me, and I will be creating most of the informational flyers - 
        feel free to reach out to me with questions or suggestions about promoting 
        the club as my position is new this year 😊

    </p>
</div>

</div>
       





</template>

<style scoped>

</style>
