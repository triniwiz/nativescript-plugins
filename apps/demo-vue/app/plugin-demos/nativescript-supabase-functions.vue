<template>
  <Page>
    <ActionBar>
      <Label text="nativescript-supabase-functions"/>
    </ActionBar>

    <GridLayout>
      <Button class="info" :text="message"/>
    </GridLayout>
  </Page>
</template>

<script lang="ts">
  import Vue from "nativescript-vue";
  import { DemoSharedNativescriptSupabaseFunctions } from '@demo/shared';
  import { } from '@triniwiz/nativescript-supabase-functions';

  export default Vue.extend({
    computed: {
      message() {
        return "Test nativescript-supabase-functions";
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
