<template>
  <Page>
    <ActionBar>
      <Label text="nativescript-messenger"/>
    </ActionBar>

    <GridLayout>
      <Button class="info" :text="message"/>
    </GridLayout>
  </Page>
</template>

<script lang="ts">
  import Vue from "nativescript-vue";
  import { DemoSharedNativescriptMessenger } from '@demo/shared';
  import { } from '@triniwiz/nativescript-messenger';

  export default Vue.extend({
    computed: {
      message() {
        return "Test nativescript-messenger";
      }
    }
  });
</script>

<style scoped lang="scss">

  .info {
    font-size: 20;
    horizontal-align: center;
    vertical-align: center;
  }
</style>
