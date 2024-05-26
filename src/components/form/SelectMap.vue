<template>
  <div dropdown tabindex="0" ref="rootRef" class="relative custom-select cursor-pointer" @click="toggleDropdown">
    <div class="rounded-full text-center text-xl" :class="style">
      <div
        class="flex justify-center items-center gap-1 md:gap-2 lg:gap-4 xl:gap-5 text-[0.438rem] md:text-[0.813rem] lg:text-[1.125rem] xl:text-[1.5rem] leading-tight">
        <slot>{{
            state?.selected?.label || state?.selected?.[labelKey] || placeholder
        }}
        </slot>
        <span v-if="state.showDropdown">
          <i class="fa-solid fa-angle-up text-[0.438rem] md:text-[0.813rem] lg:text-[1.125rem] xl:text-[1.5rem]"></i>
        </span>

        <span v-if="!state.showDropdown">
          <i class="fa-solid fa-angle-down text-[0.438rem] md:text-[0.813rem] lg:text-[1.125rem] xl:text-[1.5rem]"></i>
        </span>
      </div>
    </div>

    <div
      class="w-fit md:w-full px-2 md:px-0 md:overflow-y-scroll absolute bg-white left-0 right-0 z-40 mt-2 dropdown-list"
      id="style-scroll" :class="[{ hidden: !state.showDropdown }, options.length >= 10 ? 'h-fit md:h-[31.25rem]' : '']">
      <ul v-if="options.length > 0">
        <li v-for="(item, index) in options" :key="index"
          class="text-center text-[0.438rem] md:text-[0.813rem] lg:text-[1.125rem] xl:text-[1.5rem]"
          @click="chooseDropdownItem($event, item, index)">
          {{ item?.label || item?.[labelKey] }}
        </li>
      </ul>
    </div>
    <input type="hidden" v-model="inputModel" />
  </div>
</template>

<script>
export default {
  name: "Select",
};
</script>
<script setup>
import {
  computed,
  onMounted,
  onUnmounted,
  reactive,
  ref,
  watch,
  defineExpose,
} from "vue";

const rootRef = ref(null);

const props = defineProps({
  value: {
    type: String,
  },
  options: {
    type: Array,
    default: [
      {
        value: 29,
        label: "시 / 도",
      },
      {
        value: 30,
        label: "Hải Phòng",
      },
    ],
  },
  modelValue: {
    type: [String, Number, Boolean, Object, Array],
    default: [],
  },
  valueKey: {
    type: String,
    default: "value",
  },
  labelKey: {
    type: String,
    default: "label",
  },
  size: {
    type: String,
    default: "base",
  },
  type: {
    type: String,
    default: "primary",
  },
  name: {
    type: String,
    default: "select",
  },
  required: Boolean,
  disabled: Boolean,
  placeholder: {
    type: String,
    default: "",
  },
  style: {
    type: String,
    default: "rounded-full bg-white border border-[#aed3ff]",
  },
  rounded: Boolean,
  multiple: Boolean,
});
const state = reactive({
  showDropdown: false,
  selected: props.options[0],
});
const toggleDropdown = ($event) => {
  state.showDropdown = !state.showDropdown;
};
const emits = defineEmits([
  "update:modelValue",
  "click",
  "focus",
  "blur",
  "onSelectItem",
]);

const chooseDropdownItem = (event, item, index) => {
  console.log('choose drop items: ', event, item, index)
  state.selected = item;
  emits("itemClick", event, item, index);
  emits("update:modelValue", state.selected.id);
};

const inputModel = computed({
  get: () => {
    const newSelected = props.options.filter((item) => item.id == props.modelValue);
    console.log(newSelected);
    if (newSelected.length > 0) {
      state.selected = newSelected[0];
    }
    return props.modelValue;
  },
  set: (value) => {
    emits("update:modelValue", value);
  },
});


const setDropdown = (value) => {
  state.showDropdown = value;
};
const resetSelected = () => {
  state.selected = null;
};
defineExpose({ rootRef, setDropdown, resetSelected });
</script>

<style scoped>
.custom-select {
  color: #939393;
}

.custom-select .dropdown-list {
  box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
}

.custom-select .dropdown-list li:hover {
  color: #0075ff;
}

.custom-select .dropdown-list li {
  padding-top: 1rem;
}

.custom-select .dropdown-list li:last-child {
  padding-bottom: 1rem;
}

#style-scroll::-webkit-scrollbar {
  width: 5px;
  margin-left: 10px;
}

#style-scroll::-webkit-scrollbar-track {
  background-color: #ffff;
  -webkit-border-radius: 10px;
  border-radius: 10px;
}

#style-scroll::-webkit-scrollbar-thumb {
  -webkit-border-radius: 10px;
  border-radius: 10px;
  background: #7e7e7e;
}
</style>
