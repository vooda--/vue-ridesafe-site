<template>
    <div class="quotes">
        <RandomQuote/>
        <!--    <div><span>Language: </span>-->
        <!--      <input type="text" v-model="language" v-on:keyup.enter="addQuote"/>-->
        <!--      <button v-bind:disabled="language.length == 0">language</button>-->
        <!--    </div>-->

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
    margin-top: 100px;
}
</style>
