<template>
  <p>pokemon details</p>
</template>

<script setup>
import { useRoute } from "vue-router";
import { pokemonStore } from "@/stores/pokemon";
import { computed } from "vue";

const store = pokemonStore();
const route = useRoute();

const getDetailsPokemon = computed(() => {
  return store.getPokeInfoEvolutionChains[route.params.pokemonType];
});
</script>

<style scoped></style>
