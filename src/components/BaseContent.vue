<template>
  <div>
    <div class="relative mb-2 w-fit lg:mb-7" v-scrollanimation>
      <h3 class="not-italic font-bold text-base lg:text-2xl xl:text-3xl tracking-tighter leading-[174%] relative z-10">
        {{ title }}
      </h3>
      <div class="absolute bottom-0 z-0 w-full h-1/2" :class="bgTitle"></div>
    </div>
    <div class="not-italic font-bold text-xs lg:text-base xl:text-xl flex space-x-[0.594rem]" :class="notesColor"
      v-if="notes" v-scrollanimation>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
        class="w-6 h-6" v-if="iconNote">
        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
      </svg>
      <p>{{ notes }}</p>
    </div>
    <div class="pb-7 lg:pb-9 xl:pb-12 not-italic font-normal text-xs lg:text-base xl:text-xl text-[#5E5E5E]"
      v-if="content" v-scrollanimation>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "WorkspaceJsonBaseContent",
  props: {
    title: {
      type: String,
      required: true,
    },
    bgTitle: {
      type: String,
      default: "bg-[#FFECEC]",
    },
    notes: {
      type: String,
      required: false,
    },
    notesColor: {
      type: String,
      default: "text-[#D7000F]",
    },
    content: {
      type: Boolean,
      default: false,
      required: false
    },
    iconNote: {
      type: Boolean,
      required: false,
      default: false
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
