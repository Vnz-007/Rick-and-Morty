<template>
  <header>
    <PageContainer>
      <div
        class="absolute w-full max-w-[1220px] top-10 flex items-center justify-between"
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
