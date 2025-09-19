<template>
  <NuxtLink
    :to="urlToRedirect"
    class="flex items-center self-end py-[6px] pl-1 pr-2 gap-2 text-sm rounded-[32px] bg-[#11B0C8]"
  >
    <IconsInfo />
    Saiba Mais
  </NuxtLink>
</template>

<script setup>
const props = defineProps({
  id: Number,
  type: {
    type: String,
    default: "character",
  },
});

const urlToRedirect = computed(() => {
  if (props.type === "character") {
    return `/character/${props.id}`;
  } else if (props.type === "episode") {
    return `/episode/${props.id}`;
  } else {
    return `/location/${props.id}`;
  }
});
</script>
