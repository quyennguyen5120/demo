<template>
  <!-- About Our Story -->
  <div class="container">
    <div
      class="snap-start h-32 md:h-56 lg:h-72 xl:h-96 bg-cover bg-center bg-[url('@/assets/images/Rectangle-4(1).png')] relative">
      <div class="absolute bottom-[15%] left-[5%] right-0 z-40" v-scrollanimation>
        <div class="h-6 md:h-16 xl:h-24">
          <img class="object-contain h-full w-fit" src="@/assets/images/LearncT1.png" alt="꿈으로 가는 사다리입니다." />
        </div>
        <p
          class="font-medium text-xs md:text-xl lg:text-2xl xl:text-3xl leading-[150%] mt-2 md:mt-6 lg:mt-8 xl:mt-10 text-white">
          Nơi Kết Nối Tri Thức và Khơi Dậy Tiềm Năng Sáng Tạo.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import AOS from "aos";

onMounted(() => {
  AOS.init();
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
