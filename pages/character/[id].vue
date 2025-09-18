<template>
  <section>
    <HeaderLogo class="bg-transparent" />
    <PageContainer class="pt-8">
      <div class="flex flex-col md:flex-row md:gap-16 gap-8">
        <img
          :src="data.image"
          alt=""
          width="369"
          height="461"
          class="w-[300px] rounded-2xl"
        />

        <div class="flex flex-col md:gap-12 gap-8">
          <div class="flex flex-wrap items-center gap-4">
            <h1 class="text-4xl md:text-5xl leading-[60px]">
              {{ data.name }}
            </h1>

            <IconsHeartOutlined width="56" height="56" />
          </div>

          <div class="flex items-center gap-2 text-2xl">
            <IconsPlay />
            <p>Participou de {{ data.episode.length }} episódios</p>
          </div>

          <div class="flex gap-6 text-2xl">
            <div class="flex items-center justify-center gap-2">
              <IconsPulse width="32" />
              <span>{{ data.status === "Alive" ? "Vivo" : "Morto" }}</span>
            </div>
            <div class="flex items-center justify-center gap-2">
              <IconsEspecie width="32" />
              <span>{{ data.species }}</span>
            </div>
            <div class="flex items-center justify-center gap-2">
              <IconsGender width="32" />
              <span>{{ data.gender }}</span>
            </div>
          </div>
        </div>
      </div>
    </PageContainer>
  </section>
</template>

<script setup>
import { useHead } from "nuxt/app";

const route = useRoute();
const { id } = route.params;
const { data } = await useFetch(
  `https://rickandmortyapi.com/api/character/${id}`
);

useHead({
  title: `${data.value.name} - Rick And Morty`,
  link: [
    {
      rel: "icon",
      type: "image/x-icon",
      href: data.value.image,
    },
  ],
});
</script>
