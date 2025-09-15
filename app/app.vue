<template>
  <main class="text-white bg-[#1e1e1e]">
    <div class="max-w-[1224px] flex flex-col gap-16 mx-auto">
      <CharactersListing />
      <EpisodesListing />
    </div>
  </main>
</template>

<script lang="ts" setup>
import CharactersListing from "../components/CharactersListing/index.vue";
import EpisodesListing from "../components/EpisodesListing/index.vue";
</script>
