<template>
  <section class="card-container">
    <div class="card">
      <img
        :src="
          getDetailsPokemonEvolutions.sprites?.other?.['official-artwork']
            ?.front_default
        "
        alt="pokemonImage"
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
<!--        <div-->
<!--          v-for="(-->
<!--            { back_default, back_shiny }, index-->
<!--          ) in getDetailsPokemonEvolutions.sprites"-->
<!--          :key="index"-->
<!--        >-->
<!--          <img :src="back_default" alt="pokeImage" />-->
<!--          <img :src="back_shiny" alt="pokeImage" />-->
<!--        </div>-->
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
