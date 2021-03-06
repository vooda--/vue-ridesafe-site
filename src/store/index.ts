import Vuex from 'vuex';
import articles from './modules/articles';
import articleCategories from "@/store/modules/articleCategories";
import quotes from "@/store/modules/quotes";
import images from "@/store/modules/images";
import user from "@/store/modules/user";

export default new Vuex.Store({
  modules: {
    articles,
    quotes,
    images,
    user,
    articleCategories
  },
});

