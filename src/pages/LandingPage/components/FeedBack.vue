<template>
  <!-- feed back-->
  <div class="mt-[2rem] md:mt-[5.75rem] lg:mt-[9rem] xl:mt-[10.125rem] container">
    <div class="mb-1 md:mb-5 lg:mb-8 xl:mb-10">
      <BaseTitle titleMain="Câu chuyện của chúng ta" titleExtra="Đánh giá của học sinh về hệ sinh thái." />
      <div class="flex justify-end w-full mt-1" v-scrollanimation>
        <button
          class="not-italic font-medium text-[0.563rem] md:text-lg lg:text-2xl xl:text-3xl text-right px-2 md:px-4 py-[0.125rem] md:py-2 text-seeMoreTextMobile md:text-seeMore bg-seeMoreBgMobile md:bg-transparent rounded-[4.813rem] md:rounded-none">
          <router-link :to="'/news3'">Chi tiết <span class="hidden md:inline-block">></span></router-link>
        </button>
      </div>
    </div>
    <div class="flex justify-between">
      <div class="relative flex flex-col items-center justify-center"
        v-for="(feedBack, iFeedBack) in listFeedBackRevert" :key="iFeedBack" v-scrollanimation>
        <figure class="flex flex-col items-center w-full space-y-2 md:space-y-6 lg:space-y-10 xl:space-y-16">
          <img v-if="iFeedBack === 0" class="w-2/5" src="@/assets/images/landingPage/iconFace1.svg" alt="iconFace1" />
          <img v-if="iFeedBack === 1" class="w-2/5" src="@/assets/images/landingPage/iconFace2.svg" alt="iconFace1" />
          <img v-if="iFeedBack === 2" class="w-2/5" src="@/assets/images/landingPage/iconFace3.svg" alt="iconFace1" />
          <div class="h-[0.219rem] md:h-[0.375rem] lg:h-[0.438rem] xl:h-[0.688rem] w-2/3 bg-[#E1EFFF]"></div>
        </figure>
        <div class="relative overflow-hidden w-28 md:w-52 lg:w-64 xl:w-96">
          <img src="@/assets/images/Group1000009460.png" alt="Group1000009460" class="object-cover w-full h-full" />
          <div class="absolute top-0 bottom-0 left-0 right-0 flex flex-col items-center justify-center">
            <div class="w-2/3 translate-y-1.5 md:translate-y-6 leading-4">
              <div class="justify-between md:flex">
                <div class="text-sm not-italic font-bold text-black md:text-lg lg:text-xl xl:text-3xl">
                  {{ feedBack?.nameStudent }}
                </div>
              </div>
              <div
                class="not-italic font-medium text-[0.625rem] md:text-xs lg:text-base xl:text-2xl text-feedbackContent md:mt-1 md:mb-3 lg:mt-2 lg:mb-5 xl:mt-4 xl:mb-10 tracking-tight description"
                v-html="feedBack?.contentNotHtml"></div>
              <router-link v-if="feedBack?.id" :to="{ path: '/details-new2', query: { id: feedBack?.id } }"
                class="not-italic font-medium text-[0.469rem] md:text-[0.625rem]  lg:text-xs xl:text-lg text-seeDetail float-right">
                <p>Xem chi tiết <i
                    class="fa-solid fa-chevron-right text-[0.469rem] md:text-[0.625rem]  lg:text-xs xl:text-lg"></i>
                </p>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BaseTitle from "@/components/BaseTitle.vue";
import landingService from "@/services/landingService";
import { listFeedBack } from "../data";
export default {
  name: "WorkspaceJsonFeedBack",
  data() {
    return {
      listFeedBack: [{}],
    };
  },
  computed: {
    listFeedBackRevert() {
      const arrUndefined = Array(3).fill();
      for (let index = 0; index < this.listFeedBack.length; index++) {
        arrUndefined.splice(index, 1, this.listFeedBack[index])
      }
      return arrUndefined
    }
  },
  mounted() {
    this._feedBackStudent();
  },
  methods: {
    async _feedBackStudent() {
      try {
        this.listFeedBack = listFeedBack;
      } catch (error) {
        console.log(error);
      }
    },
  },
  components: { BaseTitle },
};
</script>

<style scoped>
.description {
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.descriptionFull {
  overflow: hidden;
  display: block;
}

@media screen and (max-width: 767px) and (min-width: 360px) {
  .description {
    -webkit-line-clamp: 2;
  }
}

.before-enter {
  transform: translateY(100px);
  transition: all 2s;
}

/* 
    If the element intersects with the viewport, the before-enter class is added.
  */
.enter {
  transform: translateY(0px);
}
</style>
