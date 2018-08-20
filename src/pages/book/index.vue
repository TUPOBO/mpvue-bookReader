<template>
  <div>
    <TopSwiper :tops="tops"></TopSwiper>
    <card v-for="(book, index) in books" :key="index" :book='book'></card>
    <p class="text-footer" v-if="!more">没有更多图书，扫描图书编码添加图书</p>
  </div>
</template>

<script>
  import {
    get
  } from '@/utils'
  import card from '@/components/card'
  import TopSwiper from '@/components/TopSwiper'
  export default {
    components: {
      card,
      TopSwiper
    },
    data () {
      return {
        books: [],
        page: 0,
        more: true,
        tops: []
      }
    },
    methods: {
      async getBooks (init) {
        // if (init) {
        //   this.page = 0
        //   this.more = true
        // }
        wx.showNavigationBarLoading()
        const books = await get('/weapp/booklist', {
          page: this.page
        })
        if (init) {
          this.books = books.data.list
          wx.stopPullDownRefresh()
        } else {
          this.books = this.books.concat(books.data.list)
          if (books.data.list.length < 10 && this.page > 0) {
            this.more = false
          }
        }
        wx.hideNavigationBarLoading()
      },
      async getTop () {
        const tops = await get('/weapp/top')
        this.tops = tops.data.list
        console.log(this.tops)
      }
    },
    mounted () {
      this.getBooks(true)
      this.getTop()
      console.log(this.books)
    },
    onPullDownRefresh () {
      this.getBooks(true)
      this.getTop()
      console.log('下拉')
    },
    onReachBottom () {
      if (!this.more) {
        return false
      } else {
        this.page += 1
        this.getBooks()
      }
    }
  }
</script>

<style scoped>
</style>