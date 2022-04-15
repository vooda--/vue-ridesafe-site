<template>
  <div class="articles">
<!--    <div><span>Language: </span>-->
<!--      <input type="text" v-model="language" v-on:keyup.enter="addArticle"/>-->
<!--      <button v-bind:disabled="language.length == 0">language</button>-->
<!--    </div>-->
    <div>{{ languages }}</div>
    <button v-on:click="addArticle">
      Add
    </button>
    <div>Categories:</div>
    <div>
      <ul>
        <li v-bind:key="category.id" v-for="category in allCategories">
          {{category.id}} - <span @click="getArticlesByCategory(category.id)">{{
            category.title
            }}</span>
        </li>
      </ul>
    </div>
    <div>Articles:</div>
    <!--    <div>{{allArticles}}</div>-->
    <ul>
      <li v-bind:key="article.id" v-for="article in allArticles">
        {{ article.id }} - {{article.title}}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
  import {Vue, Options} from 'vue-class-component';
  import {Base64} from 'js-base64';
  import {Action, Getter} from 'vuex-class'
  import {Quote} from "@/model/quote";
  import { Prop } from "vue-property-decorator";

  @Options({
    // filters: {
    //   capitalize(value: string) {
    //     if (value !== null) {
    //       return value.toUpperCase()
    //     }
    //     return '';
    //   }
    // }
  })
  export default class Articles extends Vue {
    @Getter('articleCategories/allCategories') allCategories;
    @Getter('articles/allArticles') allArticles: [];
    @Action('articles/getAllArticles') getAll;
    @Action('articles/fetchArticlesByCategory') fetchArticlesByCategory;
    @Action('articleCategories/getAllCategories') getAllCatgories;

    @Prop() private language = 'ru';

    get languages(): [string, string, string] {
      return ['ru', 'en', 'ro'];
    }

    mounted() {
      this.getAllCatgories(this.language);
      //this.getAll(this.language);
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
