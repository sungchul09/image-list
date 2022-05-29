<template>
  <div class="imageList">
    <div class="limit">
      <p>페이지당 항목 수 :</p>
      <select v-model="limit" @change="changeLimit">
        <option selected>10</option>
        <option>20</option>
        <option>50</option>
        <option>75</option>
        <option>100</option>
        <option>300</option>
      </select>
    </div>
    <div class="imageData">
      <ul v-for="(data, index) in imageList" :key="index">
        <div class="data">
          <li class="data__image">
            <a
              :href="`https://picsum.photos/id/${data.id}/${data.width}/${data.height}`"
              target="_blank"
            >
              <img :src="data.download_url" :alt="data.url" />
            </a>
          </li>
          <li class="data__text">
            <span class="data__text__author">
              <a :href="data.url" target="_blank">{{ data.author }}</a>
            </span>
            <span class="data__text__id">
              <a
                :href="`https://picsum.photos/id/${data.id}/${data.width}/${data.height}`"
                >#{{ data.id }}</a
              >
            </span>
          </li>
          <li class="data__info">
            <router-link :to="`/imageInfo/${data.id}`">상세정보</router-link>
          </li>
        </div>
      </ul>
    </div>
    <div class="paging">
      <div class="prevBtn" @click="changePage(-1)">prev</div>
      <div class="nextBtn" @click="changePage(1)">next</div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    imageList() {
      return this.$store.state.imageList;
    },
  },
  created() {
    const page = this.$route.params.page;
    const limit = this.$route.params.limit;
    this.page = this.$route.params.page;
    this.limit = this.$route.params.limit;
    this.$store.dispatch("FETCH_IMAGELIST", { page, limit });
  },
  data() {
    return {
      page: 0,
      limit: 0,
    };
  },
  methods: {
    changeLimit() {
      this.repalceAndGo();
    },
    changePage(value) {
      if (this.page <= 1 && value === -1) {
        alert("첫 페이지입니다.");
        return;
      }
      this.page = Number.parseInt(this.page) + value;
      this.repalceAndGo();
    },
    repalceAndGo() {
      this.$router.replace(`/imageList/${this.page}/${this.limit}`);
      this.$router.go();
    },
  },
};
</script>

<style scoped>
li,
ul {
  list-style: none;
  padding: 0;
}

.imageList {
  margin: 0px 300px;
}

.limit {
  display: flex;
  align-items: baseline;
  justify-content: flex-end;
}

.limit p {
  margin-right: 10px;
}

.limit select {
  font-size: 15px;
  font-weight: bold;
  text-align: center;
  width: 150px;
}

.imageData {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
}

.imageData ul {
  margin-right: 20px;
}

.data {
  padding-bottom: 20px;
  border-radius: 5%;
  width: 100%;

  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 10%);
}

.data li {
  margin: 10px;
}

.data a {
}

.data img {
  border-radius: 5%;
}

.data .data__img {
}

.data__text {
  padding: 0 5px;
  display: flex;
  justify-content: space-between;
}

.data__text__author a {
  text-decoration: none;
  color: black;
}

.data__text__author a:hover {
  color: #0064e6;
}

.data__text__id a {
  text-decoration: none;
  color: black;
}

.data__text__id a:hover {
  cursor: pointer;
  color: #0064e6;
}

.data .data__info {
  text-align: right;
}

.data .data__info a {
  text-decoration: none;
  color: #0064e6;
  background-color: white;
  width: 50px;
  padding: 5px 10px;
  text-align: center;
}

.data .data__info a:hover {
  cursor: pointer;
  border: 1px solid #0064e6;
  color: white;
  background-color: #0064e6;
}

.paging {
  position: fixed;
  right: 0;
  bottom: 0;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
}

.paging div {
  color: white;
  background-color: #0064e6;

  width: 50px;
  height: 50px;
  text-align: center;
  line-height: 50px;
  border-radius: 50%;
  margin: 10px;
}

.paging div:hover {
  cursor: pointer;
  border: 1px solid #0064e6;
  background-color: white;
  color: #0064e6;
}
</style>