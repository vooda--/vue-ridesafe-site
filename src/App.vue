<template>
    <div id="app">
        <Header></Header>
        <router-view/>
        <Footer></Footer>
    </div>
</template>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
a, a:hover, a:focus, a:active {
    text-decoration: none;
    color: inherit;
}
</style>
<script>
import Header from '@/components/Header';
import Footer from '@/components/Footer';
export default {
    components: { Header, Footer }
};
</script>
