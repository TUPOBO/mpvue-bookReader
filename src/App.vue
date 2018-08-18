<script>
import {request} from './utils/index'
// import qcloud from 'wafer2-client-sdk'
// import config from './config/config'
export default {
  async created () {
    const result = await request('/weapp/test')
    console.log(result)
  }
}
</script>

<style>
.btn {
  color: white;
  background: #EA5A49;
  margin-bottom: 10px;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 5px;
  font-size: 16px;
  line-height: 40px;
  height: 40px;
  width: 80%;
}
.btn:active {
  background: #a22A22;
}
</style>
