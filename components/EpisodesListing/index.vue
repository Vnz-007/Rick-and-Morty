<template>
  <section class="flex flex-col w-full max-w-[1224px] pb-20 mx-auto">
    <div class="flex flex-wrap gap-7 justify-center xl:justify-start">
      <div class="flex gap-4 items-center">
        <h2 class="text-2xl font-bold">Episódios</h2>
        <button
          @click="mostrarTodos()"
          class="flex gap-2 p-1 pr-2 rounded-[32px] bg-[#313234]"
        >
          <IconsSquareFour />
          {{ showAll ? "Ver menos" : "Ver todos" }}
        </button>
      </div>

      <div
        class="flex flex-wrap lg:grid lg:grid-cols-[repeat(5,1fr)] justify-center gap-4"
      >
        <card
          v-for="(currentEpisode, index) in episodes"
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
            <button @click="toggleLike(index)">
              <IconsHeartFilled
                v-if="currentEpisode.liked"
                :width="32"
                :height="32"
              />
              <IconsHeartOutlined v-else :width="32" :height="32" />
            </button>
          </div>
        </card>
      </div>
    </div>
  </section>
</template>

<script setup>
const { data } = await useFetch("https://rickandmortyapi.com/api/episode");
const showAll = ref(false);
const episodes = ref([]);

onMounted(() => {
  if (data.value) {
    episodes.value = data.value.results.map((ep) => ({
      ...ep,
      liked:
        JSON.parse(localStorage.getItem(`episode-liked-${ep.id}`)) || false,
    }));
  }
});

function mostrarTodos() {
  showAll.value = !showAll.value;
}

function toggleLike(index) {
  const episode = episodes.value[index];
  episode.liked = !episode.liked;
  localStorage.setItem(
    `episode-liked-${episode.id}`,
    JSON.stringify(episode.liked)
  );
}
</script>
