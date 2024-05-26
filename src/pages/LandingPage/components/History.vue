<template>
  <!-- History -->
  <div class="mt-[3rem] md:mt-[8.438rem] lg:mt-[12.938rem] xl:mt-[15.563rem] relative">
    <div class="container">
      <div class="w-1/2">
        <p class="not-italic font-semibold text-sm md:text-[1.75rem] lg:text-[2.5rem] xl:text-[3.188rem]"
          v-scrollanimation>
          Giới thiệu
        </p>
        <div class="-mr-5 -ml-0 md:-mx-6 lg:-mx-8 xl:-mx-10 bg-transparent">
          <!-- active -->
          <div @mouseover="active = 1" :class="[
            {
              'py-2 md:py-4 lg:py-8 xl:py-10 pl-4 md:pl-8 lg:pl-12 xl:pl-16 space-y-2 bg-primary mt-2 md:mt-4 lg:mt-7 xl:mt-8 rounded-sm md:rounded lg:rounded-md xl:rounded-lg relative z-30 text-white cursor-pointer':
                active == 1,
              'w-[8.125rem] md:w-[16rem] lg:w-[23.5rem] xl:w-[32.438rem] py-2 md:py-5 lg:py-8 ml-4 md:ml-8 lg:ml-12 xl:ml-16 space-y-2 border-b border-gray-400 tracking-tight':
                active != 1,
            },
          ]" v-scrollanimation>
            <p class="not-italic font-normal text-[0.563rem] md:text-lg lg:text-2xl xl:text-3xl">
              Số lượng tài liệu lên đến <span class="font-bold">10,000+</span>
            </p>
            <p
              class="not-italic font-normal text-[0.375rem] md:text-xs lg:text-base xl:text-xl text-historyTextExtraActive">
              Tính từ năm 2022 đến nay
            </p>
          </div>
          <!-- not active -->
          <div @mouseover="active = 2" :class="[
            {
              'py-2 md:py-4 lg:py-8 xl:py-10 pl-4 md:pl-8 lg:pl-12 xl:pl-16 space-y-2 bg-primary mt-2 md:mt-4 lg:mt-7 xl:mt-8 rounded-sm md:rounded lg:rounded-md xl:rounded-lg relative z-50 text-white cursor-pointer':
                active == 2,
              'w-[8.125rem] md:w-[16rem] lg:w-[23.5rem] xl:w-[32.438rem] py-2 md:py-5 lg:py-8 ml-4 md:ml-8 lg:ml-12 xl:ml-16 space-y-2 border-b border-gray-400 tracking-tight':
                active != 2,
            },
          ]" v-scrollanimation>
            <p class="not-italic font-normal text-[0.563rem] md:text-lg lg:text-2xl xl:text-3xl">
              Tỉ lệ khóa học mới đạt <span class="font-bold">~89%</span> mỗi năm
            </p>
            <p class="not-italic font-medium text-[0.375rem] md:text-xs lg:text-base xl:text-xl text-historyTextExtra">
              (Năm 2022 ~ Đến nay)
            </p>
            <p class="not-italic font-bold text-[0.375rem] md:text-xs lg:text-base xl:text-xl" :class="[
              { 'text-white': active == 2, 'text-historyTextConent': active != 2 },
            ]">
              Hơn 10,000+ khóa học trên hệ thống
            </p>
          </div>
          <div @mouseover="active = 3" :class="[
            {
              'py-2 md:py-4 lg:py-8 xl:py-10 pl-4 md:pl-8 lg:pl-12 xl:pl-16 space-y-2 bg-primary mt-2 md:mt-4 lg:mt-7 xl:mt-8 rounded-sm md:rounded lg:rounded-md xl:rounded-lg relative z-50 text-white cursor-pointer':
                active == 3,
              'w-[8.125rem] md:w-[16rem] lg:w-[23.5rem] xl:w-[32.438rem] py-2 md:py-5 lg:py-8 ml-4 md:ml-8 lg:ml-12 xl:ml-16 space-y-2 border-b border-gray-400 tracking-tight':
                active != 3,
            },
          ]" v-scrollanimation>
            <p class="not-italic font-normal text-[0.563rem] md:text-lg lg:text-2xl xl:text-3xl">
              Tỉ lệ khóa học mới đạt <span class="font-bold">~89%</span> mỗi năm
            </p>
            <p class="not-italic font-medium text-[0.375rem] md:text-xs lg:text-base xl:text-xl text-historyTextExtra">
              (Năm 2022 ~ Đến nay)
            </p>
            <p class="not-italic font-bold text-[0.375rem] md:text-xs lg:text-base xl:text-xl" :class="[
              { 'text-white': active == 2, 'text-historyTextConent': active != 2 },
            ]">
              Hơn 10,000+ khóa học trên hệ thống
            </p>
          </div>
          <div @mouseover="active = 4" :class="[
            {
              'py-2 md:py-4 lg:py-8 xl:py-10 pl-4 md:pl-8 lg:pl-12 xl:pl-16 space-y-2 bg-primary mt-2 md:mt-4 lg:mt-7 xl:mt-8 rounded-sm md:rounded lg:rounded-md xl:rounded-lg relative z-50 text-white cursor-pointer':
                active == 4,
              'w-[8.125rem] md:w-[16rem] lg:w-[23.5rem] xl:w-[32.438rem] py-2 md:py-5 lg:py-8 ml-4 md:ml-8 lg:ml-12 xl:ml-16 space-y-2 border-b border-gray-400 tracking-tight':
                active != 4,
            },
          ]" v-scrollanimation>
            <p class="not-italic font-normal text-[0.563rem] md:text-lg lg:text-2xl xl:text-3xl">
              Tỉ lệ khóa học mới đạt <span class="font-bold">~89%</span> mỗi năm
            </p>
            <p class="not-italic font-medium text-[0.375rem] md:text-xs lg:text-base xl:text-xl text-historyTextExtra">
              (Năm 2022 ~ Đến nay)
            </p>
            <p class="not-italic font-bold text-[0.375rem] md:text-xs lg:text-base xl:text-xl" :class="[
              { 'text-white': active == 2, 'text-historyTextConent': active != 2 },
            ]">
              Hơn 10,000+ khóa học trên hệ thống
            </p>
          </div>
          <div @mouseover="active = 5" :class="[
            {
              'py-2 md:py-4 lg:py-8 xl:py-10 pl-4 md:pl-8 lg:pl-12 xl:pl-16 space-y-2 bg-primary mt-2 md:mt-4 lg:mt-7 xl:mt-8 rounded-sm md:rounded lg:rounded-md xl:rounded-lg relative z-50 text-white cursor-pointer':
                active == 5,
              'w-[8.125rem] md:w-[16rem] lg:w-[23.5rem] xl:w-[32.438rem] py-2 md:py-5 lg:py-8 ml-4 md:ml-8 lg:ml-12 xl:ml-16 space-y-2 border-b border-gray-400 tracking-tight':
                active != 5,
            },
          ]" v-scrollanimation>
            <p class="not-italic font-normal text-[0.563rem] md:text-lg lg:text-2xl xl:text-3xl">
              Tỉ lệ khóa học mới đạt <span class="font-bold">~89%</span> mỗi năm
            </p>
            <p class="not-italic font-medium text-[0.375rem] md:text-xs lg:text-base xl:text-xl text-historyTextExtra">
              (Năm 2022 ~ Đến nay)
            </p>
            <p class="not-italic font-bold text-[0.375rem] md:text-xs lg:text-base xl:text-xl" :class="[
              { 'text-white': active == 2, 'text-historyTextConent': active != 2 },
            ]">
              Hơn 10,000+ khóa học trên hệ thống
            </p>
          </div>
          <div @mouseover="active = 6" :class="[
            {
              'py-2 md:py-4 lg:py-8 xl:py-10 pl-4 md:pl-8 lg:pl-12 xl:pl-16 space-y-2 bg-primary mt-2 md:mt-4 lg:mt-7 xl:mt-8 rounded-sm md:rounded lg:rounded-md xl:rounded-lg relative z-50 text-white cursor-pointer':
                active == 6,
              'w-[8.125rem] md:w-[16rem] lg:w-[23.5rem] xl:w-[32.438rem] py-2 md:py-5 lg:py-8 ml-4 md:ml-8 lg:ml-12 xl:ml-16 space-y-2 border-b border-gray-400 tracking-tight':
                active != 6,
            },
          ]" v-scrollanimation>
            <p class="not-italic font-normal text-[0.563rem] md:text-lg lg:text-2xl xl:text-3xl">
              Tỉ lệ khóa học mới đạt <span class="font-bold">~89%</span> mỗi năm
            </p>
            <p class="not-italic font-medium text-[0.375rem] md:text-xs lg:text-base xl:text-xl text-historyTextExtra">
              (Năm 2022 ~ Đến nay)
            </p>
            <p class="not-italic font-bold text-[0.375rem] md:text-xs lg:text-base xl:text-xl" :class="[
              { 'text-white': active == 2, 'text-historyTextConent': active != 2 },
            ]">
              Hơn 10,000+ khóa học trên hệ thống
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="absolute top-0 bottom-0 right-0 left-[50%] bg-historyBgRight z-10 flex flex-col justify-end">
      <div class="pl-6 pb-4 md:pl-8 md:pb-5 lg:pl-12 lg:pb-8 xl:pl-16 xl:pb-12">
        <div class="w-12 h-10 md:w-16 md:h-12 lg:w-24 lg:h-16 xl:w-32 xl:h-24 overflow-hidden">
          <img class="object-contain w-full h-full" src="@/assets/images/Group1000009590.svg" alt="Group1000009590" />
        </div>
        <div class="not-italic font-bold text-3xl md:text-5xl lg:text-[4.375rem] xl:text-[5.5rem]">
          {{ active == 1 ? "10000+" : "" }}
          {{ active == 2 ? "89%" : "" }}
          {{ active == 3 ? "89%" : "" }}
