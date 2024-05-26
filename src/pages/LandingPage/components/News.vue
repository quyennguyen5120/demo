<template>
  <div class="mt-[2rem] md:mt-[5.75rem] lg:mt-[9rem] xl:mt-[10.125rem] container relative">
    <div class="mb-1 md:mb-5 lg:mb-8 xl:mb-10" v-scrollanimation>
      <BaseTitle titleMain="Tin tức và sự kiện" />
      <div class="flex justify-end w-full">
        <router-link :to="'/news'"
          class="not-italic font-medium text-[0.563rem] md:text-lg lg:text-2xl xl:text-3xl text-right px-2 md:px-4 py-[0.125rem] md:py-2 text-seeMoreTextMobile md:text-seeMore bg-seeMoreBgMobile md:bg-transparent rounded-[4.813rem] md:rounded-none">
          Chi tiết <span class="hidden md:inline-block">></span>
        </router-link>
      </div>
    </div>

    <CustomSlider :listSlider="listNew" />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import CustomSlider from "@/components/CustomSlider.vue";
import "vue3-carousel/dist/carousel.css";
import BaseTitle from "@/components/BaseTitle.vue";
import { listNew } from "../data";

export default defineComponent({
  name: "News",
  components: {
    CustomSlider,
    BaseTitle,
  },
  data() {
    return {
      listNew: [],
      settings: {
        itemsToShow: 3.5,
        snapAlign: "center",
      },
    };
  },
  mounted() {
    this._findByMainCampus();
  },
  methods: {
    async _findByMainCampus() {
      try {
        this.listNew = listNew
      } catch (error) {
        console.log(error.response.status);
      }
    },
  },
});
</script>

<style scoped>
.before-enter {
  transform: translateY(100px);
  opacity: 0;
  transition: all 2s;
}

/*
    If the element intersects with the viewport, the before-enter class is added.
  */
.enter {
  opacity: 1;
  transform: translateY(0px);
}
</style>
