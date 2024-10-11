<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
let showEvent1 = ref(false);
const kickOffGraphic = "/public/eventImages/kickOffGraphic.png"
const studentPresentationGraphic = "/public/eventImages/studentPresentationGraphic.png"
const appleIIGamesGraphic = "/public/eventImages/appleIIGamesGraphic.png"
const resumeWorkshopGraphic = "/public/eventImages/resumeWorkshopGraphic.png"
const gameNightGraphic = "/public/eventImages/gameNightGraphic.png"
const speakerGraphic = "/public/eventImages/speakerGraphic.png"
const mysteryProfessorGraphic = "/public/eventImages/professorApproaching.jpg"
const recapImg1 = "/public/eventImages/recap/firstMeeting/IMG_0644.jpg"
const recapImg2 = "/public/eventImages/recap/firstMeeting/IMG_0645.jpg"

let recapImgs = ["recap-img-1", "recap-img-2"]
let pos = 0;
window.onclick = function(event) {
    let events = document.getElementsByClassName("modal");
    for(var i = 0; i < events.length; i++){
        console.log(events.item(i))
            if(event.target == events.item(i)){
                events.item(i).style.top = "-1800px";
                    setTimeout(function() {
                    events.item(i).style.display = "none";
                }, 500)
                break;
        }
    }
}
function changeImage(direction){
  if(direction == 1 && pos < recapImgs.length){
    pos++;
  }
  else if (pos >0){
    pos--;
  }
  scrollIntoViewCall(recapImgs.at(pos))
}

function changeDisplay(targetElement){
    let element = document.getElementById(targetElement)
    element.style.display = "block";
    element.style.top = "0";
}

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



