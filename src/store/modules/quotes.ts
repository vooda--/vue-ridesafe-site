import axios from "axios";
import helpers from "@/store/helpers";

export default {
  namespaced: true,
  mutations: {
    updateQuotes(state: any, quotes: any) {
      state.quotes = quotes;
    },
    randomQuote(state: any) {
      const random = Math.random(); //0..1
      const key = Math.floor(state.quotes.length * random); /* example: 40 quotes, 0.33; 40*0.33 */
      state.randomQuote = state.quotes[key];
    }
  },
  state: {
    quotes: [],
    randomQuote: null,
    token: helpers.tokenn()
  },

  getters: {
    allQuotes(state: any) {
      return state.quotes;
    },
    getToken(state: any) {
      return state.userToken;
    },
    getRandomQuote(state: any) {
      return state.randomQuote;
    }
  },
  actions: {
    async getAllQuotes({commit, state}, language: string) {
      return axios
        .get('https://dev.voodalab.com' + '/school/quotes/'+language!+'?lastRequest=0', {
          headers: {
            Authorization: `Basic ${state.token}`,
          },
        })
        .then((answer: any) => commit('updateQuotes', answer.data));
    }
  }
};
