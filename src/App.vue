<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();

</script>

<template>
  <ul class = "navbar">
  
    <li>
      <router-link :to ="{name: 'home'}"><h2>Home</h2></router-link>
    </li>
    <li>
      <router-link :to ="{name: 'officers'}"><h2>Officers</h2></router-link>
    </li>
    <li><router-link :to = "{name: 'events'}"><h2>Events</h2></router-link></li>
    <li>
      <router-link :to ="{name: 'about'}"><h2>About</h2></router-link>
    </li>
    <li><h2>Merch</h2></li>
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
