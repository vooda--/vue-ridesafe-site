<template>
    <Articles/>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Articles from "@/components/Articles.vue"; // @ is an alias to /src

@Options({
    components: {
        Articles
    },
})
export default class ArticlesView extends Vue {}
</script>
