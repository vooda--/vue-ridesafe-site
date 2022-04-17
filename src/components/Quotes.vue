<template>
    <div class="quotes">
        <div class="quote-block" v-for="quote in allQuotes" v-bind:key="quote.id">
            <div class="quote-text">
                {{ quote.quoteText }}
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Prop } from 'vue-property-decorator';
import { Action, Getter } from 'vuex-class'
import { Options, Vue } from "vue-class-component";
import RandomQuote from "@/components/RandomQuote.vue";

@Options({
    components: {
        RandomQuote
    }
})
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

    public addQuote(): void {
        console.log('Add', this.language);
    }

}
</script>

<style lang="scss">
.quotes {
    @media (max-width: 768px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media(max-width: 500px) {
        grid-template-columns: repeat(2, 1fr);
        .quote-text {
            font-size: 14px;
        }
    }

    margin-top: 100px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: minmax(100px, auto);
    overflow: hidden;
    column-gap: 20px;
    row-gap: 20px;

    .quote-block {
        background: rgba(255, 212, 129, 0.43);
        border-radius: 5px;
        padding: 5px;
        display: flex;
        justify-content: center;
        align-items: center;

        .quote-text {
            line-height: 24px;
            font-size: 16px;
        }
    }
}
</style>
