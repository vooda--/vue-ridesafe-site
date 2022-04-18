<template>
    <Quotes/>
</template>

<script lang="ts">
import Quotes from "@/components/Quotes.vue";
import { defineComponent } from "vue";

export default defineComponent({
    name: 'QuotesView',
    components: {Quotes}
})
</script>
