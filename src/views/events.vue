<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const recapImg = "/public/eventImages/recap/kickoff-image-1.png"
let showEvent1 = ref(false);
const kickOffGraphic = "/public/eventImages/kickOffGraphic.png"


window.onclick = function(event) {
    let events = document.getElementsByClassName("modal");
    for(var i = 0; i < events.length; i++){
        console.log(events.item(i))
            if(event.target == events.item(i)){
                events.item(i).style.top = "-1400px";
                    setTimeout(function() {
                    events.item(i).style.display = "none";
                }, 1000)
                break;
        }
    }
}

function changeDisplay(targetElement){
    let element = document.getElementById(targetElement)
    element.style.display = "block";
    element.style.top = "0";
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

    <p class = "orbitron-font fit-description center">
        Make sure to come to our events! We have everything from professor
        talks to late-night parties, and you can even get free goodies like gift-cards and pizza!
    </p>

    <h1 class = "green-header large-header orbitron-font center">
        All Events in Order
    </h1>

    <ul id = "event-list"class = "center">
        <button @click = "changeDisplay('content1')"class = "transparent-paragraph orbitron-font event-button center">
            First Meeting
        </button>
        <button  @click = "changeDisplay('content2')" class = "transparent-paragraph orbitron-font event-button center">
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



    <div id="content1"  class = "modal">
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




    <div id="content2"  class = "modal">
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