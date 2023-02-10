import { createRouter, createWebHistory } from "vue-router";
import HomePokedex from "../views/HomePokedex.vue";
import DetailsPokemon from "@/components/DetailsPokemon.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePokedex,
    },
    {
      path: "/:pokemonName/:pokemonType",
      name: "pokemonDetail",
      component: DetailsPokemon,
    },
  ],
});

export default router;
