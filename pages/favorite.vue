<template>
  <section class="flex flex-wrap gap-4">
    <div
      v-for="card in favoritos"
      :key="card.id"
      class="p-4 rounded-lg shadow bg-white"
    >
      <h3>{{ card.name }}</h3>
      <button
        @click="card.liked = false"
        class="mt-2 px-3 py-1 bg-red-500 text-white rounded"
      >
        Remover dos favoritos
      </button>
    </div>

    <p v-if="favoritos.length === 0" class="text-gray-500">
      Nenhum favorito ainda.
    </p>
  </section>
</template>

<!-- <template>
  <header class="border-b-2 border-cyan-500">
    <HeaderLogoC class="bg-transparent" />
    <PageContainer>
      <div class="flex flex-col md:flex-row justify-between">
        <div class="flex flex-col pt-12">
          <IconsHeartOutlined />
          <h1
            class="flex flex-col items-start justify-center text-5xl font-bold leading-[60px]"
          >
            Todos os seus
            <span class="text-cyan-500">favoritos.</span>
          </h1>
        </div>

        <img
          src="/images/characters/Rick-And-Morty-Highlight.png"
          alt=""
          class="md:pr-44"
        />
      </div>
    </PageContainer>
  </header>
  <PageContainer class="pt-16">
    <CharactersListing />
    <EpisodesListing />
    <LocationListing />
  </PageContainer>
</template> -->

<script setup>
import { ref, computed } from "vue";

const { data } = await useFetch("https://rickandmortyapi.com/api/character");

// garante que seja um array de personagens
const cards = ref(data.value.results.map((c) => ({ ...c, liked: false })));

// só pega os curtidos
const favoritos = computed(() => cards.value.filter((c) => c.liked));
</script>
