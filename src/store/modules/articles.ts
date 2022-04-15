import axios from "axios";
import helpers from "@/store/helpers";

export interface ArticleState {
  articles: [];
  token: string;
}
export default {
  namespaced: true,
  mutations: {
    updateArticles(state: ArticleState, articles: any) {
      state.articles = articles;
    },
  },
  state: {
    articles: [],
    token: helpers.tokenn()
  } as ArticleState,

  getters: {
    allArticles(state: ArticleState) {
      return state.articles;
    },
    getToken(state: ArticleState) {
      return state.token;
    }
  },
  actions: {
    async fetchArticlesByCategory({commit, state}, query: {language: string; categoryId: number}) {
      axios
        .get('https://dev.voodalab.com' + '/school/articles/' + query.language + '/category/' + query.categoryId, {
          headers: {
            Authorization: `Basic ${state.token}`
          }
        })
        .then((answer: any) => commit('updateArticles', answer.data.content));
    },
    async getAllArticles({commit, state}, language: string) {
      axios
        .get('https://dev.voodalab.com' + '/school/articles/'+language!+'?lastRequest=0', {
          headers: {
            Authorization: `Basic ${state.token}`,
          },
        })
        .then((answer: any) => commit('updateArticles', answer.data));
    }
  }
};
