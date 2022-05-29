<template>
  <div class="imageList">
    <div class="limit">
      <p>페이지당 항목 수 :</p>
      <select v-model="limit" @change="changeLimit">
        <option selected>5</option>
        <option>10</option>
        <option>15</option>
        <option>20</option>
        <option>25</option>
        <option>30</option>
      </select>
    </div>
    <div class="imageData">
      <ul class="dataList" v-for="(data, index) in imageList" :key="index">
        <span class="dataList__header" v-if="index === 0">
          <li>이미지</li>
          <li>작가</li>
          <li>id</li>
          <li>상세정보</li>
        </span>
        <span class="dataList__content">
          <li>
            <a
              :href="`https://picsum.photos/id/${data.id}/${data.width}/${data.height}`"
              target="_blank"
            >
              <img :src="data.download_url" :alt="data.url" />
            </a>
          </li>
          <li>
            <a :href="data.url" target="_blank">{{ data.author }}</a>
          </li>
          <li>#{{ data.id }}</li>
          <li>
            <router-link :to="`/imageInfo/${data.id}`"
              >상세정보 보기</router-link
            >
          </li>
        </span>
      </ul>
    </div>
    <div class="paging">
      <button @click="changePage(-1)">prev</button>
      <p>현재 페이지는 {{ this.page }} 페이지 입니다.</p>
      <button @click="changePage(1)">next</button>
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
li {
  list-style: none;
}

.imageList {
  padding: 50px;
  min-height: 800px;
}

.limit {
  display: flex;
}

.imageList {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.dataList__content,
.dataList__header {
  display: flex;
}

.dataList__header li {
  width: 250px;
}

.dataList__content li {
  width: 250px;
}

.paging {
  display: flex;
}
</style>