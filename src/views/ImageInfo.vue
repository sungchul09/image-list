<template>
  <div class="imageInfo">
    <div class="image">
      <a :href="imageInfo.url" target="_blank">
        <img :src="imageInfo.download_url" :alt="imageInfo.url" />
      </a>
    </div>
    <div class="info">
      <div class="info__author">
        {{ imageInfo.author }}
      </div>
      <dl>
        <dt>id</dt>
        <dd>{{ imageInfo.id }}</dd>
        <dt>width</dt>
        <dd>{{ imageInfo.width }}</dd>
        <dt>height</dt>
        <dd>{{ imageInfo.height }}</dd>
        <dt>url</dt>
        <dd>
          <a :href="imageInfo.url" target="_blank">{{ imageInfo.url }}</a>
        </dd>
        <dt>download</dt>
        <dd>
          <a :href="imageInfo.download_url" target="_blank">{{
            imageInfo.download_url
          }}</a>
        </dd>
      </dl>
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
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 200px;
}

.image {
  text-align: center;
  background-color: black;
  font-size: 0;
  width: 100%;
}

.image a {
}

.image img {
  max-height: 900px;
  max-width: 1000px;
}

.info {
  padding: 0;
  margin: 5% 0 0 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.info .info__author {
  font-size: 40px;
  font-weight: bold;
}

.info dl {
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 20px;
}

.info dt {
  margin-right: 10px;
  color: grey;
  font-size: 20px;
}

.info dt:after {
  content: "";
  display: block;
  width: 25%;
  border-bottom: 1px solid #bcbcbc;
}

.info dd {
  margin: 0 40px 10% 0;
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
    margin-top: 30px;
  }
}
</style>