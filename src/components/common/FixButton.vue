<template>
  <div class="btn">
    <div class="pageBtn" v-if="pageBtn">
      <div class="scroll">
        <span @click="scrollUp">☝️</span>
      </div>
      <div class="paging">
        <span @click="prevBtn">prev</span>
        <span @click="nextBtn">next</span>
      </div>
    </div>
    <div class="paging" v-else>
      <span @click="backBtn">BACK</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    pageBtn: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    scrollUp() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    prevBtn() {
      if (this.$route.params.page <= 1) {
        alert('첫 페이지입니다.');
        return;
      }
      this.$router.push(`/imageList/${--this.$route.params.page}/${this.$route.params.limit}`);
      this.$router.go();
    },
    nextBtn() {
      this.$router.push(`/imageList/${++this.$route.params.page}/${this.$route.params.limit}`);
      this.$router.go();
    },
    backBtn() {
      this.$router.go(-1);
    },
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
}

.btn,
.pageBtn,
.scroll,
.paging,
.back {
  position: sticky;
  bottom: 5%;
  left: 95%;
  width: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-bottom: 5%;
}

span {
  color: #0064e6;
  background-color: white;
  border: 1px solid #0064e6;
  width: 80px;
  height: 80px;
  line-height: 80px;
  font-size: 20px;
  text-align: center;
  border-radius: 50%;
  margin: 20px 50px 0 0;
  transition: 300ms ease-in-out;
}

span:hover {
  cursor: pointer;
  border: 1px solid #bde4ff;
  background-color: #bde4ff;
  color: #213039;
  transition: 150ms ease-in-out;
}

span a {
  width: 50px;
  height: 50px;
}
@media screen and (max-width: 1024px) {
  span {
    width: 60px;
    height: 60px;
    line-height: 60px;
    font-size: 17px;
    transition: 300ms ease-in-out;
  }
}

@media screen and (max-width: 768px) {
  span {
    width: 50px;
    height: 50px;
    line-height: 50px;
    font-size: 15px;
    transition: 300ms ease-in-out;
  }
}
</style>
