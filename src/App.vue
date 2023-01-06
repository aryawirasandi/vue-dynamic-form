<script setup lang="ts">
    import Forms from "@/components/forms.vue";
    import { onBeforeMount, ref } from "vue"
    const forms = ref([]);

    async function getFormSpec():Promise<void>{
      try {
        let response = await fetch("http://localhost:3000/forms");
        let data = await response.json();
        forms.value = data;
      }catch (error){
        console.log(error);
      }
    }

    onBeforeMount(() => {
        getFormSpec();
    })

    function trigger(val){
        console.log(val);
    }
</script>
<template>
    <Forms @CbSubmit.prevent="trigger($event)" :forms="forms"/>
</template>