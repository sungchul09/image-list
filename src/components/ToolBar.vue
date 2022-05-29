<template>
  <div class="header">
    <router-link to="/">메인</router-link>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.header {
  color: #ffffff;
  background-color: #0064e6;
  display: flex;
  padding: 8px;
  font-weight: bold;
  font-size: 20px;
}

/* .header .router-link-exact-active {
  color: #bcbcbc;
} */

.header a {
  color: #ffffff;
  text-decoration: none;
  margin-right: 20px;
}

.header a:hover {
  text-decoration: underline;
}
</style>

