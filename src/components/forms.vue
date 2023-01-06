<script setup lang="ts">
import { computed } from "vue";
import Input from "@/components/input.vue";
import Select from "@/components/select.vue";
import Button from "@/components/button.vue";

const props = defineProps(['forms']);

const isFormEmpty = computed(() => props.forms?.length === 0);
</script>
<template>
  <form @submit="$emit('CbSubmit', $event)" v-if="!isFormEmpty" v-bind="props.forms?.attr">
    <div
      v-for="(item, index) in props.forms.fields"
      :key="index"
      class="form-group"
      :id="item.name === undefined ? 'failed-render' : item.name + '-wrapper'"
    >
      <Input
        v-if="
          item.type === 'text' ||
          item.type === 'password' ||
          item.type === 'file' ||
          item.type === 'checkbox'
        "
        :input="item"
        v-model="item.value"
      />
      <Input
          v-else-if="item.type === 'radio'"
          v-for="radio in item.fields"
          :input="radio"
          :key="radio.id"
          v-model="item.value"
      />
      <Select
        v-else-if="item.type === 'select'"
        :select="item"
        v-model="item.selected"
      />
      <Button v-else-if="item.type === 'button'" :button="item" />
      <div v-else>
        <!-- the form is not rendered, did you fill the object correctly? -->
      </div>
    </div>
  </form>
  <div v-else>
    <p>Loading....</p>
  </div>
</template>
