<template>
  <section class="pb-16">
    <HeaderLogoC />
    <PageContainer>
      <div
        class="flex flex-col text-2xl gap-10 md:gap-20 pt-8 pb-52 border-b-2 border-cyan-500"
      >
        <div class="flex flex-col gap-6">
          <IconsPlanet :width="72" :height="72" />
          <div class="flex flex-wrap items-center gap-4">
            <h1 class="flex items-center justify-center text-5xl">
              {{ data.name }}
            </h1>
            <IconsHeartOutlined :width="56" :height="56" />
          </div>

          <div class="flex flex-wrap items-center gap-6">
            <div class="flex items-center gap-2">
              <IconsPlanet :width="32" :height="32" />
              <p>{{ data.type }}</p>
            </div>

            <div class="flex items-center gap-2">
              <IconsCubeFocus :width="32" :height="32" />
              <p>{{ data.dimension }}</p>
            </div>
          </div>
        </div>

        <div class="flex flex-wrap items-center gap-2">
          <IconsSmiley />
          <p>{{ data.residents.length }} Personagens localizados aqui</p>
        </div>
      </div>
    </PageContainer>
  </section>
</template>

<script setup>
import { useRoute, useFetch } from "#app";

const route = useRoute();
const { id } = route.params;
const { data } = await useFetch(
  `https://rickandmortyapi.com/api/location/${id}`
);
console.log(data.value);
</script>
