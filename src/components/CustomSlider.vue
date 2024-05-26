<template>
  <article class="relative" v-scrollanimation>
    <section class="relative">
      <swiper class="relative flex slider" ref="slider" :breakpoints="swiperOptions.breakpoints" @swiper="onSwiper"
        style="border: unset; width: unset; overflow: unset">
        <swiper-slide class="slider-item" v-for="(item, index) in listSlider" :key="index">
          <div class="w-full">
            <figure class="rounded-sm md:rounded lg:rounded-md xl:rounded-[0.594rem] overflow-hidden relative">
              <img class="w-full h-20 sm:h-32 md:h-40 lg:h-60 xl:h-80 2xl:h-96" :src="item?.mainImage || item"
                :alt="item?.title || item" />
            </figure>
            <aside class="text-left w-20 md:w-40 lg:w-64 xl:w-[19.75rem] space-y-1 lg:space-y-2 xl:space-y-3">
              <div
                class="not-italic font-bold text-[0.563rem] md:text-lg lg:text-[1.625rem] xl:text-[1.5rem] text-newsTitle py-1 lg:pb-1 lg:pt-2 xl:pb-2 xl:pt-5">
                <router-link class="w-full description" :to="{ path: '/details-new3', query: { id: item.id } }">
                  {{ stripHtml(item?.title) }}
                </router-link>
              </div>
              <p
                class="not-italic font-normal text-[0.5rem] md:text-[0.938rem] lg:text-xl xl:text-[1.625rem] text-[#686868] description">
                {{ stripHtml(item?.content) }}
              </p>
            </aside>
          </div>
        </swiper-slide>
      </swiper>
    </section>
  </article>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper-bundle.css";

export default {
  name: "WorkspaceJsonCustomSlider",
  components: {
    Swiper,
    SwiperSlide,
  },
  props: {
    listSlider: {
      type: Array,
      default: [1, 2, 3],
      required: true,
    },
    percentRate: {
      type: Number,
      default: 3,
      required: true,
    },
    classHeightImg: {
      type: String,
      default: "h-20 md:h-40 lg:h-64 xl:h-[19.75rem]",
      required: true,
    },
    navigation: {
      type: Boolean,
      default: false,
      required: false,
    },
  },
  data() {
    return {
      swiper: null,
      swiperOptions: {
        breakpoints: {
          360: {
            slidesPerView: 3.5,
            spaceBetween: 12,
            slidesPerGroup: 1
          },
          768: {
            slidesPerView: 3.25,
            spaceBetween: 24,
            slidesPerGroup: 1
          },
          1024: {
            slidesPerView: 3.25,
            spaceBetween: 36,
            slidesPerGroup: 1
          },
          1440: {
            slidesPerView: 3,
            spaceBetween: 48,
            slidesPerGroup: 1
          }
        }
      }
    };
  },

  mounted() { },

  methods: {
    stripHtml(html) {
      let tmp = document.createElement("DIV");
      tmp.innerHTML = html;
      return tmp.textContent || tmp.innerText || "";
    },
    onSwiper(swiper) {
      this.swiper = swiper;
    },
  },
};
</script>

<style scoped>
.description {
  line-height: 1.25;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
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
