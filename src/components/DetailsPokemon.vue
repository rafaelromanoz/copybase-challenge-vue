<template>
  <section class="card-container">
    <div class="card">
      <img
        :src="
          getDetailsPokemonEvolutions.sprites?.other?.['official-artwork']
            ?.front_default
        "
        alt="pokemonImage"
        class="image-card-details"
      />
      <div class="card-content">
        <p>
          Nome: <strong>{{ getDetailsPokemonEvolutions.name }}</strong>
        </p>
        <p>Habilidades:</p>
        <ul
          v-for="({ ability }, index) in getDetailsPokemonEvolutions.abilities"
          :key="index"
        >
          <li>{{ ability.name }}</li>
        </ul>
        <br />
        <p>Tipo:</p>
        <ul
          v-for="({ type }, index) in getDetailsPokemonEvolutions.types"
          :key="index"
        >
          <li>{{ type.name }}</li>
        </ul>
        <br />
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
  if (route.params.pokemonType === "searched") {
    return store.getPokeInfoSpecie;
  }
  return store.getPokeInfoEvolutionChains[route.params.pokemonType];
});
</script>

<style scoped></style>
