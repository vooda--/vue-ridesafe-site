<template>
    <Articles/>
</template>

<script lang="ts">
import Articles from "@/components/Articles.vue";
import { defineComponent } from "vue"; // @ is an alias to /src

export default defineComponent({
    name: "ArticlesView",
    components: {Articles},
    setup(props, context) {
        console.log('in setup');
    }
})
</script>
