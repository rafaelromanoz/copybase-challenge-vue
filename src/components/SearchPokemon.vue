<template>
  <input type="text" v-model="pokemonToSearch" />
  <button @click="fetchPokemonApi">Procurar Pokémon</button>
</template>
<script setup>
import { pokemonStore } from "@/stores/pokemon";
import { ref } from "vue";

const { foundPokemonBySpecie, getPokemonBySpecieAndEvolutionChain } =
  pokemonStore();
const pokemonToSearch = ref("");

const fetchPokemonApi = async () => {
  try {
    foundPokemonBySpecie.value = await getPokemonBySpecieAndEvolutionChain(
      pokemonToSearch.value
    );
  } catch (error) {
    console.error(error);
  }
};
</script>

<style scoped></style>
