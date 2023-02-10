<template>
  <input type="text" v-model="pokemonToSearch" />
  <button class="search-button" v-on:keyup.enter="fetchPokemonApi" @click="fetchPokemonApi">Pesquisar</button>
</template>
<script setup>
import { pokemonStore } from "@/stores/pokemon";
import { ref } from "vue";
import { useToast } from "vue-toastification";

const { foundPokemonBySpecie, getPokemonBySpecieAndEvolutionChain } =
  pokemonStore();
const pokemonToSearch = ref("");
const toast = useToast();

const fetchPokemonApi = async () => {
  try {
    foundPokemonBySpecie.value = await getPokemonBySpecieAndEvolutionChain(
      pokemonToSearch.value.toLowerCase()
    );
  } catch (error) {
    console.error(error);
    if (!error.request.responseURL.includes("undefined")) {
      toast.error("Esse pokémon não existe");
    }
  }
};
</script>

<style scoped></style>
