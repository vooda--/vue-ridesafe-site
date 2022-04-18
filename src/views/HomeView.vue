<template>
    <Home/>
</template>

<script lang="ts">
import Home from '@/components/Home.vue';
import { defineComponent } from "vue";

export default defineComponent({
    name: 'HomeView',
    components: {Home}
})
</script>
<style lang="scss">
.home {
    margin-top: 20px;
}
</style>
