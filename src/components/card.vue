<template>
  <div class="book-card">
    <div class="thumb">
      <img :src="book.image" alt="" mode="aspectFit" class="img">
    </div>
    <div class="detail">
      <div class="row text-primary">
        <div class="right">{{book.rate}}
          <rate :value="book.rate"></rate>
        </div>
        <div class="left">{{book.title}}</div>
      </div>
      <div class="row">
        <div class="right">浏览量：</div>
        <div class="left">{{book.author}}</div>
      </div>
      <div class="row">
        <div class="right">{{book.user_info.nickName}}</div>
        <div class="left">{{book.publisher}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  import rate from '@/components/rate'
  export default {
    props: ['book'],
    components: {
      rate
    }
  }
</script>

<style scoped>
  .book-card {
    padding: 5px;
    overflow: hidden;
    margin-top: 5px;
    margin-bottom: 5px;
    font-size: 14px;
  }

  .thumb {
    width: 80px;
    height: 80px;
    margin: 0 auto;
    float: left;
    overflow: hidden;
  }

  .img {
    height: 100%;
    width: 100%;
  }

  .detail {
    margin-left: 100px;
  }

  .row {
    line-height: 20px;
    margin-bottom: 3px;
  }

  .right {
    float: right;
  }

  .left {
    margin-right: 80px;
  }
</style>
