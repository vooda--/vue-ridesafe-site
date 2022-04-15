import helpers from "@/store/helpers";
import axios from "axios";

export default {
  namespaced: true,
  mutations: {
    updateCategories(state: any, categories: any) {
      state.categories = categories;
    },
    // updateToken(state: any, token: string) {
    //   state.token = token;
    // }
  },
  state: {
    categories: [],
    token: helpers.tokenn()
  },
  getters: {
    allCategories(state: any) {
      return state.categories;
    },
    getToken(state: any) {
      return state.userToken;
    }
  },
  actions: {
    async getAllCategories({commit, state}, language: string) {
      axios
        .get('https://dev.voodalab.com' + '/school/articleCategories/' + language!, {
          headers: {
            Authorization: `Basic ${state.token}`,
          },
        })
        .then((answer: any) => {
          console.log(answer);
          commit('updateCategories', answer.data);
        });
    }
  }
};
