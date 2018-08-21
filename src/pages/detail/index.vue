<template>
  <div>
    <BookInfo v-if="info.data" :info="info.data"></BookInfo>
    <div class="comment">
      <textarea class="textarea" v-model="comment" maxlength="100" placeholder="请输入图书短评"></textarea>
    </div>
    <div class="location">
      地理位置：
      <switch color='#EA5A49' :check="location" @change='getGps'></switch>
      <span v-if="location" class='text-primary'>{{location}}</span>
    </div>
    <div class="phone">
      手机型号：
      <switch color="#EA5A49" :check="phone" @change="getPhone"></switch>
      <span v-if="phone" class='text-primary'>{{phone}}</span>
    </div>
    <button class="btn" @click='addComment'>
      添加评论
    </button>
  </div>
</template>

<script>
  import {
    get, post, showModal
  } from '@/utils'
  import BookInfo from '@/components/BookInfo'
  export default {
    components: {
      BookInfo
    },
    data () {
      return {
        userInfo: {},
        bookId: '',
        info: {},
        comment: '',
        location: '',
        locationAjax: '',
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
      getGps (e) {
        if (e.target.value) {
          this.getLocation()
          console.log(this.location)
        } else {
          this.location = ''
        }
      },
      getLocation () {
        const ak = 'lWn1ymAkmCcPvTh4O4Xsp3fOBDjKXyru'
        let url = 'http://api.map.baidu.com/geocoder/v2/'
        wx.getLocation({
          type: 'wgs84', // 默认为 wgs84 返回 gps 坐标，gcj02 返回可用于 wx.openLocation 的坐标
          success: (res) => {
            wx.request({
              url,
              data: {
                location: `${res.latitude}, ${res.longitude}`,
                output: 'json',
                ak
              },
              method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
              // header: {}, // 设置请求的 header
              success: (res) => {
                if (res.data.status === 0) {
                  this.location = res.data.result.addressComponent.city
                } else {
                  this.location = '未知地址'
                }
              }
            })
          }
        })
      },
      getPhone (e) {
        if (e.target.value) {
          console.log('xinhao')
          const phoneInfo = wx.getSystemInfoSync()
          this.phone = phoneInfo.model
          console.log(this.phone)
        } else {
          this.phone = ''
        }
      },
      async addComment () {
        const data = {
          openid: this.userInfo.openId,
          bookid: this.bookId,
          comment: this.comment,
          phone: this.phone,
          location: this.location
        }
        if (this.comment) {
          try {
            await post('/weapp/addcomment', data)
            this.comment = ''
          } catch (error) {
            showModal('评论失败', error.msg)
          }
        }

        console.log(data)
      }
    },
    mounted () {
      this.bookId = this.$root.$mp.query.id
      this.getDetail()
      const userInfo = wx.getStorageSync('userinfo')
      console.log(userInfo)
      if (userInfo) {
        this.userInfo = userInfo
      }
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
    font-size: 12px;
  }

  .phone {
    font-size: 12px;
    margin: 10px 0;
  }


</style>
