<template>
    <Home/>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Home from '@/components/Home.vue'; // @ is an alias to /src

@Options({
    components: {
        Home: Home
    },
})
export default class HomeView extends Vue {
}
</script>
<style lang="scss">
.home {
    margin-top: 20px;
}
</style>
