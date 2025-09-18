<template>
  <footer class="flex flex-col items-center justify-center">
    <PageContainer>
      <div
        class="w-full flex items-center justify-between pb-10 md:pb-20 border-b-2"
      >
        <img src="/images/brands/rick-and-morty-logo.png" alt="Footer Image" />
        <BackToTop />
      </div>

      <div
        class="w-full flex flex-col md:flex-row items-center justify-between py-7"
      >
        <p class="text-sm font-semibold text-gray-400">
          &copy; 2024 Rick and Morty. All rights reserved.
        </p>

        <div class="flex items-center gap-2">
          <IconsCode />
          <p class="text-sm font-semibold text-gray-400">
            Desenvolvido por
            <a
              href="https://github.com/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              class="text-cyan-500 font-bold"
              >Vinícius Loiola</a
            >
          </p>
        </div>
      </div>
    </PageContainer>
  </footer>
</template>

<script setup>
import PageContainer from "../PageContainer/index.vue";
</script>
