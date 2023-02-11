<template>
  <div v-if="existsPoke">
    <section class="card-container">
      <div class="card">
        <img :src="getPoke.sprites.front_default" alt="foundPokemon"/>
        <div class="card-content">
          <h2 class="card-title">{{ capitalizeFirstLetter(getPoke.name) }}</h2>
          <a class="see-details" @click="handleClick(getPoke.name, 'searched')">
            Ver detalhes do pokémon
          </a>
        </div>
      </div>
    </section>
    <h1 style="text-align: center">Evoluções</h1>
    <section class="card-container" v-if="existsEvolution">
      <div
        class="card"
        v-if="
          getPoke.name !== pokeEvolutions.baby.name && pokeEvolutions.baby.name
        "
      >
        <img
          :src="pokeEvolutions.baby.sprites?.front_default"
          alt="babyEvolutionPokemon"
        />
        <div class="card-content">
          <h2>{{ capitalizeFirstLetter(pokeEvolutions.baby.name) }}</h2>
          <a
            class="see-details"
            @click="handleClick(pokeEvolutions.baby.name, 'baby')"
          >
            Ver detalhes do pokémon
          </a>
        </div>
      </div>
      <div
        class="card"
        v-if="
          getPoke.name !== pokeEvolutions.first.name &&
          pokeEvolutions.first.name
        "
      >
        <img
          :src="pokeEvolutions.first.sprites?.front_default"
          alt="firstEvolutionPokemon"
        />
        <div class="card-content">
          <h2>{{ capitalizeFirstLetter(pokeEvolutions.first.name) }}</h2>
          <a
            class="see-details"
            @click="handleClick(pokeEvolutions.first.name, 'first')"
          >
            Ver detalhes do pokémon
          </a>
        </div>
      </div>
      <div
        class="card"
        v-if="
          getPoke.name !== pokeEvolutions.second.name &&
          pokeEvolutions.second.name
        "
      >
        <img
          :src="pokeEvolutions.second.sprites?.front_default"
          alt="secondEvolutionPokemon"
        />
        <div class="card-content">
          <h2>{{ capitalizeFirstLetter(pokeEvolutions.second.name) }}</h2>
          <a
            class="see-details"
            @click="handleClick(pokeEvolutions.second.name, 'second')"
          >
            Ver detalhes do pokémon
          </a>
        </div>
      </div>
    </section>
    <p v-else style="text-align: center">Esse pokémon não tem evoluções</p>
  </div>
  <div v-else>
    <p style="text-align: center">Procure um pokémon!</p>
  </div>
</template>
<script setup>
import { computed } from "vue";
import { useRouter } from "vue-router";
import { pokemonStore } from "@/stores/pokemon";
import { capitalizeFirstLetter } from "@/utils/functions";

const store = pokemonStore();
const router = useRouter();

const getPoke = computed(() => {
  return store.getPokeInfoSpecie;
});

const pokeEvolutions = computed(() => {
  return store.getPokeInfoEvolutionChains;
});

const existsPoke = computed(() => {
  return !(!getPoke.value || Object.keys(getPoke.value).length === 0);
});

const existsEvolution = computed(() => {
  return (
    Object.keys(store.getPokeInfoEvolutionChains.first).length !== 0 &&
    Object.keys(store.getPokeInfoEvolutionChains.second).length !== 0
  );
});

const handleClick = (pokemonName, pokemonType) => {
  router.push({
    name: "pokemonDetail",
    params: {
      pokemonName,
      pokemonType,
    },
  });
};
</script>

<style scoped></style>
