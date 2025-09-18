<template>
  <header class="bg-black">
    <PageContainer>
      <div
        class="w-full max-w-[1220px] flex items-center justify-between pt-16"
      >
        <img
          src="/images/brands/Logo-Header.png"
          alt=""
          width="220"
          height="64"
          class="object-contain"
        />

        <FavoriteList />
      </div>
    </PageContainer>
  </header>
</template>

<script setup>
import FavoriteList from "../FavoriteList/index.vue";
import PageContainer from "../PageContainer/index.vue";
</script>
