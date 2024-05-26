<script>
import { defineComponent, ref } from "vue";

import TheHeader from "../components/TheHeader.vue";
import TheFooter from "../components/TheFooter.vue";

export default defineComponent({
  components: {
    TheHeader,
    TheFooter,
  },
});
</script>

<template>
  <div class="overflow-hidden">
    <TheHeader />
    <div class="pt-16 lg:pt-20">
      <slot />
    </div>
    <TheFooter />
  </div>
</template>
