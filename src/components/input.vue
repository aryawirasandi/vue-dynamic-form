<script setup lang="ts">
   import { defineProps, defineEmits } from 'vue';
   const props =defineProps({
     input: {
      type : Object,
     },
     classParent: {
      type : String,
      default : "container"
     },
     idParent: {
      type : String,
      default : "container"
     },
     modelValue:{
      type: [String, Boolean]
     }
   });
   defineEmits(['update:modelValue']);
   
   function isCheckbox():boolean{
      return  props.input?.type === "checkbox";
   }
</script>
<template>
   <div :class="input?.classParent" :id="input?.idParent">
     <div :class="input?.parentLabelClass">
       <label :for="input?.name">{{ input?.label }}</label>
     </div>
     <div :class="input?.parentInputClass">
      <input 
        :type="input?.type"
        :name="input?.name"
        :value="input?.value"
        :checked="input?.value"
        @input="!isCheckbox() ? $emit('update:modelValue', ($event.target as HTMLTextAreaElement).value) : null"
        @change="isCheckbox() ? $emit('update:modelValue', ($event.target as HTMLInputElement).checked) : null"
        v-bind="input?.attrs"
        />
     </div>
   </div>
</template>
<style scoped>
  .container{
    display: flex;
  }
</style>