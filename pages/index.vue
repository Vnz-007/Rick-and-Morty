<template>
  <div class="flex flex-col gap-16">
    <CharactersListing />
    <EpisodesListing />
  </div>
</template>

<script lang="ts" setup>
import { useHead } from "nuxt/app";
import CharactersListing from "../components/CharactersListing/index.vue";
import EpisodesListing from "../components/EpisodesListing/index.vue";

useHead({
  title: "Rick And Morty - NuxtWiki",
});
</script>
