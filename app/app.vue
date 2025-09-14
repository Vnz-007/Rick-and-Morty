<template>
  <div class="text-white">
    <h1 class="blue-500">Rick and Morty</h1>

    <div class="flex flex-wrap w-full max-w-[1224px] mx-auto gap-4">
      <div
        v-for="currentCharacter of data.results"
        class="flex flex-col gap-4 p-4 rounded-lg bg-[#313234]"
      >
        <img
          :src="currentCharacter.image"
          height="200"
          width="262"
          class="rounded-2xl"
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
            <IconsHeartFilled />
            <IconsHeartOutlined />
          </span>
        </div>

        <NuxtLink :to="currentCharacter.url" class="mt-2">Saiba Mais</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import IconsHeartFilled from "../components/icons/HeartFilled.vue";
import IconsHeartOutlined from "../components/icons/HeartOutlined.vue";

const { data, status, error, refresh, clear } = await useFetch(
  "https://rickandmortyapi.com/api/character"
);

console.log(data.value);
</script>
