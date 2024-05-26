<template>
  <!-- PC template -->
  <div class="pb-16 bg-white md:pb-24 lg:pb-32 xl:pb-60">
    <Story />
    <Banner />
    <Brand />
<!--    <Search />-->
    <div class="relative z-30 bg-gradient-white">
      <History />
      <CoreValue />
    </div>
    <News />
    <FeedBack />
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import AOS from "aos";
import Story from "./components/Story.vue";
import Banner from "./components/Banner.vue";
import Brand from "./components/Brand.vue";
import Search from "./components/Search.vue";
import History from "./components/History.vue";
import CoreValue from "./components/CoreValue.vue";
import News from "./components/News.vue";
import FeedBack from "./components/FeedBack.vue";

onMounted(() => {
  window.scroll(0, 0);
  AOS.init();
});
</script>

<style scoped>
.bg-gradient-white {
  background: linear-gradient(178.11deg, rgba(242, 242, 242, 0) 1.6%, #f2f2f2 85.08%);
}
</style>
