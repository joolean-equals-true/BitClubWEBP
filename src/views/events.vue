<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const recapImg = "/public/eventImages/recap/kickoff-image-1.png"

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

    <h1 class = "transparent-paragraph orbitron-font fit-label center">
        All Events in Order
    </h1>

    <ul id = "event-list"class = "center">
        <button class = "transparent-paragraph orbitron-font event-button center">
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