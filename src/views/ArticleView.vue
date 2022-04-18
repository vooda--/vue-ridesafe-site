<template>
    <Article :id/>
</template>

<script lang="ts">
import Article from "@/components/Article.vue";
import { defineComponent } from "vue";

export default defineComponent({
    name: 'ArticleView',
    components: { Article }
})
</script>
