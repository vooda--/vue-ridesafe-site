<template>
    <Quotes/>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Quotes from "@/components/Quotes.vue"; // @ is an alias to /src

@Options({
    components: {
        Quotes
    },
})
export default class QuotesView extends Vue {}
</script>
