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
    <div class="detail">
      <img class="avatar" :src="userInfo.image" mode="aspectFit" alt="">
      {{userInfo.name}}
      <div class="right text-primary">
        {{info.rate}}分
        <rate :value="info.rate"></rate>
      </div>
    </div>
    <div class="detail">
      {{info.publisher}}
      <div class="right">{{info.price}}</div>
    </div>
    <div class="tags">
      <div class="badge" v-for="(tag, index) in info.tags" :key="index">{{tag}}</div>
    </div>
    <div class="summary">
      <p v-for="(summary, i) in info.summary" :key="i">{{summary}}</p>
    </div>
  </div>
</template>

<script>
  import rate from '@/components/rate'
  export default {
    components: {
      rate
    },
    props: ['info'],
    computed: {
      userInfo () {
        return this.info.user_info || {}
      }
    }

  }
</script>

<style scoped>
  .bookInfo {
    font-size: 14px;
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
    width: 60%;
    margin: 0 auto;
    left: 50%;
    top: 370rpx;
    transform: translateX(-50%);
    text-align: center;
  }

  .title {
    font-size: 18px;
    margin-bottom: 5px;
    margin-top: 10px;
  }

  .author {
    font-size: 12px;
  }

  .right {
    float: right;
  }

  .detail {
    padding: 5px 10px
  }

  .avatar {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    vertical-align: middle;
  }

  .tags {
    padding: 0 15px;
  }

  .badge {
    display: inline-block;
    margin: 5px;
    border-radius: 5px;
    border: 1px solid #EA5A49 ;
    color: #EA5A49;
  }
  .summary {
    padding: 0 15px;
    margin-top: 10px;
  }

  .summary p {
    text-indent: 2em;
    font-size: 14px;
  }
</style>