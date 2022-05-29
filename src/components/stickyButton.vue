<template>
  <div class="paging" v-if="active">
    <span @click="changePage(-1)">prev</span>
    <span @click="changePage(1)">next</span>
  </div>
  <div class="paging" v-else>
    <router-link to="/">back</router-link>
  </div>
</template>

<script>
export default {
  props: {
    active: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    changePage(value) {
      let page = this.$route.params.page;
      let limit = this.$route.params.limit;
      if (page <= 1 && value === -1) {
        alert("첫 페이지입니다.");
        return;
      }
      page = Number.parseInt(page) + value;
      this.$route.params.page = page;
      this.$router.replace(`/imageList/${page}/${limit}`);
      this.$router.go();
    },
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
}

.paging {
  position: sticky;
  bottom: 5%;
  left: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 20px;
}

.paging span,
a {
  color: white;
  background-color: #0064e6;
  width: 60px;
  height: 60px;
  line-height: 60px;
  text-align: center;
  border-radius: 50%;
  margin: 20px 50px 0 0;
  font-size: 25px;
}

.paging span:hover,
a:hover {
  cursor: pointer;
  border: 1px solid #0064e6;
  background-color: white;
  color: #0064e6;
  transition: 150ms ease-in-out;
}
</style>