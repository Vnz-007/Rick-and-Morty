<template>
  <NuxtLink
    :to="actionUrl"
    class="flex items-center self-end py-[6px] pl-1 pr-2 mt-auto gap-2 text-sm rounded-[32px] bg-[#11B0C8]"
    target="_blank"
    rel="noopener noreferrer"
  >
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
