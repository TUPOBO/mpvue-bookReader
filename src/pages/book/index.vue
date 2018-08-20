<template>
  <div>
    <card v-for="(book, index) in books" :key="index" :book='book'></card>
    <p class="text-footer" v-if="!more">没有更多图书，扫描图书编码添加图书</p>
  </div>
</template>

<script>
  import {
    get
  } from '@/utils'
  import card from '@/components/card'
  export default {
    components: {
      card
    },
    data () {
      return {
        books: [],
        page: 0,
        more: true
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
      }
    },
    mounted () {
      this.getBooks(true)
      console.log(this.books)
    },
    onPullDownRefresh () {
      this.getBooks(true)
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