<template>
  <div>
    <ul v-for="data in imageList" :key="data.id">
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
        <router-link :to="`imageInfo/${data.id}`">상세정보 보기</router-link>
      </li>
    </ul>
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
    this.$store.dispatch("FETCH_IMAGELIST");
  },
};
</script>

<style scoped>
li {
  list-style: none;
}

img {
  position: relative;
  max-width: 50px;
  max-height: 50px;
}
</style>