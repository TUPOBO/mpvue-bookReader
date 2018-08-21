<template>
  <div>
    <BookInfo v-if="info.data" :info="info.data"></BookInfo>
    <!-- {{info.count}} -->
  </div>
</template>

<script>
import { get } from '@/utils'
import BookInfo from '@/components/BookInfo'
export default {
  components: {
    BookInfo
  },
  data () {
    return {
      bookId: '',
      info: {}
    }
  },
  methods: {
    async getDetail () {
      const info = await get('/weapp/bookdetail', {id: this.bookId})
      wx.setNavigationBarTitle({
        title: `《 ${info.data.title} 》`
      })
      this.info = info
      console.log(this.info.data)
    }
  },
  mounted () {
    this.bookId = this.$root.$mp.query.id
    this.getDetail()
  }
}
</script>

<style scoped>

</style>