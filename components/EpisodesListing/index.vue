<template>
  <section>
    <card v-for="currentEpisode of data.results" :key="currentEpisode.id">
    </card>
  </section>
</template>

<script setup>
const { data, status, error, refresh, clear } = await useFetch(
  "https://rickandmortyapi.com/api/episode"
);

console.log(data.results);
</script>
