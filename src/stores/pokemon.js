import { defineStore } from "pinia";
import api from "../config/axios";

const formatUrl = (url) => url.split("/v2/")[1];

export const pokemonStore = defineStore("pokemon", {
  state: () => ({
    foundPokemonBySpecie: {},
    foundPokemonEvolutionChains: {
      baby: {},
      first: {},
      second: {},
    },
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
    async getInfoPokeEvolutions(pokemonEvolutionChains) {
      const promiseBabyEvolutionPoke = api.get(
        `pokemon/${pokemonEvolutionChains.chain.species.name}`
      );
      const promiseFirstEvolutionPoke = api.get(
        `pokemon/${pokemonEvolutionChains.chain.evolves_to[0]?.evolves_to[0]?.species.name}`
      );
      const promiseSecondEvolutionPoke = api.get(
        `pokemon/${pokemonEvolutionChains.chain.evolves_to[0]?.species.name}`
      );
      const [baby, first, second] = await Promise.all([
        promiseBabyEvolutionPoke,
        promiseFirstEvolutionPoke,
        promiseSecondEvolutionPoke,
      ]);
      this.foundPokemonEvolutionChains.baby = baby.data;
      this.foundPokemonEvolutionChains.first = first.data;
      this.foundPokemonEvolutionChains.second = second.data;
    },
    async getPokemonBySpecieAndEvolutionChain(pokemonName) {
      const { data } = await api.get(`pokemon-species/${pokemonName}/`);
      const pokemonData = await api.get(
        formatUrl(data.varieties[0]?.pokemon?.url)
      );
      this.foundPokemonBySpecie = pokemonData.data;
      const response = await api.get(formatUrl(data.evolution_chain.url));
      await this.getInfoPokeEvolutions(response.data);
    },
  },
});
