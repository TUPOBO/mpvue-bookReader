<template>
  <div class="swiper">
    <swiper indicator-dots="true" indicator-color="#EA5A49" autoplay='true' interval="6000" duration="1000" circular="true">
      <div v-for="(top, imgIndex) in imgUrls" :key="imgIndex">
        <swiper-item>
          <img
          @click='bookDetail(img)'
          class="slide-image"
          v-for="img in top"
          :key="img.id"
          :src="img.image"
          alt=""
          mode="aspectFit"
          >
        </swiper-item>
      </div>
    </swiper>
  </div>
</template>

<script>
  export default {
    props: ['tops'],
    computed: {
      imgUrls () {
        // 实际开发 使用lodash的chunk方法
        let res = this.tops
        return [res.slice(0, 3), res.slice(3, 6), res.slice(6)]
      }
    },
    methods: {
      bookDetail (item) {
        wx.navigateTo({
          url: '/pages/detail/main?id=' + item.id
        })
      }
    }
  }
</script>

<style scoped>
  .swiper {
    margin-top: 5px;
  }
  .slide-image {
    width: 33%;
    height: 250rpx;
  }

</style>
