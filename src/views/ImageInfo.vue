<template>
  <div class="imageInfo">
    <div class="image">
      <a :href="imageInfo.url" target="_blank">
        <img :src="imageInfo.download_url" :alt="imageInfo.url" />
      </a>
    </div>
    <div class="infoAndBtn">
      <div class="info">
        <dl>
          <dt>id</dt>
          <dd>{{ imageInfo.id }}</dd>
          <dt>author</dt>
          <dd>{{ imageInfo.author }}</dd>
          <dt>width</dt>
          <dd>{{ imageInfo.width }}</dd>
          <dt>height</dt>
          <dd>{{ imageInfo.height }}</dd>
        </dl>
      </div>
    </div>
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
    window.scrollTo(0, 0);
    this.$store.state.spinnerStatus = true;
    this.$store.state.btnStatus = false;
    this.$store.dispatch("FETCH_IMAGEINFO", this.$route.params.id);
  },
  mounted() {
    this.$store.state.spinnerStatus = false;
  },
};
</script>

<style scoped>
li {
  list-style: none;
}

.imageInfo {
  min-height: 800px;
}

.image {
  text-align: center;
  background-color: black;
  font-size: 0;
}

.image a {
}

.image img {
  max-height: 800px;
  max-width: 800px;
}

.infoAndBtn {
  margin: 0 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.info {
  padding: 0;
}
.info dl {
  display: flex;
  flex-direction: row;
  justify-content: center;
  font-size: 20px;
}

.info dt {
  margin-right: 10px;
  color: grey;
  font-size: 20px;
}

.info dd {
  margin: 0 40px 0 0;
}

@media screen and (max-width: 768px) {
  .image img {
    max-height: 800px;
    max-width: 800px;
    height: 100%;
    width: 100%;
  }
  .infoAndBtn {
    margin: 0;
    align-items: center;
  }

  .info dl {
    flex-direction: column;
    justify-content: center;
  }
  .info dt {
    margin-top: 20px;
  }
}
</style>