<template>
  <div class="flex flex-col gap-16">
    <HomeHeroHeader />
    <PageContainer>
      <CharactersListing />

      <EpisodesListing />
    </PageContainer>
  </div>
</template>

<script lang="ts" setup>
import { useHead } from "nuxt/app";
import HomeHeroHeader from "../components/HomeHeroHeader/index.vue";
import PageContainer from "../components/PageContainer/index.vue";
import CharactersListing from "../components/CharactersListing/index.vue";
import EpisodesListing from "../components/EpisodesListing/index.vue";

useHead({
  title: "Rick And Morty - NuxtWiki",
});
</script>
