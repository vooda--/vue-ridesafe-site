<template>
  <div class="articles">
    <div>Categories:</div>
    <div v-if="allCategories.length > 0">
      <ul>
        <li v-bind:key="category.id" v-for="category in allCategories">
          {{category.id}} - <span @click="getArticlesByCategory(category.id)">{{
            category.title
            }}</span>
        </li>
      </ul>
    </div>
      <div v-else>
          No Categories yet!
      </div>
    <div>Articles:</div>
    <ul v-if="allArticles.length>0">
      <li v-bind:key="article.id" v-for="article in allArticles">
        {{ article.id }} - {{article.title}}
      </li>
    </ul>
      <div v-else>
          No Articles yet!
      </div>
  </div>
</template>

<script lang="ts">
  import {Vue, Options} from 'vue-class-component';
  import {Base64} from 'js-base64';
  import {Action, Getter} from 'vuex-class'
  import {Quote} from "@/model/quote";
  import { Prop } from "vue-property-decorator";

  export default class Articles extends Vue {
    @Getter('articleCategories/allCategories') allCategories;
    @Getter('articles/allArticles') allArticles: [];
    @Action('articles/getAllArticles') getAll;
    @Action('articles/fetchArticlesByCategory') fetchArticlesByCategory;
    @Action('articleCategories/getAllCategories') getAllCategories;
    @Getter('user/language') language: string;

    mounted() {
      this.getAllCategories(this.language);
    }

    public getAllArticles(): void {
      this.getAll(this.language);
    }

    public getArticlesByCategory(categoryId: number): void {
      console.log(categoryId);
      this.fetchArticlesByCategory({language: this.language, categoryId});
    }

    public addArticle(): void {
      console.log('Add', this.language);
    }

  }
</script>

<style>
  .articles {
    display: block;
    width: 200px;
  }
</style>
