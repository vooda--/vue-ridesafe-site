import Vuex from 'vuex';
import articles from './modules/articles';
import articleCategories from "@/store/modules/articleCategories";
import quotes from "@/store/modules/quotes";
import images from "@/store/modules/images";

//Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    articles,
    quotes,
    images,
    articleCategories
  },
});

