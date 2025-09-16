<template>
  <button @click="scrollToTop" class="flex items-center gap-2 rounded-full">
    Back to Top
    <IconsToTop />
  </button>
</template>

<script setup>
import IconsToTop from "../icons/ToTop.vue";
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
</script>
