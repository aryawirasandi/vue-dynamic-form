<script setup lang="ts">
import { defineEmits } from "vue";

defineProps({
  modelValue: {
    type: String,
  },
  checkbox: {
    type: Object,
  },
  classParent: {
    type: String,
    default: "container",
  },
  idParent: {
      type : String,
      default : "container"
     },
});

defineEmits(['update:modelValue']);
</script>
<template>
  <div :class="checkbox?.classParent" :id="checkbox?.idParent">
    <div :class="checkbox?.parentLabelClass">
       <label :for="checkbox?.name">{{ checkbox?.label }}</label>
     </div>
     <div :class="checkbox?.parentInputClass">
        <input type="checkbox" :name="checkbox?.name" :id="checkbox?.id" :value="checkbox?.value"   @input="$emit('update:modelValue', ($event.target).value)">
     </div>
  </div>
</template>