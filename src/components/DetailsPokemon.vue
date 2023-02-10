<template>
  <section class="card-container">
    <div class="card">
      <img
        :src="getDetailsPokemonEvolutions.sprites?.front_default"
        alt="pokemonImage"
      />
      <div class="card-content">
        <p>
          Nome: <strong>{{ getDetailsPokemonEvolutions.name }}</strong>
        </p>
        <p>Habilidades</p>
        <ul
          v-for="({ ability }, index) in getDetailsPokemonEvolutions.abilities"
          :key="index"
        >
          <li>{{ ability.name }}</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useRoute } from "vue-router";
import { pokemonStore } from "@/stores/pokemon";
import { computed } from "vue";

const store = pokemonStore();
const route = useRoute();

const getDetailsPokemonEvolutions = computed(() => {
  return store.getPokeInfoEvolutionChains[route.params.pokemonType];
});
</script>

<style scoped></style>
