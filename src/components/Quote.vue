<template>
    <div class="quote-block">
        <div class="quote">
            <img class="quote-image" :src="randomImage" alt="image"/>
            <h2 class="quote-text">
                {{ quote?.quoteText }}
            </h2>
        </div>
    </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, ref, Ref } from "vue";
import {useStore } from "vuex";

export default defineComponent({
    //eslint-disable-next-line
    name: 'Quote',
    props: {
        quoteId: String
    },
    setup(props, context) {
        const store = useStore();
        const getQuoteByID = store.getters["quotes/getQuoteById"];
        const randomImage = computed(() => store.getters['images/randomImage']);
        let quote = ref({});

        onMounted(() => {
            Promise.all(
                [
                    store.dispatch('quotes/getAllQuotes', 'ru'),
                    store.dispatch('images/getRandomImage', { orientation: 'landscape', tags:['girls', 'motorcycle'] })
                ]
            ).then(() => {
               quote.value = getQuoteByID(props.quoteId);
            });
        })
        return {
            quote,
            randomImage
        }
    }
})
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
