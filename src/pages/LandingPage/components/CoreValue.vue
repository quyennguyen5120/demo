<template>
  <!-- Core Value -->
  <div class="container flex justify-between py-10 md:py-24 lg:py-48 xl:py-40">
    <ul
      class="circle w-[14.25rem] h-[14.25rem] md:w-[28.063rem] md:h-[28.063rem] lg:w-[41.25rem] lg:h-[41.25rem] xl:w-[52.563rem] xl:h-[52.563rem] my-[1.563rem] md:my-[2rem] lg:my-[2.938rem] xl:my-[3.688rem] relative ml-[-10%]">
      <li v-scrollanimation="{ start: 'before-enter1', end: 'enter1' }">
        <div class="item pt-[25%] bg-coreValue1">
          <img class="w-4 h-3 md:w-10 md:h-6 lg:w-12 lg:h-10 xl:w-16 xl:h-12 rotate-[345deg]"
            src="@/assets/images/landingPage/ClipPath1.svg" alt="ClipPath1" />
        </div>
      </li>
      <li v-scrollanimation="{ start: 'before-enter2', end: 'enter2' }">
        <div class="item pt-[25%] bg-coreValue2">
          <img class="w-4 h-3 md:w-8 md:h-5 lg:w-12 lg:h-8 xl:w-16 xl:h-10 rotate-[315deg]"
            src="@/assets/images/landingPage/ClipPath2.svg" alt="ClipPath1" />
        </div>
      </li>
      <li v-scrollanimation="{ start: 'before-enter3', end: 'enter3' }">
        <div class="item pt-[25%] bg-coreValue3">
          <img class="w-4 h-3 md:w-10 md:h-6 lg:w-12 lg:h-10 xl:w-16 xl:h-12 rotate-[286deg]"
            src="@/assets/images/landingPage/ClipPath3.svg" alt="ClipPath1" />
        </div>
      </li>
      <li v-scrollanimation="{ start: 'before-enter4', end: 'enter4' }">
        <div class="item pt-[25%] bg-coreValue4">
          <img class="w-4 h-3 md:w-10 md:h-6 lg:w-12 lg:h-10 xl:w-16 xl:h-12 rotate-[257deg]"
            src="@/assets/images/landingPage/ClipPath4.svg" alt="ClipPath1" />
        </div>
      </li>
      <li v-scrollanimation="{ start: 'before-enter5', end: 'enter5' }">
        <div class="item pt-[25%] bg-coreValue5">
          <img class="w-4 h-3 md:w-8 md:h-5 lg:w-12 lg:h-8 xl:w-16 xl:h-10 rotate-[226deg]"
            src="@/assets/images/landingPage/ClipPath5.svg" alt="ClipPath1" />
        </div>
      </li>
      <li v-scrollanimation="{ start: 'before-enter6', end: 'enter6' }">
        <div class="item pt-[25%] bg-coreValue6">
          <img class="w-4 h-3 md:w-8 md:h-5 lg:w-12 lg:h-8 xl:w-16 xl:h-10 rotate-[196deg]"
            src="@/assets/images/landingPage/ClipPath6.svg" alt="ClipPath1" />
        </div>
      </li>

      <div class="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center">
        <div
          class="w-[5.469rem] h-[5.469rem] md:w-[10.75rem] md:h-[10.75rem] lg:w-[15.813rem] lg:h-[15.813rem] xl:w-[20.188rem] xl:h-[20.188rem] bg-white rounded-full flex flex-col justify-center items-center space-y-2"
          style="box-shadow: 0px 0px 36.8091px -12.8832px rgba(0, 0, 0, 0.25)">
          <p class="text-sm not-italic font-bold tracking-tight md:text-3xl lg:text-4xl xl:text-5xl">
            Hệ sinh thái
          </p>
          <p
            class="not-italic font-normal text-[0.563rem] md:text-lg lg:text-2xl xl:text-3xl tracking-tight text-clipPathContent">
            Năng lực và cốt lõi
          </p>
        </div>
      </div>
    </ul>
    <div class="flex flex-col justify-between w-1/2">
      <div class="relative" v-scrollanimation="{ start: 'text-before-enter', end: 'text-enter' }">
        <p class="not-italic font-bold text-[0.625rem] md:text-lg lg:text-2xl xl:text-3xl tracking-tight text-">
          Học tập
        </p>
        <p
          class="text-coreValueContent not-italic font-normal text-[0.438rem] md:text-xs lg:text-sm xl:text-lg tracking-tight w-[8.625rem] md:w-[15.125rem] lg:w-[270.438rem] xl:w-[28.313rem]">
          Môi trường đa dạng, nơi mọi người chia sẻ kiến thức và tiến bộ cùng nhau.
        </p>

        <div class="absolute top-0 bottom-0 right-[108%] flex justify-end items-center">
          <span
            class="h-[1.563rem] md:h-[2rem] lg:h-[2.938rem] xl:h-[3.75rem] border-coreValue1 border-r translate-y-[0.781rem] md:translate-y-[1rem] lg:translate-y-[1.469rem] xl:translate-y-[1.875rem]"></span>
          <div class="flex items-center">
            <span
              class="w-[30vw] sm:w-[30vw] md:w-[22vw] lg:w-[19vw] xl:w-[25vw] 2xl:w-[25rem] border-coreValue1 border-b"></span>
            <span
              class="w-[0.188rem] h-[0.188rem] md:w-[0.375rem] md:h-[0.375rem] lg:w-[0.563rem] lg:h-[0.563rem] xl:w-[0.688rem] xl:h-[0.688rem] bg-coreValue1 rounded-full"></span>
          </div>
        </div>
      </div>
      <div class="relative" v-scrollanimation="{ start: 'text-before-enter', end: 'text-enter' }">
        <p class="not-italic font-bold text-[0.625rem] md:text-lg lg:text-2xl xl:text-3xl tracking-tight text-">
          Sáng tạo
        </p>
        <p
          class="text-coreValueContent not-italic font-normal text-[0.438rem] md:text-xs lg:text-sm xl:text-lg tracking-tight w-[8.625rem] md:w-[15.125rem] lg:w-[270.438rem] xl:w-[28.313rem]">
          Sáng tạo là quá trình tạo ra ý tưởng mới và độc đáo, thúc đẩy sự đổi mới và tiến bộ trong mọi lĩnh vực của cuộc sống.
        </p>

        <div class="absolute top-0 bottom-0 right-[108%] flex justify-end items-center">
          <span
            class="w-[22vw] sm:w-[25vw] md:w-[9vw] lg:w-[10vw] xl:w-[15vw] 2xl:w-[12.5rem] border-coreValue2 border-b"></span>
          <span
            class="w-[0.188rem] h-[0.188rem] md:w-[0.375rem] md:h-[0.375rem] lg:w-[0.563rem] lg:h-[0.563rem] xl:w-[0.688rem] xl:h-[0.688rem] bg-coreValue2 rounded-full"></span>
        </div>
      </div>
      <div class="relative" v-scrollanimation="{ start: 'text-before-enter', end: 'text-enter' }">
        <p class="not-italic font-bold text-[0.625rem] md:text-lg lg:text-2xl xl:text-3xl tracking-tight text-">
          Cộng đồng
        </p>
        <p
          class="text-coreValueContent not-italic font-normal text-[0.438rem] md:text-xs lg:text-sm xl:text-lg tracking-tight w-[8.625rem] md:w-[15.125rem] lg:w-[270.438rem] xl:w-[28.313rem]">
          Cộng đồng là nơi mọi người hỗ trợ, tương tác và chia sẻ kiến thức, tạo điều kiện cho sự phát triển và tiến bộ của mỗi thành viên.
        </p>

        <div class="absolute top-0 bottom-0 right-[108%] flex justify-end items-center">
          <span
            class="w-[15vw] sm:w-[20vw] md:w-[6vw] lg:w-[6vw] xl:w-[8vw] 2xl:w-[6.25rem] border-coreValue3 border-b"></span>
          <span
            class="w-[0.188rem] h-[0.188rem] md:w-[0.375rem] md:h-[0.375rem] lg:w-[0.563rem] lg:h-[0.563rem] xl:w-[0.688rem] xl:h-[0.688rem] bg-coreValue3 rounded-full"></span>
        </div>
      </div>
      <div class="relative" v-scrollanimation="{ start: 'text-before-enter', end: 'text-enter' }">
        <p class="not-italic font-bold text-[0.625rem] md:text-lg lg:text-2xl xl:text-3xl tracking-tight text-">
          Tài nguyên
        </p>
        <p
          class="text-coreValueContent not-italic font-normal text-[0.438rem] md:text-xs lg:text-sm xl:text-lg tracking-tight w-[8.625rem] md:w-[15.125rem] lg:w-[270.438rem] xl:w-[28.313rem]">
          Tài nguyên của hệ sinh thái học tập bao gồm sách giáo khoa, tài liệu tham khảo, bài giảng trực tuyến, ứng dụng học tập và sự hỗ trợ từ cộng đồng học tập.
        </p>

        <div class="absolute top-0 bottom-0 right-[108%] flex justify-end items-center">
          <span
            class="w-[15vw] sm:w-[20vw] md:w-[6vw] lg:w-[6vw] xl:w-[8vw] 2xl:w-[6.25rem] border-coreValue4 border-b"></span>
          <span
            class="w-[0.188rem] h-[0.188rem] md:w-[0.375rem] md:h-[0.375rem] lg:w-[0.563rem] lg:h-[0.563rem] xl:w-[0.688rem] xl:h-[0.688rem] bg-coreValue4 rounded-full"></span>
        </div>
      </div>
      <div class="relative" v-scrollanimation="{ start: 'text-before-enter', end: 'text-enter' }">
        <p class="not-italic font-bold text-[0.625rem] md:text-lg lg:text-2xl xl:text-3xl tracking-tight text-">
          Tin tức và sự kiện
        </p>
        <p
          class="text-coreValueContent not-italic font-normal text-[0.438rem] md:text-xs lg:text-sm xl:text-lg tracking-tight w-[8.625rem] md:w-[15.125rem] lg:w-[270.438rem] xl:w-[28.313rem]">
          Cung cấp thông tin mới nhất về các xu hướng, sự kiện giáo dục, và những tiến triển trong lĩnh vực học thuật
        </p>

        <div class="absolute top-0 bottom-0 right-[108%] flex justify-end items-center">
          <span
            class="w-[22vw] sm:w-[25vw] md:w-[9vw] lg:w-[10vw] xl:w-[15vw] 2xl:w-[12.5rem] border-coreValue5 border-b"></span>
          <span
            class="w-[0.188rem] h-[0.188rem] md:w-[0.375rem] md:h-[0.375rem] lg:w-[0.563rem] lg:h-[0.563rem] xl:w-[0.688rem] xl:h-[0.688rem] bg-coreValue5 rounded-full"></span>
        </div>
      </div>
      <div class="relative" v-scrollanimation="{ start: 'text-before-enter', end: 'text-enter' }">
        <p class="not-italic font-bold text-[0.625rem] md:text-lg lg:text-2xl xl:text-3xl tracking-tight text-">
          Liên hệ
        </p>
        <p
          class="text-coreValueContent not-italic font-normal text-[0.438rem] md:text-xs lg:text-sm xl:text-lg tracking-tight w-[8.625rem] md:w-[15.125rem] lg:w-[270.438rem] xl:w-[28.313rem]">
          Tương tác giữa các thành viên trong cộng đồng học tập, bao gồm học sinh, giáo viên, và những người hỗ trợ khác nhau như phụ huynh và nhà trường
        </p>

        <div class="absolute top-0 bottom-0 right-[108%] flex justify-end items-center">
          <span
            class="h-[1.563rem] md:h-[2rem] lg:h-[2.938rem] xl:h-[3.75rem] border-coreValue6 border-r translate-y-[-0.781rem] md:translate-y-[-1rem] lg:translate-y-[-1.469rem] xl:translate-y-[-1.875rem]"></span>
          <div class="flex items-center">
            <span
              class="w-[30vw] sm:w-[30vw] md:w-[22vw] lg:w-[19vw] xl:w-[25vw] 2xl:w-[25rem] border-coreValue6 border-b"></span>
            <span
              class="w-[0.188rem] h-[0.188rem] md:w-[0.375rem] md:h-[0.375rem] lg:w-[0.563rem] lg:h-[0.563rem] xl:w-[0.688rem] xl:h-[0.688rem] bg-coreValue6 rounded-full"></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WorkspaceJsonCoreValue",

  data() {
    return {};
  },

  mounted() { },

  methods: {},
};
</script>

