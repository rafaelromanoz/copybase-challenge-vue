<template>
  <div v-if="existsPoke">
    <h1>Pokémon pesquisado</h1>
    <section class="card-container">
      <div class="card">
        <img :src="getPoke.sprites.front_default" alt="foundPokemon" />
        <div class="card-content">
          <h2 class="card-title">{{ getPoke.name }}</h2>
          <a class="see-details" @click="handleClick(getPoke.name, 'searched')">
            Ver detalhes do pokémon
          </a>
        </div>
      </div>
    </section>
    <h1>Evoluções</h1>
    <section class="card-container">
      <div
        v-if="
          getPoke.name !== pokeEvolutions.baby.name && pokeEvolutions.baby.name
        "
        @click="handleClick(pokeEvolutions.baby.name, 'baby')"
        class="card"
      >
        <img
          :src="pokeEvolutions.baby.sprites?.front_default"
          alt="babyEvolutionPokemon"
        />
        <div class="card-content">
          <h2>{{ pokeEvolutions.baby.name }}</h2>
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
          <h2>{{ pokeEvolutions.first.name }}</h2>
          <a
            class="see-details"
            @click="handleClick(pokeEvolutions.first.name, 'first')"
          >
            Ver detalhes do pokémon
          </a>
        </div>
      </div>
      <div
        v-if="
          getPoke.name !== pokeEvolutions.second.name &&
          pokeEvolutions.second.name
        "
        @click="handleClick(pokeEvolutions.second.name, 'second')"
        class="card"
      >
        <img
          :src="pokeEvolutions.second.sprites?.front_default"
          alt="secondEvolutionPokemon"
        />
        <div class="card-content">
          <h2>{{ pokeEvolutions.second.name }}</h2>
          <a
            class="see-details"
            @click="handleClick(pokeEvolutions.second.name, 'second')"
          >
            Ver detalhes do pokémon
          </a>
        </div>
      </div>
    </section>
  </div>
  <div v-else>
    <p>Procure um pokemon!</p>
  </div>
</template>
<script setup>
import { computed } from "vue";
import { useRouter } from "vue-router";
import { pokemonStore } from "@/stores/pokemon";

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
  return !(
    !store.getPokeInfoEvolutionChains.first.name &&
    !store.getPokeInfoEvolutionChains.baby.name &&
    !!store.getPokeInfoEvolutionChains.first.name
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
