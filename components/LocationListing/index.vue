<template>
  <section class="w-full flex flex-col pb-20 mx-auto">
    <div
      class="flex flex-wrap items-center justify-center xl:justify-start gap-4"
    >
      <ListingHeader title="Localização" />

      <div
        class="flex flex-wrap lg:grid lg:grid-cols-[repeat(6,1fr)] items-center justify-center gap-9"
      >
        <Card
          v-for="currentLocation of data.results"
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
            <IconsHeartOutlined :width="32" :height="32" />
          </div>
        </Card>
      </div>
    </div>
  </section>
</template>

<script setup>
const { data } = await useFetch("https://rickandmortyapi.com/api/location");
</script>
