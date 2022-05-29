<template>
  <div class="paging">
    <span @click="changePage(-1)">prev</span>
    <span @click="changePage(1)">next</span>
  </div>
</template>

<script>
export default {
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
.paging {
  position: sticky;
  bottom: 5%;
  left: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 20px;
}

.paging span {
  color: white;
  background-color: #0064e6;

  width: 50px;
  height: 50px;
  text-align: center;
  line-height: 50px;
  border-radius: 50%;
  margin: 10px;
}

.paging span:hover {
  cursor: pointer;
  border: 1px solid #0064e6;
  background-color: white;
  color: #0064e6;
}
</style>