<!--          <div v-if="active == 4">-->
<!--            <div>600회</div>-->
<!--            <div>50,000명</div>-->
<!--          </div>-->
          {{ active == 4 ? "89%" : "" }}
          {{ active == 5 ? "89%" : "" }}
          {{ active == 6 ? "89%" : "" }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BaseTitle from "@/components/BaseTitle.vue";
export default {
  name: "WorkspaceJsonHistory",
  data() {
    return {
      activeClass:
        "py-2 md:py-4 lg:py-8 xl:py-10 pl-4 md:pl-8 lg:pl-12 xl:pl-16 space-y-2 bg-primary mt-2 md:mt-4 lg:mt-7 xl:mt-8 rounded-sm md:rounded lg:rounded-md xl:rounded-lg relative z-50 text-white cursor-pointer",
      notActiveClass:
        "w-[8.125rem] md:w-[16rem] lg:w-[23.5rem] xl:w-[32.438rem] py-2 md:py-5 lg:py-8 ml-4 md:ml-8 lg:ml-12 xl:ml-16 space-y-2 border-b border-gray-400 tracking-tight",
      active: 1,
    };
  },
  mounted() { },
  methods: {
    open() {
      this.active = true;
    },
    close() {
      this.active = false;
    },
  },
  components: { BaseTitle },
};
</script>

<style scoped>
.before-enter {
  transform: translateX(-100px);
  transition: all 2s;
}

/* 
    If the element intersects with the viewport, the before-enter class is added.
  */
.enter {
  transform: translateX(0px);
}
</style>
