<template>
    <div class="quote-block">
        <div class="quote">
            <img class="quote-image" :src="this.randomImage" alt="image"/>
            <h2 class="quote-text" v-show="quote">
                {{ this.quote?.quoteText }}
            </h2>
        </div>
    </div>
</template>

<script lang="ts">
import { Prop } from 'vue-property-decorator';
import { Action, Getter } from 'vuex-class'
import { Vue } from "vue-class-component";
import { AxiosResponse } from "axios";

export default class Quote extends Vue {
    @Action('quotes/getAllQuotes') getAll: (language: string) => Promise<AxiosResponse>;
    @Action('images/getRandomImage') getRandomImage: ({ orientation, tags }) => Promise<AxiosResponse>;
    @Getter('images/randomImage') randomImage: any;
    @Getter('quotes/getQuoteById') getQuote: (id) => Quote;
    @Getter('user/language') language: string;
    @Prop() private quoteId;
    quote: any = {};


    mounted() {
        Promise.all(
            [
                this.getRandomImage({ orientation: 'landscape', tags: ['girls', 'motorcycle'] }),
                this.getAll(this.language)
            ]
        ).then(() => {
                this.quote = this.getQuote(this.quoteId);
            });
    }
}
</script>

<style lang="scss">
.quote-block {
    .quote {
        position: relative;
        max-width: 700px;
        margin: auto;

        .quote-text {
            @media (max-width: 768px) {
                font-size: 14pt;
                top: 50%;
                bottom: inherit;
                transform: translate(-50%, -50%);
            }
            font-size: 22pt;
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translate(-50%);
            color: white;
            width: 75%;
            text-shadow: 2px 2px 10px black;
            opacity: 0.9;
        }

        .quote-image {
            @media (min-width: 768px) {
                width: 100%;
            }
            filter: brightness(90%);
            width: 90%;
            max-width: 700px;
            box-shadow: 0px 2px 15px black;
        }
    }
}
</style>
