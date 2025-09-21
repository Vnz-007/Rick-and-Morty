<template>
  <section class="w-full flex flex-col pb-20 mx-auto">
    <div
      class="flex flex-wrap items-center justify-center xl:justify-start gap-4"
    >
      <h2 class="text-2xl font-bold">Localidades</h2>
      <button
        @click="mostrarTodos()"
        class="flex gap-2 p-1 pr-2 rounded-[32px] bg-[#313234]"
      >
        <IconsSquareFour />
        {{ showAll ? "Ver menos" : "Ver todos" }}
      </button>

      <div
        class="flex flex-wrap lg:grid lg:grid-cols-[repeat(6,1fr)] items-center justify-center gap-9"
      >
        <Card
          v-for="(currentLocation, index) in locations"
          v-show="showAll || index < 6"
          :key="currentLocation.id"
          class="max-w-[163px] min-h-[190px] md:min-h-[252px] flex flex-col items-center justify-between"
        >
          <div class="flex flex-col flex-wrap text-center items-center">
            <IconsPlanet :width="48" :height="48" />
            <p class="text-center">{{ currentLocation.type }}</p>
            <p>{{ currentLocation.name }}</p>
          </div>

          <div class="flex md:flex-col items-center gap-4">
            <SeeDocumentDetails
              :id="currentLocation.id"
              :type="'location'"
              class="my-auto"
            />
            <button @click="toggleLike(index)">
              <IconsHeartFilled
                v-if="currentLocation.liked"
                :width="32"
                :height="32"
              />
              <IconsHeartOutlined v-else :width="32" :height="32" />
            </button>
          </div>
        </Card>
      </div>
    </div>
  </section>
</template>

<script setup>
const { data } = await useFetch("https://rickandmortyapi.com/api/location");
const showAll = ref(false);
const locations = ref([]);

onMounted(() => {
  if (data.value) {
    locations.value = data.value.results.map((loc) => ({
      ...loc,
      liked:
        JSON.parse(localStorage.getItem(`location-liked-${loc.id}`)) || false,
    }));
  }
});

function mostrarTodos() {
  showAll.value = !showAll.value;
}

function toggleLike(index) {
  const location = locations.value[index];
  location.liked = !location.liked;
  localStorage.setItem(
    `location-liked-${location.id}`,
    JSON.stringify(location.liked)
  );
}
</script>