<style scoped>
.circle {
  position: relative;
  padding: 0;
  border-radius: 50%;
  list-style: none;
  overflow: hidden;
  transform: translateX(-15%);
}

li {
  overflow: hidden;
  position: absolute;
  top: 0;
  right: 0;
  width: 50%;
  height: 50%;
  transform-origin: 0% 100%;
}

.item {
  position: absolute;
  left: -100%;
  width: 200%;
  height: 200%;
  display: flex;
  justify-content: center;
  transform: skewY(60deg) rotate(15deg);
}

/* li:first-child {
  transform: rotate(0deg) skewY(-60deg);
} */
/* li:nth-child(2) {
  transform: rotate(30deg) skewY(-60deg);
} */
/* li:nth-child(3) {
  transform: rotate(60deg) skewY(-60deg);
}
li:nth-child(4) {
  transform: rotate(90deg) skewY(-60deg);
}
li:nth-child(5) {
  transform: rotate(120deg) skewY(-60deg);
}
li:nth-child(6) {
  transform: rotate(150deg) skewY(-60deg);
} */

.text-before-enter {
  transform: translateY(100px);
  opacity: 0;
  transition: all 2s;
}

/*
    If the element intersects with the viewport, the before-enter class is added.
  */
.text-enter {
  transform: translateY(0);
  opacity: 1;
}

