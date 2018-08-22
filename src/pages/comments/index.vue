<template>
  <div>
    <div class="container">
      <CommentList vif="userInfo.openId" type="user" :comments="comments"></CommentList>
      <div v-if="userInfo.openId">
        <div class="pageTitle">我添加的图书：</div>
        <card :book="book" v-for="(book, index) in books" :key="index"></card>
      </div>
      <div v-if="!books.length">
        暂未添加图书，请去个人主页扫码添加图书
      </div>
    </div>
  </div>
</template>

<script>
import { get } from '@/utils'
import CommentList from '@/components/CommentList'
import card from '@/components/card'
export default {
  data () {
    return {
      comments: [],
      userInfo: {},
      books: []
    }
  },
  components: {
    CommentList,
    card
  },
  methods: {
    init () {
      wx.showNavigationBarLoading()
      this.getComments()
      this.getBooks()
      wx.hideNavigationBarLoading()
    },
    async getComments () {
      const comments = await get('/weapp/commentlist', {
        openid: this.userInfo.openId
      })
      this.comments = comments.data.list
    },
    async getBooks () {
      const books = await get('/weapp/booklist', {
        openid: this.userInfo.openId
      })
      this.books = books.data.list
    }
  },
  onPullDownRefresh () {
    this.init()
    wx.stopPullDownRefresh()
  },
  onShow () {
    if (!this.userInfo.openId) {
      let userInfo = wx.getStorageSync('userinfo')
      if (userInfo) {
        this.userInfo = userInfo
        console.log(this.userInfo)
        this.init()
      }
    }
  }
}
</script>

<style scoped>
  .pageTitle {
    padding-left: 20px;
    background: #eee;
    line-height: 40px;
    font-size: 14px;
  }
</style>