
<template>
  <div class="rate">
    <span>☆☆☆☆☆</span>
    <div class="hollow" :style="style">
      ★★★★★
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      value: {type: [Number, String], default: '0'}
    },
    computed: {
      style () {
        return `width: ${this.value * 10}%`
      }
    }
  }
</script>

<style scoped>
  .rate {
    position: relative;
    display: inline-block;
  }

  .hollow {
    position: absolute;
    display: inline-block;
    top: 0;
    left: 0;
    letter-spacing: 0;
    overflow: hidden;
  }
</style>