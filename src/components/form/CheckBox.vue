<template>
  <label class="flex custom-checkbox items-center gap-2" @click="handleClick">
    <input type="checkbox"
           ref="inputRef" @click.stop
           v-model="inputModel"
           :value="value"
           :indeterminate.prop="indeterminate"
           :name="name"
           :disabled="disabled"
           :required="required"
           :false-value="falseValue"
           :true-value="trueValue"
           :autocomplete="autocomplete">
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
  disabled: Boolean,
  trueValue: {
    type: [String, Number, Boolean, Function, Object, Array],
    default: true
  },
  falseValue: {
    type: [String, Number, Boolean, Function, Object, Array],
    default: false
  },
  autocomplete: {
    type: String,
    default: 'on'
  },
  indeterminate: Boolean
});

const inputRef = ref(null);
const emits = defineEmits(['update:modelValue', 'click']);
const inputModel = computed({
  get: () => {
    return props.modelValue;
  },
  set: (value) => {
    emits('update:modelValue', value);
  }
});

const handleClick = ($event) => {
  if (props.disabled) {
    return;
  }
  inputRef.value.focus();
  emits('click', $event);
};
</script>

<style scoped>
.custom-checkbox {
  cursor: pointer;
}

.custom-checkbox input {
  display: none;
}

.custom-checkbox .custom-icon {
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

.custom-checkbox input:checked + .custom-icon {
  background: #3a7dfd;
}

.custom-checkbox input:checked + .custom-icon > .dot {
  /*background: rgba(58, 125, 253, 0.82);*/
  background-image: url("data:image/svg+xml,%3Csvg%20width%3D%229%22%20height%3D%228%22%20viewBox%3D%220%200%209%208%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M6.97%200.97C7.11087%200.835889%207.29833%200.761747%207.49282%200.763218C7.68731%200.76469%207.87362%200.84166%208.01245%200.977888C8.15127%201.11411%208.23174%201.29894%208.23688%201.49337C8.24202%201.6878%208.17143%201.87663%208.04%202.02L4.05%207.01C3.98139%207.0839%203.89858%207.1432%203.80653%207.18437C3.71448%207.22553%203.61507%207.24771%203.51425%207.24958C3.41343%207.25144%203.31327%207.23296%203.21976%207.19523C3.12624%207.1575%203.0413%207.10131%202.97%207.03L0.324%204.384C0.250313%204.31534%200.191211%204.23254%200.150219%204.14054C0.109227%204.04854%200.0871849%203.94923%200.0854081%203.84852C0.0836313%203.74782%200.102156%203.64779%200.139877%203.5544C0.177598%203.46101%200.233743%203.37618%200.304962%203.30496C0.37618%203.23374%200.461014%203.1776%200.554402%203.13988C0.64779%203.10216%200.74782%203.08363%200.848523%203.08541C0.949225%203.08718%201.04854%203.10923%201.14054%203.15022C1.23254%203.19121%201.31534%203.25031%201.384%203.324L3.478%205.417L6.951%200.992C6.95725%200.984301%206.96393%200.976956%206.971%200.97H6.97Z%22%20fill%3D%22white%22%2F%3E%0A%3C%2Fsvg%3E%0A");
  border-radius: 6px;
  color: white;
  height: 2rem;
  width: 2rem;
  background-repeat: no-repeat;
  background-position: center;
}
</style>
