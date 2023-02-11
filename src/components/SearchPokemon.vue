<template>
  <div class="search-container">
    <input
      type="text"
      v-model="pokemonToSearch"
      v-on:keyup.enter="fetchPokemonApi"
      placeholder="Nome do pokémon"
    />
    <button class="search-button" @click="fetchPokemonApi">Pesquisar</button>
  </div>
</template>
<script setup>
import { pokemonStore } from "@/stores/pokemon";
import { ref } from "vue";
import { useToast } from "vue-toastification";

const pokemonToSearch = ref("");
const toast = useToast();
const store = pokemonStore();

const fetchPokemonApi = async () => {
  try {
    store.foundPokemonBySpecie.value =
      await store.getPokemonBySpecieAndEvolutionChain(
        pokemonToSearch.value.toLowerCase()
      );
  } catch (error) {
    console.error(error);
    store.resetStateWhenPokemonEvolutionsNotFound();
    if (!error.request.responseURL.includes("undefined")) {
      toast.error("Esse pokémon não existe");
    }
  }
};
</script>

<style scoped></style>
