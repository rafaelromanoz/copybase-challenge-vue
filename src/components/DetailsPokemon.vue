<template>
  <section class="card-container">
    <div class="card-details">
      <img
        :src="
          getDetailsPokemonEvolutions.sprites?.other?.['official-artwork']
            ?.front_default
        "
        alt="pokemonImage"
        class="image-card-details"
      />
      <div class="card-content">
        <h2 style="text-align: center">
          Nome:
          <strong>{{
            capitalizeFirstLetter(getDetailsPokemonEvolutions.name)
          }}</strong>
        </h2>
        <p>
          Peso: <strong>{{ getDetailsPokemonEvolutions.weight }}</strong>
        </p>
        <p>
          Id: <strong>{{ getDetailsPokemonEvolutions.id }}</strong>
        </p>
        <p>
          Altura: <strong>{{ getDetailsPokemonEvolutions.height }}</strong>
        </p>
        <p>
          Experiência base:
          <strong>{{ getDetailsPokemonEvolutions.base_experience }}</strong>
        </p>
        <p>Habilidades:</p>
        <ul
          v-for="({ ability }, index) in getDetailsPokemonEvolutions.abilities"
          :key="index"
          class="ul-details"
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
import { capitalizeFirstLetter } from "@/utils/functions";

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
