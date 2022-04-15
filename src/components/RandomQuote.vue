<template>
    <div class="quote-block">
        <div class="quote">
            <img class="quote-image" :src="this.randomImage" alt="image"/>
            <h2 class="quote-text" v-if="randomQuote!== undefined">
                {{ this.randomQuote.quoteText }}
            </h2>
        </div>
    </div>
</template>

<script lang="ts">
import { Prop } from 'vue-property-decorator';
import { Action, Getter } from 'vuex-class'
import { Vue } from "vue-class-component";

export default class RandomQuote extends Vue {
    @Action('quotes/getAllQuotes') getAll: (language: string) => void;
    @Action('images/getRandomImage') getRandomImage: ({ orientation, tags }) => void;
    @Getter('quotes/getRandomQuote') randomQuote: any;
    @Getter('images/randomImage') randomImage: any;
    @Prop() private language = 'ru';

    get languages(): [string, string, string] {
        return ['ru', 'en', 'ro'];
    }

    mounted() {
        this.getAll(this.language);
        this.getRandomImage({ orientation: 'landscape', tags: ['girls', 'motorcycle'] });
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
            }
            font-size: 22pt;
            position: absolute;
            top: 75%;
            left: 50%;
            transform: translate(-50%, -50%);
            color: white;
            width: calc(60%);
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
        }
    }
}
</style>
