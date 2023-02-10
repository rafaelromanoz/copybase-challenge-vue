<template>
  <input type="text" v-model="pokemonToSearch" />
  <button @click="fetchPokemonApi">Procurar Pokémon</button>
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
    if (error.message === "404") {
      console.log('entrei aqui');
      toast.error("Esse pokémon não existe :(");
    }
  }
};
</script>

<style scoped></style>
