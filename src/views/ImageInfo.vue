<template>
  <div class="imageInfo">
    <div class="image">
      <a :href="imgData.url" target="_blank">
        <img
          :src="imgData.download_url"
          alt="image_file"
          onerror="this.onerror=null;this.src='https://images.unsplash.com/photo-1594322436404-5a0526db4d13?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=250';"
        />
      </a>
    </div>
    <div class="info">
      <div class="info__author">
        {{ imgData.author }}
      </div>
      <dl>
        <dt>id</dt>
        <dd>{{ imgData.id }}</dd>
        <dt>width</dt>
        <dd>{{ imgData.width }}</dd>
        <dt>height</dt>
        <dd>{{ imgData.height }}</dd>
        <dt>url</dt>
        <dd>
          <a :href="imgData.url" target="_blank">{{ imgData.url }}</a>
        </dd>
        <dt>download</dt>
        <dd>
          <a :href="imgData.download_url" target="_blank">{{
            imgData.download_url
          }}</a>
        </dd>
      </dl>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({ imgData: "getImageInfo" }),
  },
  created() {
    window.scrollTo(0, 0);
    this.$store.commit("SET_IMAGEINFO", {});
    this.$store.dispatch("FETCH_IMAGEINFO", this.$route.params.id);
  },
  data() {
    return {
      rendering: false,
    };
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
  background-color: var(--black-color);;
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
  color: var(--grey-color);
  font-size: 20px;
}

.info dt:after {
  content: "";
  display: block;
  width: 25%;
  border-bottom: 1px solid var(--grey-color);
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
