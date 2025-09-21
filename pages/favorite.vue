<template>
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
    <!-- Characters -->
    <section class="flex flex-col pb-20 mx-auto">
      <div class="flex flex-col gap-7 justify-center xl:justify-start">
        <div class="flex gap-4 items-center">
          <h2 class="text-2xl font-bold">Personagens</h2>
          <button
            @click="mostrarTodos('characters')"
            class="flex gap-2 p-1 pr-2 rounded-[32px] bg-[#313234]"
          >
            <IconsSquareFour />
            {{ showAll.characters ? "Ver menos" : "Ver todos" }}
          </button>
        </div>

        <div v-if="favoritos.characters.length === 0" class="text-gray-500">
          Nenhum personagem favoritado.
        </div>

        <div class="flex flex-wrap md:grid md:grid-cols-4 gap-4 justify-center">
          <Card
            v-for="(c, i) in favoritos.characters"
            v-show="showAll.characters || i < 8"
            :key="c.id"
            class="w-full max-w-[294px] flex flex-col gap-4 p-4 rounded-lg"
          >
            <img
              :src="c.image"
              height="200"
              width="262"
              class="rounded-2xl h-[200px] object-cover"
            />

            <div class="grid grid-cols-[1fr,48px]">
              <div class="flex flex-col gap-4">
                <p class="text-base font-bold">{{ c.name }}</p>

                <div class="flex flex-col gap-2">
                  <div class="flex items-center gap-2">
                    <IconsPulse />
                    <p>
                      {{ c.status === "Alive" ? "Vivo" : "Morto" }}
                    </p>
                  </div>
                  <div class="flex items-center gap-2">
                    <IconsEspecie />
                    <p>{{ c.species }}</p>
                  </div>
                  <div class="flex items-center gap-2">
                    <IconsPlanet />
                    <p>{{ c.origin.name }}</p>
                  </div>
                </div>
              </div>

              <button @click="toggleCharacterLike(c.id)" class="self-start">
                <IconsHeartFilled v-if="c.liked" />
                <IconsHeartOutlined v-else />
              </button>
            </div>
            <SeeDocumentDetails :id="c.id" class="mt-auto" />
          </Card>
        </div>
      </div>
    </section>

    <!-- EPISÓDIOS -->
    <section class="flex flex-col pb-20 mx-auto">
      <div class="flex flex-col gap-7 justify-center xl:justify-start">
        <div class="flex gap-4 items-center">
          <h2 class="text-2xl font-bold">Episódios</h2>
          <button
            @click="mostrarTodos('episodes')"
            class="flex gap-2 p-1 pr-2 rounded-[32px] bg-[#313234]"
          >
            <IconsSquareFour />
            {{ showAll.episodes ? "Ver menos" : "Ver todos" }}
          </button>
        </div>

        <div v-if="favoritos.episodes.length === 0" class="text-gray-500">
          Nenhum episódio favoritado.
        </div>

        <div class="flex flex-wrap md:grid md:grid-cols-5 gap-4 justify-center">
          <card
            v-for="(e, i) in favoritos.episodes"
            v-show="showAll.episodes || i < 5"
            :key="e.id"
            class="max-h-[156px] max-w-[232px] flex flex-col justify-between gap-2"
          >
            <div class="flex items-center gap-2">
              <IconsPlay class="flex-[0_0_24px]" />
              <p>{{ e.name }} | {{ e.episode }}</p>
            </div>
            <div class="flex items-center justify-between">
              <SeeDocumentDetails
                class="my-auto"
                :id="e.id"
                :type="'episode'"
              />

              <button @click="toggleEpisodeLike(e.id)">
                <IconsHeartFilled v-if="e.liked" :width="32" :height="32" />
                <IconsHeartOutlined v-else :width="32" :height="32" />
              </button>
            </div>
          </card>
        </div>
      </div>
    </section>

    <!-- LOCAIS -->
    <section class="flex flex-col pb-20 mx-auto">
      <div class="flex flex-col gap-7 justify-center xl:justify-start">
        <div class="flex gap-4 items-center">
          <h2 class="text-2xl font-bold">Locais</h2>
          <button
            @click="mostrarTodos('locations')"
            class="flex gap-2 p-1 pr-2 rounded-[32px] bg-[#313234]"
          >
            <IconsSquareFour />
            {{ showAll.locations ? "Ver menos" : "Ver todos" }}
          </button>
        </div>

        <div v-if="favoritos.locations.length === 0" class="text-gray-500">
          Nenhum local favoritado.
        </div>

        <div class="flex flex-wrap md:grid md:grid-cols-6 gap-4 justify-center">
          <Card
            v-for="(l, i) in favoritos.locations"
            v-show="showAll.locations || i < 6"
            :key="l.id"
            class="max-w-[174px] max-h-[252px] md:min-h-[252px] flex flex-col items-center justify-between"
          >
            <div class="flex flex-col flex-wrap text-center items-center">
              <IconsPlanet :width="48" :height="48" />
              <p class="text-center">{{ l.type }}</p>
              <p>{{ l.name }}</p>
            </div>

            <div class="flex md:flex-col items-center gap-4">
              <SeeDocumentDetails
                :id="l.id"
                :type="'location'"
                class="my-auto"
              />
              <button @click="toggleLocationLike(l.id)">
                <IconsHeartFilled v-if="l.liked" :width="32" :height="32" />
                <IconsHeartOutlined v-else :width="32" :height="32" />
              </button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  </PageContainer>
</template>

<script setup>
import { ref, computed, onMounted, useHead } from "vue";
import { useCharacters } from "@/composables/useCharacters";
import { useEpisodes } from "@/composables/useEpisodes";
import { useLocations } from "@/composables/useLocations";

const { data } = await useFetch("https://rickandmortyapi.com/api/character/2");

const {
  characters,
  fetchCharacters,
  toggleLike: toggleCharacterLike,
} = useCharacters();
const {
  episodes,
  fetchEpisodes,
  toggleLike: toggleEpisodeLike,
} = useEpisodes();
const {
  locations,
  fetchLocations,
  toggleLike: toggleLocationLike,
} = useLocations();

const pending = ref(true);

// controle de "ver todos" por tipo
const showAll = ref({ characters: false, episodes: false, locations: false });

// favoritos filtrados
const favoritos = computed(() => ({
  characters: characters.value.filter((c) => c.liked),
  episodes: episodes.value.filter((e) => e.liked),
  locations: locations.value.filter((l) => l.liked),
}));

// fetch de todos os dados apenas no cliente
onMounted(async () => {
  await Promise.all([fetchCharacters(), fetchEpisodes(), fetchLocations()]);
  pending.value = false;
});

// função de "ver todos / ver menos"
function mostrarTodos(type) {
  showAll.value[type] = !showAll.value[type];
}
</script>
