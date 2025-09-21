<template>
  <section class="flex flex-wrap gap-4">
    <div
      v-for="card in favoritos"
      :key="card.id"
      class="p-4 rounded-lg shadow bg-white"
    >
      <h3>{{ card.name }}</h3>
      <button
        @click="toggleLike(card.id)"
        class="mt-2 px-3 py-1 bg-red-500 text-white rounded"
      >
        Remover dos favoritos
      </button>
    </div>

    <p v-if="!pending && favoritos.length === 0" class="text-gray-500">
      Nenhum favorito ainda.
    </p>

    <p v-if="pending" class="text-gray-500">Carregando favoritos...</p>
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
import { computed } from "vue";

const { characters, fetchCharacters, toggleLike } = useCharacters();
const pending = ref(true);

await fetchCharacters();
pending.value = false;

const favoritos = computed(() => characters.value.filter((c) => c.liked));
</script>
