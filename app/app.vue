<template>
  <main class="text-white bg-[#1e1e1e]">
    <section class="flex flex-col w-full max-w-[1224px] mx-auto gap-8">
      <div class="flex flex-wrap gap-4 justify-center xl:justify-start">
        <header class="flex gap-4">
          <h2 class="text-2xl font-bold">Personagens</h2>

          <button class="flex gap-2 p-1 pr-2 rounded-[32px] bg-[#313234]">
            <IconsSquareFour />
            Ver todos
          </button>
        </header>

        <div class="flex flex-wrap gap-4 justify-center">
          <div
            v-for="currentCharacter of data.results"
            class="w-full max-w-[294px] flex flex-col gap-4 p-4 rounded-lg bg-[#313234]"
          >
            <img
              :src="currentCharacter.image"
              height="200"
              width="262"
              class="rounded-2xl h-[200px] object-cover"
            />

            <div class="grid grid-cols-[1fr,48px]">
              <div class="flex flex-col gap-4">
                <p class="text-base font-bold">{{ currentCharacter.name }}</p>

                <div class="flex flex-col gap-2">
                  <p>
                    {{ currentCharacter.status === "Alive" ? "Vivo" : "Morto" }}
                  </p>

                  <p>{{ currentCharacter.species }}</p>
                  <p>{{ currentCharacter.origin.name }}</p>
                </div>
              </div>

              <span>
                <IconsHeartFilled v-if="currentCharacter.status === 'Alive'" />
                <IconsHeartOutlined v-else />
              </span>
            </div>

            <NuxtLink
              :to="currentCharacter.url"
              class="flex items-center self-end py-[6px] pl-1 pr-2 mt-auto gap-2 text-sm rounded-[32px] bg-[#11b0c0]"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconsInfo />
              Saiba Mais
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script lang="ts" setup>
import IconsInfo from "../components/icons/Info.vue";
import IconsSquareFour from "../components/icons/SquareFour.vue";
import IconsHeartFilled from "../components/icons/HeartFilled.vue";
import IconsHeartOutlined from "../components/icons/HeartOutlined.vue";

const { data, status, error, refresh, clear } = await useFetch(
  "https://rickandmortyapi.com/api/character"
);

console.log(data.value);
</script>
