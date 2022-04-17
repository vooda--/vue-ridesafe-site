<template>
    <Article :id/>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Article from "@/components/Article.vue"; // @ is an alias to /src

@Options({
    components: {
        Article
    },
})
export default class ArticleView extends Vue {}
</script>
