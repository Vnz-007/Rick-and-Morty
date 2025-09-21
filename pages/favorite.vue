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
    <section class="flex flex-col pb-20 mx-auto">
      <div class="flex flex-wrap gap-7 justify-center xl:justify-start">
        <div class="flex gap-4 items-center">
          <h2 class="text-2xl font-bold">Personagens</h2>
          <button
            @click="mostrarTodos()"
            class="flex gap-2 p-1 pr-2 rounded-[32px] bg-[#313234]"
          >
            <IconsSquareFour />
            {{ showAll ? "Ver menos" : "Ver todos" }}
          </button>
        </div>

        <div class="flex flex-wrap gap-4 justify-center">
          <Card
            v-for="(card, index) in favoritos"
            v-show="showAll || index < 8"
            :key="card.id"
            class="w-full max-w-[294px] flex flex-col gap-4 p-4 rounded-lg"
          >
            <img
              :src="card.image"
              height="200"
              width="262"
              class="rounded-2xl h-[200px] object-cover"
            />
            <div class="grid grid-cols-[1fr,48px]">
              <div class="flex flex-col gap-4">
                <p class="text-base font-bold">{{ card.name }}</p>

                <div class="flex flex-col gap-2">
                  <div class="flex items-center gap-2">
                    <IconsPulse />
                    <p>
                      {{ card.status === "Alive" ? "Vivo" : "Morto" }}
                    </p>
                  </div>
                  <div class="flex items-center gap-2">
                    <IconsEspecie />
                    <p>{{ card.species }}</p>
                  </div>
                  <div class="flex items-center gap-2">
                    <IconsPlanet />
                    <p>{{ card.origin.name }}</p>
                  </div>
                </div>
              </div>
            </div>

            <button @click="toggleLike(card.id)" class="">
              <IconsHeartFilled />
            </button>
          </Card>
        </div>
      </div>

      <p v-if="!pending && favoritos.length === 0" class="text-gray-500">
        Nenhum favorito ainda.
      </p>

      <p v-if="pending" class="text-gray-500">Carregando favoritos...</p>
    </section>
  </PageContainer>
</template>

<script setup>
import { computed } from "vue";

const { characters, fetchCharacters, toggleLike } = useCharacters();
const pending = ref(true);
const favoritos = computed(() => characters.value.filter((c) => c.liked));
const showAll = ref(false);

await fetchCharacters();
pending.value = false;

function mostrarTodos() {
  showAll.value = !showAll.value;
}
</script>
