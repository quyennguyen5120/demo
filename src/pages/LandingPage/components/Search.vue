<template>
  <!-- Search -->
  <div class="mt-[1rem] md:mt-[5.75rem] lg:mt-[9rem] xl:mt-[10.125rem] container relative z-40">
    <BaseTitle titleMain="캠퍼스 찾기" titleExtra="가까운 캠퍼스를 찾아보세요!" />
    <div class="px-8 md:px-6 lg:px-3 xl:px-8" v-scrollanimation>
      <form
        class="mt-[1.188rem] xl:mt-[4.125rem] h-[2.5rem] md:h-[4.875rem] lg:h-[6.813rem] xl:h-[9.188rem] bg-second border rounded-lg md:rounded-2xl xl:rounded-3xl xl:border-formBorder flex justify-around items-center leading-none"
        @submit.prevent="searchCampus()">

        <SelectCustom @focusout="handleFocusOut" tabindex="0" v-model="provincesId" :options="provinces"
          class="w-[10vw]" :placeholder="'시 / 도'"
          :style="'bg-transparent border-b border-formBorder rounded-none text-gray-500 whitespace-nowrap py-[0.078rem] md:py-[0.359rem] lg:py-[0.406rem] xl:py-[0.594rem]'"
          :labelKey="'name_ko'" ref="rootRef" />

        <input id="pac-input"
          class="w-1/2 px-1 py-[0.063rem] md:py-[0.313rem] lg:py-[0.438rem] xl:py-[0.625rem] border-b border-formBorder bg-transparent font-medium text-[0.438rem] md:text-[0.813rem] lg:text-[1.125rem] xl:text-[1.5rem] text-gray-500 outline-none rounded-none"
          type="text" v-model="keywordSearch" placeholder="캠퍼스명 또는 주소 검색" />

        <button
          class="bg-[#0068B7] rounded-[0.25rem] md:rounded-[0.5rem] lg:rounded-[10.063rem] xl:rounded-[10.313rem] px-3 py-[0.188rem] md:px-6 md:py-[0.375rem] lg:px-9 lg:py-[0.563rem] xl:px-12 xl:py-[0.75rem] text-white font-medium text-[0.438rem] md:text-[0.813rem] lg:text-[1.125rem] xl:text-[1.5rem]">
          검색
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import BaseTitle from "@/components/BaseTitle.vue";
import SelectCustom from "@/components/form/SelectCustom.vue";
import { ref } from "vue";
import { provinces } from "../data";
export default {
  name: "WorkspaceJsonSearch",
  data() {
    return {
      provinces: [],
      provincesId: "",
      index: 0,
      keywordSearch: "",
    };
  },
  mounted() {
    this._getProvinces();
  },
  setup() {
    const rootRef = ref(null);
    const handleFocusOut = () => {
      rootRef.value.setDropdown(false);
    };
    return { rootRef, handleFocusOut };
  },
  methods: {
    async _getProvinces() {
      try {
        this.provinces = provinces;
      } catch (error) {
        console.log("_getProvinces", error);
      }
    },
    searchCampus() {
      // this.$router.push({
      //   path: "list-campus",
      //   query: {
      //     index: this.index,
      //     provincesId: this.provincesId,
      //     keywordSearch: this.keywordSearch,
      //   },
      // });
    },
  },
  components: { BaseTitle, SelectCustom },
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
