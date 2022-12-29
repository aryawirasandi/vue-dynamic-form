<script setup lang="ts">
    import Forms from "@/components/forms.vue";
    import { onBeforeMount, ref } from "vue"
    const forms = ref([]);

    async function getFormSpec(){
        let response = await fetch("http://localhost:3000/forms");
        let data = await response.json();
        forms.value = data;
    }

    onBeforeMount(() => {
        getFormSpec();
    })
</script>
<template>
    <Forms :forms="forms"/>
</template>