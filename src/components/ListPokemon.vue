<template>
  <div v-if="isPokemonFound">
    <p>{{ foundPokemon.value.name }}</p>
  </div>
</template>
<script setup>
import { computed } from "vue";
import { pokemonStore } from "@/stores/pokemon";
const { foundPokemon } = pokemonStore();

const isPokemonFound = computed(() => {
  return Object.keys(foundPokemon.value) !== 0;
});
</script>

<style scoped></style>
