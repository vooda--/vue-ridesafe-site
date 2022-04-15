import axios from "axios";
import helpers from "@/store/helpers";

export default {
    namespaced: true,
    mutations:{
        updateCurrentImage(state: any, image: object) {
            state.currentImage = image;
        }
    },
    state: {
        currentImage: null,
        token: helpers.tokenn()
    },
    getters: {
        randomImage: (state: any) => {
            return state.currentImage;
        }
    },
    actions: {
        async getRandomImage({commit, state}, {orientation, tags}) {
            axios
                .get(`https://dev.voodalab.com/quotes/randomImage?keywords=${tags.join(',')}&orientation=${orientation}`, {
                    headers: {
                        Authorization: `Basic ${state.token}`,
                        'Content-type': 'image/jpeg',
                    },
                    responseType: "blob"
                })
                .then((answer: any) => {
                    const fileReaderInstance = new FileReader();
                    fileReaderInstance.readAsDataURL(answer.data);
                    let base64data;
                    fileReaderInstance.onload = () => {
                        base64data = fileReaderInstance.result;
                        commit('updateCurrentImage', base64data);
                    }
                    }
                );
        }
    }
}
