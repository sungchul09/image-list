<template>
  <div id="app">
    <nav-bar></nav-bar>
    <router-view></router-view>
    <spinner :loading="$store.state.loadingStatus"></spinner>
    <fix-button :pageBtn="$store.state.pageBtn"></fix-button>
    <footer-component></footer-component>
  </div>
</template>

<script>
import NavBar from '@/components/common/NavBar';
import Spinner from '@/components/Spinner';
import FixButton from '@/components/common/FixButton';
import FooterComponent from '@/components/common/Footer';
export default {
  components: {
    NavBar,
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
