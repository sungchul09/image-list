<template>
  <div id="app">
    <tool-bar></tool-bar>
    <router-view></router-view>
    <spinner :loading="this.$store.state.spinnerStatus"></spinner>
  </div>
</template>

<script>
import ToolBar from "./components/ToolBar.vue";
import Spinner from "./components/Spinner.vue";

export default {
  components: {
    ToolBar,
    Spinner,
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
}
</style>