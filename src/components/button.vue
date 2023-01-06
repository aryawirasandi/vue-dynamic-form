<script setup lang="ts">
defineProps({
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
        <template  v-if="button?.isIcon">
          <i></i>
        </template>
      </button>
     </div>
   </div>
</template>