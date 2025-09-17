<template>
  <section>
    <PageContainer class="pt-32">
      <div class="pb-8">
        <BackToHome />
      </div>

      <div class="flex gap-16">
        <img
          :src="data.image"
          alt=""
          width="369"
          height="461"
          class="rounded-2xl"
        />

        <div class="flex flex-col gap-12">
          <div class="flex items-center gap-4">
            <h1 class="text-5xl leading-[60px]">{{ data.name }}</h1>
            <IconsHeartOutlined />
          </div>

          <div class="flex items-center gap-2 text-sm">
            <IconsPlay />
            <p>Participou de {{ data.episode.length }} episódios</p>
          </div>

          <div class="flex gap-6">
            <span>{{ data.status === "Alive" ? "Vivo" : "Morto" }}</span>
            <span>{{ data.species }}</span>
            <span>{{ data.gender }}</span>
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
