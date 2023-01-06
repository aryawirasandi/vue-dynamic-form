<script setup lang="ts">
import { defineEmits } from "vue";

defineProps({
  modelValue: {
    type: String,
  },
  select: {
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
  <div :class="select?.classParent" :id="select?.idParent">
    <div :class="select?.parentLabelClass">
       <label :for="select?.name">{{ select?.label }}</label>
     </div>
     <div :class="select?.parentInputClass">
        <select @change="$emit('update:modelValue', $event.target[$event.target.selectedIndex].text)">
            <option 
                v-if="select.lists.length > 0 || select.lists !== undefined"
                v-for="list in select?.lists"
                :key="list.id"
                :value="list.value"
                :disabled="list.isDisabled"
                v-bind="list.attrs"
                >{{  list.value  }}
            </option>
        </select>
     </div>
  </div>
</template>