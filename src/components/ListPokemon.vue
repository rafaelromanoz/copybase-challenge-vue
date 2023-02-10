<template>
  <div v-if="existsPoke">
    <section>
      <p>{{ getPoke.name }}</p>
      <img :src="getPoke.sprites.front_default" alt="foundPokemon" />
    </section>
    <section>
      <p>Evoluções</p>
      <div @click="handleClick(pokeEvolutions.baby.name, 'baby')">
        <p>{{ pokeEvolutions.baby.name }}</p>
        <img
          :src="pokeEvolutions.baby.sprites?.front_default"
          alt="babyEvolutionPokemon"
        />
      </div>
      <p>{{ pokeEvolutions.first.name }}</p>
      <img
        :src="pokeEvolutions.first.sprites?.front_default"
        alt="firstEvolutionPokemon"
      />
      <p>{{ pokeEvolutions.second.name }}</p>
      <img
        :src="pokeEvolutions.second.sprites?.front_default"
        alt="secondEvolutionPokemon"
      />
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
