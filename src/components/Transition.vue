<template>
  <transition name="expand">
    <div v-show="isExpanded" ref="content">
      <slot />
    </div>
  </transition>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";

defineProps<{ isExpanded: boolean }>();
const content = ref();
let height = ref();

onMounted(() => {
  height.value = `${content.value.getBoundingClientRect().height}px`;
});
</script>

<style scoped lang="less">
.expand-leave-active,
.expand-enter-active {
  transition: all 350ms ease;
  overflow: hidden;
}

.expand-enter-to,
.expand-leave-from {
  height: v-bind(height);
}

.expand-enter-from,
.expand-leave-to {
  opacity: 0;
  height: 0;
}
</style>
