<template>
  <div id="app">
    <header-menu></header-menu>
    <router-view></router-view>
    <sticky-button :active="this.$store.state.btnStatus"></sticky-button>
    <loading-spinner
      :loading="this.$store.state.spinnerStatus"
    ></loading-spinner>
    <footer-component></footer-component>
  </div>
</template>

<script>
import HeaderMenu from "./components/headerMenu.vue";
import LoadingSpinner from "./components/LoadingSpinner.vue";
import StickyButton from "./components/StickyButton.vue";
import FooterComponent from "./components/Footer.vue";

export default {
  components: {
    HeaderMenu,
    LoadingSpinner,
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