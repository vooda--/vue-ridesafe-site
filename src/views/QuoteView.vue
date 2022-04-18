<template>
    <Quote :quote-id="quoteId"/>
</template>

<script lang="ts">
import Quote from "@/components/Quote.vue";
import { defineComponent } from "vue";

export default defineComponent({
    name: 'QuoteView',
    props: {
        quoteId: String
    },
    components: { Quote }
})
</script>