.before-enter1 {
  transform: rotate(-30deg) skewY(-60deg);
  opacity: 0;
  transition: all 2s;
}

/*
    If the element intersects with the viewport, the before-enter class is added.
  */
.enter1 {
  transform: rotate(0deg) skewY(-60deg);
  opacity: 1;
}

.before-enter2 {
  transform: rotate(-30deg) skewY(-60deg);
  opacity: 0;
  transition: all 2s;
}

/*
    If the element intersects with the viewport, the before-enter class is added.
  */
.enter2 {
  transform: rotate(30deg) skewY(-60deg);
  opacity: 1;
}

.before-enter3 {
  transform: rotate(-30deg) skewY(-60deg);
  opacity: 0;
  transition: all 2s;
}

/*
    If the element intersects with the viewport, the before-enter class is added.
  */
.enter3 {
  transform: rotate(60deg) skewY(-60deg);
  opacity: 1;
}

.before-enter4 {
  transform: rotate(-30deg) skewY(-60deg);
  opacity: 0;
  transition: all 2s;
}

/*
    If the element intersects with the viewport, the before-enter class is added.
  */
.enter4 {
  transform: rotate(90deg) skewY(-60deg);
  opacity: 1;
}

.before-enter5 {
  transform: rotate(-30deg) skewY(-60deg);
  opacity: 0;
  transition: all 2s;
}

/*
    If the element intersects with the viewport, the before-enter class is added.
  */
.enter5 {
  transform: rotate(120deg) skewY(-60deg);
  opacity: 1;
}

.before-enter6 {
  transform: rotate(-30deg) skewY(-60deg);
  opacity: 0;
  transition: all 2s;
}

/*
    If the element intersects with the viewport, the before-enter class is added.
  */
.enter6 {
  transform: rotate(150deg) skewY(-60deg);
  opacity: 1;
}
</style>
