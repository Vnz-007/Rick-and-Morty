<template>
  <section class="flex flex-col pb-20 mx-auto gap-8">
    <div class="flex flex-wrap gap-4 justify-center xl:justify-start">
      <ListingHeader title="Personagens" />

      <div class="flex flex-wrap gap-4 justify-center">
        <Card
          v-for="currentCharacter of data.results"
          :key="currentCharacter.id"
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

          <SeeDocumentDetails :id="currentCharacter.id" class="mt-auto" />
        </Card>
      </div>
    </div>
  </section>
</template>

<script setup>
// Index.vue - Components
import Card from "../components/Card/index.vue";
import ListingHeader from "../components/ListingHeader/index.vue";
import SeeDocumentDetails from "../components/SeeDocumentDetails/index.vue";
// Icons.vue - Components
import IconsHeartFilled from "../components/icons/HeartFilled.vue";
import IconsHeartOutlined from "../components/icons/HeartOutlined.vue";

const { data } = await useFetch("https://rickandmortyapi.com/api/character");

console.log(data.results);
</script>
