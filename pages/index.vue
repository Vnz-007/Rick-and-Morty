<template>
  <div class="flex flex-col gap-16">
    <div class="flex flex-col">
      <HeaderLogo />
      <HomeHeroHeader />
    </div>
    <PageContainer>
      <CharactersListing />

      <EpisodesListing />
    </PageContainer>
  </div>
</template>

<script lang="ts" setup>
useHead({
  title: "Rick And Morty - NuxtWiki",
});
</script>
