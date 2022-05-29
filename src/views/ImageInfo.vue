<template>
  <div>
    <div class="image">
      <a :href="imageInfo.url" target="_blank">
        <img :src="imageInfo.download_url" :alt="imageInfo.url" />
      </a>
    </div>
    <div class="imageInfo">
      <ul>
        <li>id: {{ imageInfo.id }}</li>
        <li>author: {{ imageInfo.author }}</li>
        <li>width: {{ imageInfo.width }}</li>
        <li>height: {{ imageInfo.height }}</li>
      </ul>
    </div>
    <div class="backspace" @click="backspace">뒤로가기</div>
  </div>
</template>

<script>
export default {
  computed: {
    imageInfo() {
      return this.$store.state.imageInfo;
    },
  },
  created() {
    this.$store.dispatch("FETCH_IMAGEINFO", this.$route.params.id);
  },
  methods: {
    backspace() {
      this.$router.go(-1);
    },
  },
};
</script>

<style scoped>
li {
  list-style: none;
}

.image {
  text-align: center;
  background-color: black;
  font-size: 0;
}

.image a {
}

.image img {
  height: 100%;
  min-width: 500px;
  max-height: 700px;
  vertical-align: middle;
  border-style: none;
}

.imageInfo {
}

.imageInfo ul {
}

.imageInfo li {
}

.backspace {
  border: solid 2px black;
  width: 100px;
  text-align: center;
  padding: 5px;
}

.backspace:hover {
  text-decoration: underline;
  cursor: pointer;
}
</style>