<template>
  <label class="flex custom-radio items-center gap-2" @click="handleClick">
    <input type="radio"
           ref="inputRef" @click.stop
           v-model="inputModel"
           :value="value"
           :disabled="disabled"
           :name="name"
           :required="required">
    <div class="custom-icon">
      <div class="dot"></div>
    </div>
    <div class="text-checkbox">
      <slot>
      </slot>
    </div>
  </label>
</template>

<script>
export default {
  name: "CheckBox",
}
</script>
<script setup>

import {computed, ref} from "vue";

const props = defineProps({
  modelValue: {
    type: [String, Number, Boolean, Object, Array],
    default: null
  },
  value: {
    type: [String, Number, Boolean],
    default: null
  },
  label: {
    type: String,
    default: null
  },
  size: {
    type: String,
    default: 'base'
  },
  type: {
    type: String,
    default: 'primary'
  },
  name: String,
  required: Boolean,
  disabled: Boolean
});

const inputRef = ref(null);
const emits = defineEmits(['update:modelValue', 'click']);
const inputModel = computed({
  get: () => {
    return props.modelValue
  },
  set: (value) => {
    emits('update:modelValue', value);
  }
});


const handleClick = (event) => {
  if (props.disabled) {
    return;
  }
  inputRef.value.focus();
  emits('click', event);
};
</script>

<style>
.custom-radio {
  cursor: pointer;
}

.custom-radio input {
  display: none;
}

.custom-radio .custom-icon {
  box-sizing: border-box;
  width: 1.5rem;
  height: 1.5rem;
  background: #FFFFFF;
  border: 1px solid #A8A8A8;
  border-radius: 7px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.custom-radio input:checked + .custom-icon > .dot {
  background: rgba(58, 125, 253, 0.82);
  height: 1rem;
  width: 1rem;
  border-radius: 6px;
}
</style>
