export default {
    namespaced: true,
    mutations:{
        updateLanguage(state: any, lang: string) {
            state.language = lang;
        }
    },
    state: {
        language: 'ru',
    },
    getters: {
        language: (state: any) => {
            return state.language;
        }
    },
    actions: {
    }
}
