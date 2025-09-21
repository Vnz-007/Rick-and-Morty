<template>
  <section class="flex flex-col pb-20 mx-auto">
    <div class="flex flex-wrap gap-4 justify-center xl:justify-start">
      <h2 class="text-2xl font-bold">Personagens</h2>
      <button
        @click="mostrarTodos()"
        class="flex gap-2 p-1 pr-2 rounded-[32px] bg-[#313234]"
      >
        <IconsSquareFour />
        {{ showAll ? "Ver menos" : "Ver todos" }}
      </button>

      <div class="flex flex-wrap gap-4 justify-center">
        <Card
          v-for="(currentCharacter, index) of data.results"
          v-show="showAll || index < 8"
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
                <div class="flex items-center gap-2">
                  <IconsPulse />
                  <p>
                    {{ currentCharacter.status === "Alive" ? "Vivo" : "Morto" }}
                  </p>
                </div>
                <div class="flex items-center gap-2">
                  <IconsEspecie />
                  <p>{{ currentCharacter.species }}</p>
                </div>
                <div class="flex items-center gap-2">
                  <IconsPlanet />
                  <p>
                    {{ currentCharacter.origin.name }}
                  </p>
                </div>
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
const { data } = await useFetch("https://rickandmortyapi.com/api/character");
const showAll = ref(false);

function mostrarTodos() {
  showAll.value = !showAll.value;
}
</script>
