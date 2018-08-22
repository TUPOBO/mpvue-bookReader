<template>
  <div>
    <div class="container">
      <CommentList type="user" :comments="comments"></CommentList>
    </div>
  </div>
</template>

<script>
import { get } from '@/utils'
import CommentList from '@/components/CommentList'
export default {
  data () {
    return {
      comments: [],
      userInfo: {}
    }
  },
  components: {
    CommentList
  },
  methods: {
    init () {
      wx.showNavigationBarLoading()
      this.getComments()
    },
    async getComments () {
      const comments = await get('/weapp/commentlist', {
        openid: this.userInfo.openId
      })
      this.comments = comments.data.list
      wx.hideNavigationBarLoading()
    }
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

</style>