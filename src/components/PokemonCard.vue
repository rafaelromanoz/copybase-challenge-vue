<template>
  <input v-model="inputedSearch" />
  <button @click="fetchPokemonApi">Procurar pokemon</button>
</template>

<script setup>
import { ref } from "vue";
import useApiPokemon from "../composables/useApiPokemon";
const { getPokemonByName } = useApiPokemon();

const pokemon = ref({});

const inputedSearch = ref("");

const fetchPokemonApi = async () => {
  try {
    pokemon.value = await getPokemonByName(inputedSearch.value);
  } catch (error) {
    throw new Error(error);
  }
};
</script>

<style scoped></style>
