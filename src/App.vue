<template>
  <div id="app">
    <tool-bar></tool-bar>
    <router-view></router-view>
    <sticky-button></sticky-button>
    <footer-component></footer-component>
    <spinner-component
      :loading="this.$store.state.spinnerStatus"
    ></spinner-component>
  </div>
</template>

<script>
import ToolBar from "./components/ToolBar.vue";
import SpinnerComponent from "./components/SpinnerComponent.vue";
import StickyButton from "./components/stickyButton.vue";
import FooterComponent from "./components/Footer.vue";

export default {
  components: {
    ToolBar,
    SpinnerComponent,
    StickyButton,
    FooterComponent,
  },
  data() {
    return {
      defaultPage: process.env.VUE_APP_DEF_PAGE,
      defaultLimit: process.env.VUE_APP_DEF_LIMIT,
    };
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

body {
  padding: 0;
  margin: 0;
  height: 100%;
}
</style>