<template>
    <div class="footer">
        <div>VoodaLab</div>
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
    display: flex;
    flex-direction: column;
    gap: 5px;
    position: absolute;
    bottom: 0;
    width: 99%;
    margin-top: 20px;
    border-top: 1px solid rgba(0, 0, 0, 0.30);
}
</style>
