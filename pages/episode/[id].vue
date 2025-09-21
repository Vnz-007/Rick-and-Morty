<template>
  <section>
    <HeaderLogoB class="px-0 bg-transparent" />
    <div class="text-2xl pt-8 pb-24 md:pb-52 border-b-2 border-cyan-500">
      <PageContainer>
        <div class="flex flex-col gap-10 md:gap-20">
          <div class="flex flex-col gap-6">
            <IconsPlay width="74" height="74" />
            <div class="flex flex-wrap items-center gap-4">
              <h1
                class="flex items-center justify-center text-4xl md:text-5xl font-bold leading-[60px]"
              >
                {{ data.name }}
              </h1>
              <IconsHeartOutlined :width="56" :height="56" />
            </div>

            <div class="flex flex-wrap items-center gap-6">
              <div class="flex items-center gap-2">
                <IconsCalendarBlank />
                <p>{{ data.air_date }}</p>
              </div>

              <div class="flex items-center gap-2">
                <IconsQueue />
                <p>{{ data.episode }}</p>
              </div>
            </div>
          </div>

          <div class="flex flex-wrap items-center gap-2">
            <IconsSmiley />
            <p>
              {{ data.characters.length }} Personagens participaram deste
              episódio
            </p>
          </div>
        </div>
      </PageContainer>
    </div>

    <PageContainer class="pt-16">
      <EpisodesListing :episodeId="data.id" />
    </PageContainer>
  </section>
</template>
<script setup>
useHead({
  title: "Episódios | Rick And Morty",
});

import { useRoute, useFetch } from "#app";

const route = useRoute();
const { id } = route.params;
const { data } = await useFetch(
  `https://rickandmortyapi.com/api/episode/${id}`
);
</script>
