<template>
  <div v-if="existsPoke">
    <p>{{ getPoke.name }}</p>
    <img :src="getPoke.sprites.front_default" />
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
  return store.getPokeInfo;
});
const existsPoke = computed(() => {
  return !(!getPoke.value || Object.keys(getPoke.value).length === 0);
});
</script>

<style scoped></style>
