<template>
  <div class="commentList">
    <div class="pageTitle" v-if="comments.length">
      我的评论
    </div>
    <div class="comment" v-if="comments" v-for="(comment, index) in comments" :key="index">
      <div class="user">
        <div class="inline">
          <img :src="comment.image" mode="aspectFit" alt="" class="avatar"> {{comment.nickName}}
        </div>
        <div class="right">
          {{comment.location || "未知位置"}} {{comment.phone || "未知型号"}}
        </div>
      </div>
      <div class="content">
        {{comment.comment}}
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['comments']
  }
</script>

<style scoped>
  .commentList {
    background: #eee;
    font-size: 12px;
  }

  .comment {
    background: white;
    margin-bottom: 10px;
    padding: 5px 10px;
  }

  .content {
    margin: 10px 0;
  }

  .inline {
    display: inline;
  }

  .avatar {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    vertical-align: middle;
  }

  .pageTitle {
    padding-left: 20px;
    background: #eee;
    line-height: 40px;
    font-size: 14px;
  }

  .right {
    float: right;
  }

</style>
