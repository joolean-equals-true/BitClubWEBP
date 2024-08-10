import { createRouter, createWebHashHistory } from "vue-router";

import home from "./views/home.vue"
import about from "./views/about.vue"
import officers from "./views/officers.vue"
import events from "./views/events.vue"
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
        
      path: "/",
      name: "home",
      component: home,
    },
    {
        
      path: "/",
      name: "about",
      component: about,
    },
    {
        
      path: "/",
      name: "officers",
      component: officers,
    },
    {
        
      path: "/",
      name: "events",
      component: events,
    },
    
    
    
  ],
});

export default router;