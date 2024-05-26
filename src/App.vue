<script>
import { useRoute } from "vue-router";
import { computed } from "vue";

import { PUBLIC_LAYOUT } from "./constants/index.js";

export default {
  setup() {
    const currentRoute = useRoute();
    return {
      layout: computed(() => (currentRoute.meta.layout || PUBLIC_LAYOUT) + "-layout"),
    };
  },
};
</script>

<template>
  <component :is="layout" class="tracking-tighter">
    <!-- Commit web not change -->
    <router-view />
  </component>
</template>

<style>
@font-face {
  font-family: "Pretendard Variable";
  font-weight: 45 920;
  font-style: normal;
  font-display: swap;
  src: local("Pretendard Variable"),
    url("@/assets/font/PretendardFont/PretendardFont/public/variable/PretendardVariable.ttf") format("woff2-variations");
}

html,
body {
  font-family: "Pretendard Variable", ui-sans-serif, system-ui, -apple-system,
    BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans",
    sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
    "Noto Color Emoji" !important;
}

</style>
