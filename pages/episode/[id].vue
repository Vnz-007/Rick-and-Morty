<template>
  <section class="pb-16">
    <div class="flex flex-col text-2xl gap-20 pb-52 border-b-2 border-cyan-500">
      <div class="flex flex-col gap-6">
        <IconsPlay width="74" height="74" />
        <div class="flex items-center gap-4">
          <h1 class="text-5xl">{{ data.name }}</h1>
          <IconsHeartOutlined width="56" height="56" />
        </div>

        <div class="flex items-center gap-6">
          <div class="flex items-center gap-2">
            <IconsCalendarBlank />
            <p>{{ data.air_date }}</p>
          </div>
          <div class="flex items-center gap-2">
            <IconsQueue />
            <p>{{ data.episode }}</p>
          </div>
        </div>
      </div>

      <div class="flex items-center gap-2 text-2xl">
        <IconsSmiley />
        <p>
          {{ data.characters.length }} Personagens participaram deste episódio
        </p>
      </div>
    </div>
  </section>
</template>
<script setup>
// import IconsPlay from "../../components/icons/Play.vue";
// import IconsQueue from "../../components/icons/Queue.vue";
// import IconsSmiley from "../../components/icons/Smiley.vue";
// import IconsCalendarBlank from "../../components/icons/CalendarBlank.vue";
// import IconsHeartOutlined from "../../components/icons/HeartOutlined.vue";

const route = useRoute();
const { id } = route.params;
const { data } = await useFetch(
  `https://rickandmortyapi.com/api/episode/${id}`
);
console.log(data.value);

useHead({
  title: `${data.value.name} | ${data.value.episode}`,
});
</script>
