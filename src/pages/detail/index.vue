<template>
  <div>
    <BookInfo v-if="info.data" :info="info.data"></BookInfo>
    <div class="comment">
      <textarea class="textarea" v-model="comment" maxlength="100" placeholder="请输入图书短评"></textarea>
    </div>
    <div class="location">
      地理位置：
      <switch color='#EA5A49' :check="location" @change='getGps'></switch>
      <span class='text-primary'>{{location}}</span>
    </div>
    <div class="phone">
      手机型号：
      <switch color="#EA5A49" :check="phone" @change="getPhone"></switch>
      <span v-if="phone" class='text-primary'>{{phone}}</span>
    </div>
  </div>
</template>

<script>
  import {
    get
  } from '@/utils'
  import BookInfo from '@/components/BookInfo'
  export default {
    components: {
      BookInfo
    },
    data () {
      return {
        bookId: '',
        info: {},
        comment: '',
        location: '',
        phone: ''
      }
    },
    methods: {
      async getDetail () {
        const info = await get('/weapp/bookdetail', {
          id: this.bookId
        })
        wx.setNavigationBarTitle({
          title: `《 ${info.data.title} 》`
        })
        this.info = info
        console.log(this.info.data)
      },
      getGps () {},
      getPhone (e) {
        if (e.target.value) {
          console.log('xinhao')
          const phoneInfo = wx.getSystemInfoSync()
          this.phone = phoneInfo.model
          console.log(this.phone)
        } else {
          this.phone = ''
        }
      }
    },
    mounted () {
      this.bookId = this.$root.$mp.query.id
      this.getDetail()
    }
  }
</script>

<style scoped>
  .comment {
    margin-top: 10px;
  }

  .textarea {
    width: 730rpx;
    height: 200rpx;
    background-color: #eee;
    padding: 10px;
  }

  .location {
    margin: 10px 0;
  }

</style>