<template >
    <title>Events</title>

    <div id = "event-container-1" class = "row-container">
        <div id="next-event-div" class = "column-container"> 
            <ul id="recap-banner" class = "left-slanted-light-grey-banner">
                <h2 class = "orbitron-font">
                    Latest Event Recap:
                </h2>
            </ul>
            <div id = "recap-div" class = "event-list">
                <button id = "recap-button"class = "transparent-paragraph orbitron-font event-button"
                            @click = "changeDisplay('recap-modal')">
                    First Meeting
                </button>

            </div>
               
        </div>
        <h2 id = "events-label"class = "green-header orbitron-font">
            Club Events
        </h2>
    
    </div>
   

    <p class = "orbitron-font fit-description center">
        Make sure to come to our events! We have everything from professor
        talks to late-night parties, and you can even get free goodies like gift-cards and pizza!
    </p>

    <h1 class = "green-header large-header orbitron-font center">
        All Events in Order
    </h1>

    <ul class = "center event-list">
    

        <div>
            <button @click = "changeDisplay('content2')"class = "transparent-paragraph orbitron-font event-button center">
                Resume Workshop
            </button>
            <h1 class = "green-header orbitron-font">Sept 5</h1>
        </div>
       
        <div>
            <button @click = "changeDisplay('content3')"class = "transparent-paragraph orbitron-font event-button center">
                Apple II Games
            </button>
            <h1 class = "green-header orbitron-font">TBD</h1>
        </div>

        <div>
            <button  @click = "changeDisplay('content4')" class = "transparent-paragraph orbitron-font event-button center">
                Kick Off Party
            </button>
            <h1 class = "green-header orbitron-font">Sept 20</h1>
        </div>

        <div>
            <button @click = "changeDisplay('content5')" class = "transparent-paragraph orbitron-font event-button center">
                Student Presentation
            </button>
            <h1 class = "green-header orbitron-font">TBD</h1>
        </div>

        
        <div>
            <button @click = "changeDisplay('content6')"class = "transparent-paragraph orbitron-font event-button center">
                Game Night
            </button>
            <h1 class = "green-header orbitron-font">TBD</h1>
        </div>

        <div>
            <button @click = "changeDisplay('content7')" class = "transparent-paragraph orbitron-font event-button center">
                Professor Talk: North & Smith
            </button>
            <h1 class = "green-header orbitron-font">TBD</h1>
        </div>
        
        <div>
            <button @click = "changeDisplay('content8')"class = "transparent-paragraph orbitron-font event-button center">
                Scavenger Hunt
            </button>
            <h1 class = "green-header orbitron-font">TBD</h1>
        </div>

        <div>
            <button @click = "changeDisplay('content10')" class = "transparent-paragraph orbitron-font event-button center">
                Halloween Event with IDGA
            </button>
            <h1 class = "green-header orbitron-font">TBD</h1>
        </div>

        <div>
            <button @click = "changeDisplay('content11')" class = "transparent-paragraph orbitron-font event-button center">
                Alumni Panel
            </button>
            <h1 class = "green-header orbitron-font">TBD</h1>
        </div>

        <div>
            <button @click = "changeDisplay('content12')" class = "transparent-paragraph orbitron-font event-button center">
                Professor Talk: ???
            </button>
            <h1 class = "green-header orbitron-font">TBD</h1>
        </div>

        <div>
            <button @click = "changeDisplay('content13')" class = "transparent-paragraph orbitron-font event-button center">
                Dead Week Study Sessions
            </button>
            <h1 class = "green-header orbitron-font">TBD</h1>
        </div>
    </ul>


    <div id="content2"  class = "modal">
        <div class = "modal-content center">
            <p class = "image-container event-graphic">
                <img class = "rounded-edge event-content":src = "resumeWorkshopGraphic">
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
    
            </div>
        </div>
    </div>


    <div id="content3"  class = "modal">
        <div class = "modal-content center">
            <p class = "image-container event-graphic">
                <img class = "rounded-edge event-content" :src = "appleIIGamesGraphic">
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
               
            </div>
        </div>
    </div>

    <div id="content4"  class = "modal">
        <div class = "modal-content center">
            <p class = "image-container event-graphic">
                <img class = "rounded-edge event-content" :src = "kickOffGraphic">
            </p>

            <div class = "modal-box">
                <p class = "orbitron-font modal-paragraph">
                    Hey everyone, I hope you are doing well! Our annual Kick Off Party is around the corner, 
                    and we would love to Come to the Kick Off Party! We'll have board games, yard games, food, and more! It'll be a great place to connect
                    with people and meet the CS community. It'll be at Professor North's house (3113 Fisher Rd, Edmond OK 73013) 
                    at 6:00 pm, September 20 (next friday, a week from now). If you can't drive there,
                    don't worry! We can carpool you there if need be! Make sure to register for this fun event in the form below!
                </p>

                <button class = "modal-button orbitron-font ">
                    Register
                </button>
         
            </div>
        </div>
    </div>



    <div id="content5"  class = "modal">
        <div class = "modal-content center">
            <p class = "image-container event-graphic">
                <img class = "rounded-edge event-content" :src = "studentPresentationGraphic">
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
             
            </div>
        </div>
    </div>



    <div id="content6"  class = "modal">
        <div class = "modal-content center">
            <p class = "image-container event-graphic">
                <img class = "rounded-edge event-content" :src = "gameNightGraphic">
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
            
            </div>
        </div>
    </div>



    <div id="content7"  class = "modal">
        <div class = "modal-content center">
            <p class = "image-container event-graphic">
                <img class = "rounded-edge event-content" :src = "speakerGraphic">
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
            
            </div>
        </div>
    </div>

    <div id="content8"  class = "modal">
        <div class = "modal-content center">
            <p class = "image-container event-graphic">
                <img class = "rounded-edge event-content">
            </p>

            <div class = "modal-box">
                <p class = "orbitron-font modal-paragraph">
                    Sorry! we don't have graphics for this event yet... but we will soon!
                </p>

            </div>
        </div>
    </div>

    <div id="content9"  class = "modal">
        <div class = "modal-content center">
            <p class = "image-container event-graphic">
                <img class = "rounded-edge event-content">
            </p>

            <div class = "modal-box">
                <p class = "orbitron-font modal-paragraph">
                    Sorry! we don't have graphics for this event yet... but we will soon!
                </p>

            </div>
        </div>
    </div>

    <div id="content10"  class = "modal">
        <div class = "modal-content center">
            <p class = "image-container event-graphic">
                <img class = "rounded-edge event-content">
            </p>

            <div class = "modal-box">
                <p class = "orbitron-font modal-paragraph">
                    Sorry! we don't have graphics for this event yet... but we will soon!
                </p>

           
            </div>
        </div>
    </div>

    <div id="content11"  class = "modal">
        <div class = "modal-content center">
            <p class = "image-container event-graphic">
                <img class = "rounded-edge event-content" >
            </p>

            <div class = "modal-box">
                <p class = "orbitron-font modal-paragraph">
                    Sorry! we don't have graphics for this event yet... but we will soon!
                </p>

              
            </div>
        </div>
    </div>

    <div id="content12"  class = "modal">
        <div class = "modal-content center">
            <p id = "mystery-professor-graphic"class = "image-container event-graphic">
                <img class = "rounded-edge event-content" :src = "mysteryProfessorGraphic">
            </p>

            <div class = "modal-box">
                <p class = "orbitron-font modal-paragraph">
                    Some professor is speaking at this event... but who?? What will the professor talk about!?
                    This paticular individual refuses to tell us...
                </p>

            
            </div>
        </div>
    </div>

    <div id="content13"  class = "modal">
        <div class = "modal-content center">
            <p class = "image-container event-graphic">
                <img class = "rounded-edge event-content" >
            </p>

            <div class = "modal-box">
                <p class = "orbitron-font modal-paragraph">
                    Sorry! we don't have graphics for this event yet... but we will soon!
                </p>

               
            </div>
        </div>
    </div>

    <div id="recap-modal"  class = "modal">
        <div id ="recap-content" class = "modal-content center">
            <div class = "column-content large-header">
                <h1 class = "orbitron-font">Recap</h1>
                <section  id = "recap-container"class = "carousel-container center">
                    <div class = "slider-wrapper">
                        <div class = "slider">
                            <img id = 'recap-img-1' :src = "recapImg1">
                            <img id = 'recap-img-2' :src = "recapImg2">
                        </div>
                        <div class ="left-option">
                            <a class = "arrow-left" @click = "changeImage(0)"></a>
                        </div>
                        <div class = "right-option">
                            <a class = "arrow-right right-option" @click = "changeImage(1)"></a>
                        </div>
                    </div>
                </section>
            </div>
            
            </div>
        </div>

    










   


</template>

<style scoped>

</style>