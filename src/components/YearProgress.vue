<template>
  <div class="progressBar">
    <progress :percent="percent" activeColor="#EA5A49"></progress>
    <p>{{year}}年已经过去了{{days}}天，{{percent}}%</p>
  </div>
</template>

<script>
  export default {
    methods: {
      isLeapYear () {
        const year = new Date().getFullYear()
        if (year % 400 === 0) {
          return true
        } else if (year % 4 === 0 && year % 100 !== 0) {
          return true
        } else {
          return false
        }
      },
      getDayOfYear () {
        return this.isLeapYear() ? 366 : 365
      }
    },
    computed: {
      year () {
        return new Date().getFullYear()
      },
      days () {
        // start - 今年的第一天
        let start = new Date()
        start.setMonth(0)
        start.setDate(1)
        // 今天的事件戳减去今年第一天的时间戳
        let offset = new Date().getTime() - start.getTime()
        return parseInt(offset / 1000 / 60 / 60 / 24) + 1
      },
      percent () {
        return (this.days * 100 / this.getDayOfYear()).toFixed(2)
      }
    }
  }
</script>

<style scoped>
  .progressBar {
    text-align: center;
    margin-top: 10px;
    margin-bottom: 40px;
    width: 80%;
    font-size: 12px;
    margin: 0 auto;
  }

  progress {
    margin-bottom: 10px;
  }

</style>
