<template>
  <header class="flex gap-4">
    <h2 class="text-2xl font-bold">{{ title }}</h2>

    <button class="flex gap-2 p-1 pr-2 rounded-[32px] bg-[#313234]">
      <IconsSquareFour />
      Ver todos
    </button>
  </header>
</template>
<script setup>
import IconsSquareFour from "../icons/SquareFour.vue";

const props = defineProps({
  title: String,
});
</script>
