<template>
  <div v-if="existsPoke">
    <p>{{ getPoke.name }}</p>
    <img :src="getPoke.sprites.front_default" alt="foundPokemon" />
    <p>Evoluções</p>
    <p>{{ pokeEvolutions.baby.name }}</p>
    <img
      :src="pokeEvolutions.baby.sprites.front_default"
      alt="babyEvolutionPokemon"
    />
    <p>{{ pokeEvolutions.first.name }}</p>
    <img
      :src="pokeEvolutions.first.sprites.front_default"
      alt="firstEvolutionPokemon"
    />
    <p>{{ pokeEvolutions.second.name }}</p>
    <img
      :src="pokeEvolutions.second.sprites.front_default"
      alt="secondEvolutionPokemon"
    />
  </div>
  <div v-else>
    <p>Procure um pokemon!</p>
  </div>
</template>
<script setup>
import { computed } from "vue";
import { pokemonStore } from "@/stores/pokemon";
const store = pokemonStore();
const getPoke = computed(() => {
  return store.getPokeInfoSpecie;
});
const pokeEvolutions = computed(() => {
  return store.getPokeInfoEvolutionChains;
});

const existsPoke = computed(() => {
  return !(!getPoke.value || Object.keys(getPoke.value).length === 0);
});
</script>

<style scoped></style>
