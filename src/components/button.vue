<script setup lang="ts">
import { defineEmits, defineProps } from "vue";

defineProps({
  modelValue: {
    type: String,
  },
  button: {
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
     <div :class="button?.classParent" :id="button?.idParent">
     <div :class="button?.parentInputClass">
      <button
        :type="button?.behaviour"
        :name="button?.name"
        :placeholder="button?.placeholder"
        :class="button?.class"
        :id="button?.id"
        :autofocus="button?.autofocus"
        :disabled="button?.disabled"
        :form="button?.formRefer"
        >
        {{ button?.value }}
        <i></i>
      </button>
     </div>
   </div>
</template>