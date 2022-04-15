<template>
    <nav class="navigation">
        <router-link class="nav-item" v-for="link in this.links" :key="link.link" :exact="link.exact" active-class="active" :to="link.link">
            {{link.title}}
        </router-link>
    </nav>
</template>

<script lang="ts">
import {Vue} from 'vue-class-component';

export default class Header extends Vue {
    public links: any = [
        {
            title: 'Home',
            link: '/',
            exact: true
        },
        {
            title: 'Articles',
            link: '/articles'
        },
        {
            title: 'Quotes',
            link: '/quotes'
        },
        {
            title: 'Quizes',
            link: '/quizes'
        }
    ];

    // get activeLink(): string {
    //   return (this.$route) ? this.$route.name : '';
    // }
}
</script>

<style lang="scss">
.navigation {
    width: 100%;
    border-bottom: 1px solid rgba(0, 0, 0, 0.30);
    padding-bottom: 20px;

    .nav-item {
        padding: 10px;
        color: black;
        &:hover {
            background-color: #42b983;
            text-decoration: underline;
        }
    }
    .active {
        font-weight: bold;
    }
}
</style>
