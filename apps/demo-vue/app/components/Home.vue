<template>
  <Page>
    <ActionBar>
      <Label text="Home"/>
    </ActionBar>

    <View style="width:200; height:200;margin: 24;">
      <Image stretch="aspectFill" style="width: 200; height: 200; position: absolute;"
             src="https://source.unsplash.com/random"/>
      <View style="align-self:flex-end;flex: 1; background-color: rgba(0, 0, 0, 0.5);">
        <Label style="color:white; font-size: 20; margin: 6;" text="Title"/>
        <Label style="color:white; margin: 6;" text="Subtitle"/>
      </View>
    </View>
  </Page>
</template>

<script>
export default {
  computed: {
    message() {
      return "Blank {N}-Vue app";
    }
  }
};
</script>

<style scoped lang="scss">
@import '~@nativescript/theme/scss/variables/blue';

// Custom styles
.fas {
  @include colorize($color: accent);
}

.info {
  font-size: 20;
  horizontal-align: center;
  vertical-align: center;
}
</style>
