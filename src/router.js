import { createRouter, createWebHashHistory } from "vue-router";

import home from "./views/home.vue"
import about from "./views/about.vue"
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
    
    
  ],
});

export default router;