<template>
  <div class="container">
    <Carousel v-if="listImg.length > 0" class="mt-1 md:mt-4" v-model="currentSlide" :settings="settings"
      v-scrollanimation>
      <Slide v-for="(slide, indexSlide) in listImg" :key="indexSlide" class="w-full h-auto">
        <div class="w-full">
          <div class="w-full h-[7rem] md:h-[13.25rem] lg:h-[17.375rem] xl:h-[28rem]">
            <img class="object-fill w-full h-full" :src="slide" :alt="slide.url" />
          </div>
        </div>
      </Slide>
      <template #addons>
        <div class="absolute top-0 bottom-0 right-0 left-0 container flex justify-between items-center">
          <button @click="prev">
            <i class="fa-solid text-btnSlider text-sm md:text-base lg:text-lg xl:text-xl fa-chevron-left"></i>
          </button>
          <button @click="next">
            <i class="fa-solid text-btnSlider text-sm md:text-base lg:text-lg xl:text-xl fa-chevron-right"></i>
          </button>
        </div>
        <Pagination />
      </template>
    </Carousel>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { Carousel, Navigation, Pagination, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
import { banner } from "../data";

export default defineComponent({
  name: "Basic",
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  data() {
    return {
      currentSlide: 0,
      listImg: [],
      settings: {
        wrapAround: true,
        autoplay: 5000,
        transition: 1000
      },
    };
  },
  mounted() {
    this._getBanner();
  },
  methods: {
    next() {
      this.currentSlide = this.currentSlide + 1;
    },
    prev() {
      this.currentSlide = this.currentSlide - 1;
    },
    async _getBanner() {
      try {
        this.listImg = banner;
      } catch (error) {
        console.log(error.response.status);
      }
    },
  },
});
</script>

<style>
#app {
  --vc-pgn-background-color: #fff;
  --vc-pgn-active-color: #4e3524;
  --vc-pgn-width: 40px;
  --vc-pgn-height: 8px;
  --vc-pgn-margin: 7px;
  --vc-nav-background-color: transparent;
}

.carousel__item {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel__pagination {
  position: absolute !important;
  bottom: 3%;
  right: 0;
  left: 0;
}

.carousel__pagination-button {
  background-color: transparent;
}

.carousel__pagination-button::after {
  background-color: rgba(255, 255, 255, 0.5) !important;
  width: 6px !important;
  height: 6px !important;
  border-radius: 50% !important;
}

.carousel__pagination-button--active::after {
  background-color: white;
}

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
