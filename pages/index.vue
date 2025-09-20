<template>
  <div class="flex flex-col gap-16">
    <div class="flex flex-col shadow-md">
      <HeaderLogoA />
      <HomeHeroHeader />
    </div>
    <PageContainer>
      <CharactersListing />

      <EpisodesListing />

      <LocationListing />
    </PageContainer>
  </div>
</template>

<script lang="ts" setup>
useHead({
  title: "Rick And Morty - NuxtWiki",
});
</script>
