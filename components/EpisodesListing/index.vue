<template>
  <section class="flex flex-col w-full max-w-[1224px] pb-20 mx-auto">
    <div class="flex flex-wrap gap-4 justify-center xl:justify-start">
      <h2 class="text-2xl font-bold">Personagens</h2>
      <button
        @click="mostrarTodos()"
        class="flex gap-2 p-1 pr-2 rounded-[32px] bg-[#313234]"
      >
        <IconsSquareFour />
        {{ showAll ? "Ver menos" : "Ver todos" }}
      </button>

      <div
        class="flex flex-wrap lg:grid lg:grid-cols-[repeat(5,1fr)] justify-center gap-4"
      >
        <card
          v-for="(currentEpisode, index) of data.results"
          v-show="showAll || index < 5"
          :key="currentEpisode.id"
          class="min-h-[150px] max-w-[232px] flex flex-col justify-between gap-2"
        >
          <div class="flex items-center gap-2">
            <IconsPlay class="flex-[0_0_24px]" />
            <p>{{ currentEpisode.name }} | {{ currentEpisode.episode }}</p>
          </div>
          <div class="flex items-center justify-between">
            <SeeDocumentDetails
              class="my-auto"
              :id="currentEpisode.id"
              :type="'episode'"
            />
            <IconsHeartFilled :width="32" :height="32" />
          </div>
        </card>
      </div>
    </div>
  </section>
</template>

<script setup>
const { data } = await useFetch("https://rickandmortyapi.com/api/episode");
const showAll = ref(false);
function mostrarTodos() {
  showAll.value = !showAll.value;
}
</script>
