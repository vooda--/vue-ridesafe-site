<template>
    <div>
        <RandomQuote/>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import RandomQuote from "@/components/RandomQuote.vue";

@Options({
  components: {
      RandomQuote: RandomQuote
  }
})
export default class Home extends Vue {
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

</style>
