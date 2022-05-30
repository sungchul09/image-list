<template>
  <div id="app">
    <header-menu></header-menu>
    <router-view></router-view>
    <fix-button :pageBtn="$store.state.pageBtn"></fix-button>
    <spinner :loading="$store.state.loadingStatus"> </spinner>
    <footer-component></footer-component>
  </div>
</template>

<script>
import HeaderMenu from '@/components/common/headerMenu';
import Spinner from '@/components/Spinner';
import FixButton from '@/components/FixButton';
import FooterComponent from '@/components/common/Footer';
export default {
  components: {
    HeaderMenu,
    Spinner,
    FixButton,
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
