<template>
  <div id="app">
    <header-menu></header-menu>
    <router-view></router-view>
    <sticky-button :active="this.$store.state.btnStatus"></sticky-button>
    <loading-spinner :loading="this.$store.state.spinnerStatus"></loading-spinner>
    <footer-component></footer-component>
  </div>
</template>

<script>
import HeaderMenu from '@/components/common/headerMenu';
import LoadingSpinner from './components/LoadingSpinner';
import StickyButton from './components/StickyButton';
import FooterComponent from '@/components/common/Footer';
export default {
  components: {
    HeaderMenu,
    LoadingSpinner,
    StickyButton,
    FooterComponent,
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
}
</style>
