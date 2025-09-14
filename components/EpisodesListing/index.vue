<template>
  <section>
    <ListingHeader title="Episódios" />
    <card v-for="currentEpisode of data.results" :key="currentEpisode.id">
      <p>{{ currentEpisode.name }} | {{ currentEpisode.episode }}</p>
    </card>
  </section>
</template>

<script setup>
import Card from "../Card/index.vue";
import ListingHeader from "../ListingHeader/index.vue";

const { data, status, error, refresh, clear } = await useFetch(
  "https://rickandmortyapi.com/api/episode"
);

console.log(data.value.results);
</script>
