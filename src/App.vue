<template>
    <div class="wrapper">
        <Header></Header>
        <div class="content">
            <router-view/>
        </div>
        <Footer></Footer>
    </div>
</template>

<style lang="less">
.button {
    background-color: #4CAF50; /* Green */
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    cursor: pointer;
    &:hover {
        background-color: #459d48;
    }
}

body {
    margin: 0;
}

.footer {
    margin-top: auto;
}

.wrapper {
    height: 100vh;
    display: flex;
    flex-direction: column;
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
    components: {Header, Footer}
};
</script>
