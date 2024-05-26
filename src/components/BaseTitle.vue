<template>
  <div class="space-y-0 md:space-y-5" v-scrollanimation>
    <p class="text-xl font-bold text-center md:text-4xl lg:text-5xl">
      {{ titleMain }}
    </p>
    <div class="text-sm font-light text-center text-gray-400 md:text-xl lg:text-2xl xl:text-3xl">
      <div class="w-[50%] ml-[25%]">
        {{ titleExtra }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WorkspaceJsonBaseTitle",

  props: {
    titleMain: {
      type: String,
      required: true,
    },
    titleExtra: {
      type: String,
      required: false,
    },
  },

  data() {
    return {};
  },

  mounted() { },

  methods: {},
};
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
