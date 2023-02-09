import { defineStore } from "pinia";
import api from "../config/axios";

export const pokemonStore = defineStore("pokemon", {
  state: () => ({
    foundPokemon: {},
  }),
  getters: {},
  actions: {
    async getPokemon(pokemonName) {
      const response = await api.get(`${pokemonName}`);
      this.foundPokemon = response.data;
    },
  },
});
