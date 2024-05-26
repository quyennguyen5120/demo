<template>
  <div
    class="top-0 cursor-pointer left-0 right-0 bottom-0 w-screen h-screen fixed background z-[10010] flex items-center justify-center"
    @click="close($event)">
    <i class="fa-solid fa-xmark absolute cursor-pointer z-[200000] text-2xl right-10 top-5  w-10 h-10 flex items-center justify-center rounded-full bg-white"
      @click="close($event)"></i>
    <div class="z-[10011] w-auto h-auto overflow-hidden px-10 cursor-default">
      <img class="z-[10011] w-full h-full" :src="image" alt="" @click.stop="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "BaseModal",
  props: ["image"],
  methods: {
    close(e) {
      e.preventDefault();
      this.$emit("close-modal", false);
    },
  },
};
</script>

<style scoped>
.background {
  background: rgba(0, 0, 0, 0.5);
}
</style>
