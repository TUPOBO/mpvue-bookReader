<template>
  <div class="bookInfo">
    <div class="thumb">
      <img class="back" mode="aspectFill" :src="info.image" alt="">
      <img :src="info.image" mode="aspectFit" class="img" alt="">
      <div class="info">
        <div class="title">{{info.title}}</div>
        <div class="author">{{info.author?info.author:"未知"}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['info']
  }
</script>

<style scoped>
  .bookInfo {
    text-align: center;
    font-size: 114px;
  }

  .thumb {
    width: 750rpx;
    height: 500rpx;
    overflow: hidden;
    position: relative;
  }

  .back {
    filter: blur(15px);
    width: 100%;
  }

  .img {
    width: 100%;
    height: 300rpx;
    position: absolute;
    top: 30px;
    left: 0;
  }

  .info {
    color: #000;
    position: absolute;
    width: 100%;
    left: 0;
    top: 370rpx;
    text-align: center;
  }

  .title {
    font-size: 20px;
  }

  .author {
    font-size: 12px;
  }
</style>