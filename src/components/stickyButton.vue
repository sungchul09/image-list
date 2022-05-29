<template>
  <div class="btn">
    <div class="scroll" v-if="active">
      <span @click="scrollUp">▲</span>
    </div>
    <div class="paging" v-if="active">
      <span @click="changePage(-1)">prev</span>
      <span @click="changePage(1)">next</span>
    </div>
    <div class="paging" v-else>
      <router-link to="/">BACK</router-link>
    </div>
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
    scrollUp() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
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
.btn {
  position: sticky;
  bottom: 5%;
  left: 100%;
  width: 20px;
}

.paging,
.scroll {
  position: sticky;
  bottom: 5%;
  left: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 20px;
}

.paging span,
a,
.scroll span {
  color: #0064e6;
  background-color: white;
  border: 1px solid #0064e6;
  width: 50px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  border-radius: 50%;
  margin: 20px 50px 0 0;
  font-size: 15px;
}

.paging span:hover,
a:hover,
.scroll span:hover {
  cursor: pointer;
  border: 1px solid #bde4ff;
  background-color: #bde4ff;
  color: #213039;
  transition: 150ms ease-in-out;
}
</style>