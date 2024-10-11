<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();

</script>

<template>
  <ul class = "navbar">
  
    <router-link :to ="{name: 'home'}" class = "left-edge"><li>
      <h2 class = "orbitron-font">Home</h2>
    </li></router-link>

   
    <router-link :to ="{name: 'about'}"><li>
      <h2 class = "orbitron-font">About</h2>
    </li></router-link>

    <router-link :to = "{name: 'events'}"><li>
      <h2 class = "orbitron-font">Events</h2></li></router-link>

      <router-link :to ="{name: 'officers'}"><li>
      <h2 class = "orbitron-font">Officers</h2>
    </li></router-link>
     

    <li class = "right-edge"><h2 class = "orbitron-font">Merch</h2></li>
  </ul>
  <router-view/>

</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
