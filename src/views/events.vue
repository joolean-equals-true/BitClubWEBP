<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const recapImg = "/public/eventImages/recap/kickoff-image-1.png"
let showEvent1 = ref(false);
const kickOffGraphic = "/public/eventImages/kickOffGraphic.png"
const firstEventGraphic ="/public/eventImages/firstMeeting.png"
const studentPresentationGraphic = "/public/eventImages/studentPresentationGraphic.png"
const appleIIGamesGraphic = "/public/eventImages/appleIIGamesGraphic.png"
const resumeWorkshopGraphic = "/public/eventImages/resumeWorkshopGraphic.png"
const gameNightGraphic = "/public/eventImages/gameNightGraphic.png"
const speakerGraphic = "/public/eventImages/speakerGraphic.png"
const mysteryProfessorGraphic = "/public/eventImages/professorApproaching.jpg"


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



<template >

    <div id = "event-container-1" class = "row-container">
        <div id="next-event-div" class = "column-container"> 
            <ul id="next-event-banner" class = "left-slanted-light-grey-banner">
                <h1>
                    Next Event:
                </h1>
            </ul>
                <button id = "next-event-button"class = "transparent-paragraph orbitron-font event-button">
                    First Meeting
                </button>
        </div>
        <h2 id = "events-label"class = "green-header orbitron-font">
            Club Events
        </h2>
    
    </div>
   
    <h1 class = "orbitron-font fit-label center">
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

    <ul class = "center event-list">
        <button @click = "changeDisplay('content1')"class = "transparent-paragraph orbitron-font event-button center">
            First Meeting
        </button>
        <button @click = "changeDisplay('content2')"class = "transparent-paragraph orbitron-font event-button center">
            Resume Workshop
        </button>
        
        <button @click = "changeDisplay('content3')"class = "transparent-paragraph orbitron-font event-button center">
            Apple II Games
        </button>

        <button  @click = "changeDisplay('content4')" class = "transparent-paragraph orbitron-font event-button center">
            Kick Off Party
        </button>

        <button @click = "changeDisplay('content5')" class = "transparent-paragraph orbitron-font event-button center">
            Student Presentation
        </button>

        

        <button @click = "changeDisplay('content6')"class = "transparent-paragraph orbitron-font event-button center">
            Game Night
        </button>

        <button @click = "changeDisplay('content7')" class = "transparent-paragraph orbitron-font event-button center">
            Professor Talk: North & Smith
        </button>
        
        <button @click = "changeDisplay('content8')"class = "transparent-paragraph orbitron-font event-button center">
            Scavenger Hunt
        </button>

        <button @click = "changeDisplay('content10')" class = "transparent-paragraph orbitron-font event-button center">
            Halloween Event with IDGA
        </button>

        <button @click = "changeDisplay('content11')" class = "transparent-paragraph orbitron-font event-button center">
            Alumni Panel
        </button>

        <button @click = "changeDisplay('content12')" class = "transparent-paragraph orbitron-font event-button center">
            Professor Talk: ???
        </button>

        <button @click = "changeDisplay('content13')" class = "transparent-paragraph orbitron-font event-button center">
            Dead Week Study Sessions
        </button>

    </ul>

    <div id="content1"  class = "modal">
        <div class = "modal-content center">
            <p class = "image-container">
                <img class = "rounded-edge event-graphic" :src = "firstEventGraphic">
            </p>

            <div class = "modal-box">
                <p class = "orbitron-font modal-paragraph">
                    Our first meeting of the semester! This meeting will be pretty straight forward-
                    meet the new officers of the club, get to know what we are about, and connect with other CS majors...
                    all while having delicious pizza!
                </p>

                <button class = "modal-button orbitron-font ">
                    Register
                </button>
                <p class = "orbitron-font modal-paragraph close-text">click outsite box to close</p>
            </div>
            
        </div>
        
    </div>


    <div id="content2"  class = "modal">
        <div class = "modal-content center">
            <p class = "image-container">
                <img class = "rounded-edge event-graphic" :src = "resumeWorkshopGraphic">
            </p>

            <div class = "modal-box">
                <p class = "orbitron-font modal-paragraph">
                    Building a resume can definetly be a daunting task - especially if its your first time! 
                    We'd be more than happy help you get started and give you insights on how to design an 
                    eye-catching resume to get the attention of those tech recruiters. We welcome all students, regardless of experience 
                    level!
                </p>

                <button class = "modal-button orbitron-font ">
                    Register
                </button>
                <p class = "orbitron-font modal-paragraph close-text">click outsite box to close</p>
            </div>
        </div>
    </div>


    <div id="content3"  class = "modal">
        <div class = "modal-content center">
            <p class = "image-container">
                <img class = "rounded-edge event-graphic" :src = "appleIIGamesGraphic">
            </p>

            <div class = "modal-box">
                <p class = "orbitron-font modal-paragraph">
                    Ever played games on an Apple II computer (programmed by the great David North)? Well,
                    now's your chance! Show up this event to get a blast from the past of technology
                    from the early days of computing and programming!
                </p>

                <button class = "modal-button orbitron-font ">
                    Register
                </button>
                <p class = "orbitron-font modal-paragraph close-text">click outsite box to close</p>
            </div>
        </div>
    </div>

    <div id="content4"  class = "modal">
        <div class = "modal-content center">
            <p class = "image-container">
                <img class = "rounded-edge event-graphic" :src = "kickOffGraphic">
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
                <p class = "orbitron-font modal-paragraph close-text">click outsite box to close</p>
            </div>
        </div>
    </div>



    <div id="content5"  class = "modal">
        <div class = "modal-content center">
            <p class = "image-container">
                <img class = "rounded-edge event-graphic" :src = "studentPresentationGraphic">
            </p>

            <div class = "modal-box">
                <p class = "orbitron-font modal-paragraph">
                    Looking to get some insight from other peers? This is the event for you! Stop by to hear about experiences from students
                    who have done internships at companies over the summer, worked on personal projects, or other accomplishments in the career 
                    of computer science.
                </p>

                <button class = "modal-button orbitron-font ">
                    Register
                </button>
                <p class = "orbitron-font modal-paragraph close-text">click outsite box to close</p>
            </div>
        </div>
    </div>



    <div id="content6"  class = "modal">
        <div class = "modal-content center">
            <p class = "image-container">
                <img class = "rounded-edge event-graphic" :src = "gameNightGraphic">
            </p>

            <div class = "modal-box">
                <p class = "orbitron-font modal-paragraph">
                    Game Night!? You heard that right! Join us for fun with a plethora of games, from Jackbox
                    to platform fighting games like Smash Ultimate (yes, we will have more than just video games)! If
                    you aren't much of a gamer, at least stop by for the pizza!
                </p>

                <button class = "modal-button orbitron-font ">
                    Register
                </button>
                <p class = "orbitron-font modal-paragraph close-text">click outsite box to close</p>
            </div>
        </div>
    </div>



    <div id="content7"  class = "modal">
        <div class = "modal-content center">
            <p class = "image-container">
                <img class = "rounded-edge event-graphic" :src = "speakerGraphic">
            </p>

            <div class = "modal-box">
                <p class = "orbitron-font modal-paragraph">
                    Working in the (real) corporate world outside the Christian bubble of church, family, and school
                    can be a huge leap, and it will be something you will invetitably face on your CS journey. Come learn from
                    practical experiences from experts who have been in the field... There are takeaways for all comers!
                </p>

                <button class = "modal-button orbitron-font ">
                    Register
                </button>
                <p class = "orbitron-font modal-paragraph close-text">click outsite box to close</p>
            </div>
        </div>
    </div>

    <div id="content8"  class = "modal">
        <div class = "modal-content center">
            <p class = "image-container">
                <img class = "rounded-edge event-graphic" >
            </p>

            <div class = "modal-box">
                <p class = "orbitron-font modal-paragraph">
                    Sorry! we don't have graphics for this event yet... but we will soon!
                </p>

                <p class = "orbitron-font modal-paragraph close-text">click outsite box to close</p>
            </div>
        </div>
    </div>

    <div id="content9"  class = "modal">
        <div class = "modal-content center">
            <p class = "image-container">
                <img class = "rounded-edge event-graphic" >
            </p>

            <div class = "modal-box">
                <p class = "orbitron-font modal-paragraph">
                    Sorry! we don't have graphics for this event yet... but we will soon!
                </p>

                <p class = "orbitron-font modal-paragraph close-text">click outsite box to close</p>
            </div>
        </div>
    </div>

    <div id="content10"  class = "modal">
        <div class = "modal-content center">
            <p class = "image-container">
                <img class = "rounded-edge event-graphic" >
            </p>

            <div class = "modal-box">
                <p class = "orbitron-font modal-paragraph">
                    Sorry! we don't have graphics for this event yet... but we will soon!
                </p>

                <p class = "orbitron-font modal-paragraph close-text">click outsite box to close</p>
            </div>
        </div>
    </div>

    <div id="content11"  class = "modal">
        <div class = "modal-content center">
            <p class = "image-container">
                <img class = "rounded-edge event-graphic" >
            </p>

            <div class = "modal-box">
                <p class = "orbitron-font modal-paragraph">
                    Sorry! we don't have graphics for this event yet... but we will soon!
                </p>

                <p class = "orbitron-font modal-paragraph close-text">click outsite box to close</p>
            </div>
        </div>
    </div>

    <div id="content12"  class = "modal">
        <div class = "modal-content center">
            <p class = "image-container">
                <img class = "rounded-edge event-graphic" :src = "mysteryProfessorGraphic">
            </p>

            <div class = "modal-box">
                <p class = "orbitron-font modal-paragraph">
                    Some professor is speaking at this event... but who?? What will the professor talk about!?
                    This paticular individual refuses to tell us...
                </p>

                <p class = "orbitron-font modal-paragraph close-text">click outsite box to close</p>
            </div>
        </div>
    </div>

    <div id="content13"  class = "modal">
        <div class = "modal-content center">
            <p class = "image-container">
                <img class = "rounded-edge event-graphic" >
            </p>

            <div class = "modal-box">
                <p class = "orbitron-font modal-paragraph">
                    Sorry! we don't have graphics for this event yet... but we will soon!
                </p>

                <p class = "orbitron-font modal-paragraph close-text">click outsite box to close</p>
            </div>
        </div>
    </div>


    










   


</template>

<style scoped>

</style>