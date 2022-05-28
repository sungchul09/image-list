<template>
  <div>
    <ul>
      <li>id: {{ imageInfo.id }}</li>
      <li>author: {{ imageInfo.author }}</li>
      <li>width: {{ imageInfo.width }}</li>
      <li>height: {{ imageInfo.height }}</li>
      <a :href="imageInfo.url">
        <img
          :src="imageInfo.download_url"
          :alt="imageInfo.url"
          :width="imageInfo.width / 20"
          :height="imageInfo.height / 20"
        />
      </a>
    </ul>
    <router-link to="/imageList/1/5">뒤로가기</router-link>
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
};
</script>

<style>
</style>