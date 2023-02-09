import { createRouter, createWebHistory } from "vue-router";
import HomePokedex from "../views/HomePokedex.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePokedex,
    },
  ],
});

export default router;
