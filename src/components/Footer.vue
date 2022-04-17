<template>
    <div class="footer">
        <div class="company">VoodaLab</div>
        <div>2022</div>
    </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';

export default class Footer extends Vue {

}
</script>

<style lang="scss">
.footer {
    .company {
        font-weight: bold;
    }
    padding: 10px;
    display: flex;
    flex-direction: column;
    border-top: 1px solid rgba(0, 0, 0, 0.30);
}
</style>
