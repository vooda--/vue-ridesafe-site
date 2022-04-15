<template>
    <div class="quotes">
        <!--    <div><span>Language: </span>-->
        <!--      <input type="text" v-model="language" v-on:keyup.enter="addQuote"/>-->
        <!--      <button v-bind:disabled="language.length == 0">language</button>-->
        <!--    </div>-->
<!--        <button v-on:click="addQuote">-->
<!--            Add-->
<!--        </button>-->
<!--        <div>RANDOM QUOTE:</div>-->
        <div class="quote-block">
            <div class="quote">
                <img class="quote-image" :src="this.randomImage" alt="image"/>
                <h2 class="quote-text" v-if="randomQuote!== undefined">
                    {{ this.randomQuote.quoteText }}
                </h2>
            </div>
        </div>
        <!--    <div>Quotes:</div>-->
        <!--    &lt;!&ndash;    <div>{{allQuotes}}</div>&ndash;&gt;-->
        <!--    <ul>-->
        <!--      <li v-bind:key="quote.id" v-for="quote in allQuotes">-->
        <!--        {{ quote.id }} - {{quote.quoteText}}-->
        <!--      </li>-->
        <!--    </ul>-->
    </div>
</template>

<script lang="ts">
import { Prop } from 'vue-property-decorator';
import { Action, Getter } from 'vuex-class'
import { Quote } from "@/model/quote";
import { Options, Vue } from "vue-class-component";

export default class Quotes extends Vue {
    @Getter('quotes/allQuotes') allQuotes;
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
        //this.quote = this.randomQuote();
    }

    public addQuote(): void {
        console.log('Add', this.language);
    }

}
</script>

<style lang="scss">
.quotes {
    margin-top: 100px;
}
.quote-block {
    margin: auto;
    .quote {
        position: relative;

        .quote-text {
            @media (max-width: 768px ) {
                font-size: 14pt;
                top: 50%;
            }
            font-size: 22pt;
            position: absolute;
            top: 75%;
            left: 50%;
            transform: translate(-50%, -50%);
            color: white;
            width: 60%;
            text-shadow: 2px 2px 10px black;
            opacity: 0.9;
        }

        .quote-image {
            @media (min-width: 768px ) {
                width: 100%;
            }
            filter: brightness(90%);
            width: 90%;
            max-width: 700px;
        }
    }
}
</style>
