<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const recapImg = "/public/eventImages/recap/kickoff-image-1.png"
let showEvent1 = ref(false);
const kickOffGraphic = "/public/eventImages/kickOffGraphic.png"


window.onclick = function(event) {
    let content1 = document.getElementById("content1")

  if (event.target == content1) {
  
    
   
    
    content1.style.animationName = "pop-up-transition";
    content1.style.animationDuration = "1s"
    content1.style.animationDirection = "reverse";
    content1.style.top = "-1100px"
    showEvent1 = ref(false)

  }
}

function test(){
    console.log(showEvent1)
}

function moveAway(){
    let content1 = document.getElementById("content1")
    content1.style.animationName = "pop-up-transition";
    content1.style.animationDuration = "1s"
    content1.style.animationDirection = "reverse";
    content1.style.top = "-1100px"

}
    
   
</script>



<template>

    <h2 id = "events-label"class = "green-header orbitron-font">
        Club Events
    </h2>
    <h1 class = "transparent-paragraph orbitron-font fit-label center">
        Latest Event Recap
    </h1>

    <p class = "image-container center">
        <img id = "recap-image" class = "rounded-edge":src = "recapImg">
    </p>

    <p class = "transparent-paragraph rounded-edge orbitron-font fit-description center">
        Make sure to come to our events! We have everything from professor
        talks to late-night parties, and you can even get free goodies like gift-cards and pizza!
    </p>

    <h1 class = "green-header large-header orbitron-font center">
        All Events in Order
    </h1>

    <ul id = "event-list"class = "center">
        <button  @click = "showEvent1 = true" v-on:click.prevent = "test()"class = "transparent-paragraph orbitron-font event-button center">
            Kick Off Party
        </button>

        <button class = "transparent-paragraph orbitron-font event-button center">
            Student Presentation
        </button>

        <button class = "transparent-paragraph orbitron-font event-button center">
            Apple II Games
        </button>

        <button class = "transparent-paragraph orbitron-font event-button center">
            Games
        </button>

        <button class = "transparent-paragraph orbitron-font event-button center">
            Professor Talk: North
        </button>
        
        <button class = "transparent-paragraph orbitron-font event-button center">
            Scavenger Hunt
        </button>

        <button class = "transparent-paragraph orbitron-font event-button center">
            Professor Talk: Smith
        </button>

        <button class = "transparent-paragraph orbitron-font event-button center">
            Halloween Event with IDGA
        </button>

        <button class = "transparent-paragraph orbitron-font event-button center">
            Alumni Panel
        </button>

        <button class = "transparent-paragraph orbitron-font event-button center">
            Professor Talk: Griffin
        </button>

        <button class = "transparent-paragraph orbitron-font event-button center">
            Dead Week Study Sessions
        </button>

    </ul>



    <div id="content1" v-if = "showEvent1"  class = "modal">
        <div class = "modal-content center">
            <p class = "image-container">
                <img class = "rounded-edge"id = "kickOffGraphic" :src = "kickOffGraphic">
            </p>

            <div class = "modal-box">
                <p class = "orbitron-font modal-paragraph">
                    Come to the Kick Off Party! We'll have board games, yard games, food, and more! It'll be a great place to connect
                    with people and meet the CS community. It'll be at Professor North's house at 6:00 pm. If you can't drive there,
                    don't worry! we can carpool you there if need be! Make sure to register for this fun event!
                </p>

                <button class = "modal-button orbitron-font ">
                    Register
                </button>
            </div>
        </div>

    </div>










    <ul id="next-event-banner" class = "left-slanted-light-grey-banner">
            <h1>
                Next Event:
            </h1>
    </ul>
    <button id = "next-event-button"class = "transparent-paragraph orbitron-font event-button">
            Kick Off Party
    </button>


</template>

<style scoped>

</style>