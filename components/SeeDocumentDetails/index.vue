<template>
  <NuxtLink :to="actionUrl" target="_blank" rel="noopener noreferrer">
    <IconsInfo />
    Saiba Mais
  </NuxtLink>
</template>

<script setup>
import IconsInfo from "../components/icons/Info.vue";

const props = defineProps({
  actionUrl: String,
});
</script>
