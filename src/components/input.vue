<script setup lang="ts">
import {defineEmits} from 'vue';
   const props = defineProps({
     input: {
      type : Object,
     },
     radio:{
       type: Object
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
   function isRadio():boolean{
     return props.input?.type === "radio"
   }

   function isFile(){
     return props.input?.type === "file"
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
          :value="modelValue"
          :checked="input?.value"
          @input="!isCheckbox() ? $emit('update:modelValue', ($event.target).value) : isFile() ?  $emit('update:modelValue', ($event.target).files ) : null"
          @change="isCheckbox() ? $emit('update:modelValue', ($event.target).checked) : isRadio() ? $emit('update:modelValue', ($event.target).value) : null"
          v-bind="input?.attrs"
        />
       {{ modelValue }}
     </div>
   </div>
</template>