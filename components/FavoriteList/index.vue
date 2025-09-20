<template>
  <NuxtLink
    to="/favorite"
    class="flex items-center justify-center py-1 pr-3 pl-2 gap-2 text-white bg-cyan-500 rounded-full"
  >
    <IconsHeartOutlined :width="24" :height="24" :color="'white'" />
    Lista de Favoritos
  </NuxtLink>
</template>

<script setup>
// import { ref } from "vue";

// const favorites = ref([]);

// function addToFavorites(character) {
//   favorites.value.push(character);
// }

// function removeFromFavorites(character) {
//   favorites.value = favorites.value.filter((c) => c.id !== character.id);
// }
</script>
