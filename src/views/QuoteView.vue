<template>
    <Quote :quote-id="quoteId"/>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Quote from "@/components/Quote.vue"; // @ is an alias to /src

@Options({
    props: {
        quoteId: Number
    },
    components: {
        Quote
    },
})
export default class QuoteView extends Vue {}
</script>
