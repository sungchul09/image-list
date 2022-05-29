<template>
  <div id="app">
    <tool-bar></tool-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import ToolBar from "./components/ToolBar.vue";

export default {
  components: {
    ToolBar,
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