<template>
  <div>
    {{bookId}}
    <!-- {{info.count}} -->
  </div>
</template>

<script>
import { get } from '@/utils'
export default {
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
      console.log(info)
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