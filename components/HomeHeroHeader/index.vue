<template>
  <div
    class="w-full flex items-center justify-center px-4 md:px-0 text-white bg-black"
  >
    <div
      class="flex flex-col md:flex-row w-full max-w-[1220px] items-center justify-between"
    >
      <div
        class="w-full flex flex-col items-start justify-between gap-12 md:gap-16"
      >
        <div class="flex flex-col gap-6">
          <h1 class="text-5xl leading-tight font-bold">
            Saiba tudo em <br />
            um só <span class="text-cyan-500">lugar.</span>
          </h1>
          <p>Personagens, episódios, localizações e muito mais...</p>
        </div>

        <div class="flex flex-col items-start gap-6">
          <div class="flex items-center justify-center gap-4">
            <div class="flex py-1 pl-2 pr-3 gap-2 rounded-full bg-cyan-500">
              <IconsSun />
              <button>Claro</button>
            </div>
            <div class="flex py-1 pl-2 pr-3 gap-2 rounded-full bg-[#313234]">
              <IconsMoon />
              <button>Escuro</button>
            </div>
          </div>

          <div>
            <p class="text-cyan-500">Aí sim, Porr#@%&*</p>
          </div>
        </div>
      </div>

      <img src="/images/characters/Rick-Highlight.png" alt="" />
    </div>
  </div>
</template>

<script setup></script>
