<template>
  <div>
    {{title}} - {{description}}
  </div>
</template>
<script lang="ts">

  import {Vue} from 'vue-class-component';
  import { Prop } from "vue-property-decorator";

export default class Article extends Vue {
  @Prop() private title!: string;
  @Prop() private description!: string;
  @Prop() private content!: string;
  @Prop() private id!: number;
  @Prop() private categoryId!: number;
  @Prop() private language!: string;
}

</script>

<style>
  .articles {
    display: block;
    width: 200px;
  }
</style>
