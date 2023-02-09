import { defineStore } from "pinia";
import api from "../config/axios";

const formatUrl = (url) => url.split('/v2/')[1]

export const pokemonStore = defineStore("pokemon", {
  state: () => ({
    foundPokemonBySpecie: {},
    foundPokemonEvolutionChains: {},
  }),
  getters: {
    getPokeInfoSpecie(state) {
      return state.foundPokemonBySpecie;
    },
    getPokeInfoEvolutionChains(state) {
      return state.foundPokemonEvolutionChains;
    },
  },
  actions: {
    async getPokemonBySpecieAndEvolutionChain(pokemonName) {
      const { data } = await api.get(`pokemon-species/${pokemonName}/`);
      const pokemonData = await api.get(formatUrl(data.varieties[0]?.pokemon?.url));
      this.foundPokemonBySpecie = pokemonData.data;
      const response = await api.get(formatUrl(data.evolution_chain.url));
      this.foundPokemonEvolutionChains = response.data;
    },
  },
});
