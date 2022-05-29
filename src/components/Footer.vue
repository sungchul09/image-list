<template>
  <div class="footer">
    <p>Created by sc.yun</p>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.footer {
  color: #ffffff;
  background-color: #0064e6;
  font-weight: bold;
  font-size: 20px;
  text-align: right;
  line-height: 150px;
  height: 100%;
}

.footer p {
  margin-right: 30px;
}

@media screen and (max-width: 768px) {
  .footer {
    margin: 0;
    text-align: center;
  }
}
</style>

