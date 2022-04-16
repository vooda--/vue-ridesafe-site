<template>
    <div class="quote-block">
        <div class="quote">
            <img class="quote-image" :src="this.randomImage" alt="image"/>
            <h2 class="quote-text" v-if="randomQuote">
                {{ this.randomQuote.quoteText }}
            </h2>
        </div>
        <div class="controls">
            <button class="refresh-button" v-on:click="refresh">
                <img src="../assets/refresh.png"/>
                <span>Refresh</span>
            </button>
        </div>
    </div>
</template>

<script lang="ts">
import { Prop } from 'vue-property-decorator';
import { Action, Getter, Mutation } from 'vuex-class'
import { Vue } from "vue-class-component";
import { AxiosResponse } from "axios";
import { Quote } from "@/model/quote";

export default class RandomQuote extends Vue {
    @Action('quotes/getAllQuotes') getAll: (language: string) => Promise<AxiosResponse>;
    @Action('images/getRandomImage') getRandomImage: ({ orientation, tags }) => Promise<AxiosResponse>;
    @Mutation('quotes/randomQuote') randomQuoteUpdate: any;
    @Getter('quotes/getRandomQuote') randomQuote: any;
    @Getter('images/randomImage') randomImage: any;
    @Getter('quotes/allQuotes') allQuotes: Quote[];
    @Prop() private language = 'ru';
    quote: any;

    refresh() {
        if (this.allQuotes.length === 0) {
            Promise.all([
                this.getRandomImage({ orientation: 'landscape', tags: ['girls', 'motorcycle'] }),
                this.getAll(this.language)
            ]).then(() => {
                this.randomQuoteUpdate();
            })
        } else {
            this.getRandomImage({ orientation: 'landscape', tags: ['girls', 'motorcycle'] })
                .then(() => this.randomQuoteUpdate());
        }

    }

    get languages(): [string, string, string] {
        return ['ru', 'en', 'ro'];
    }

    mounted() {
        // this.getAll(this.language).then(()=>{
        this.refresh();
        // })
    }
}
</script>

<style lang="scss">
.quote-block {
    .controls {
        margin-top: 20px;

        .refresh-button {
            margin: auto;
            padding: 5px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 5px;
        }
    }

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
