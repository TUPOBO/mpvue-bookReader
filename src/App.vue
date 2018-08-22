<script>
import {get} from './utils/index'
// import qcloud from 'wafer2-client-sdk'
// import config from './config/config'
export default {
  async created () {
    const result = await get('/weapp/test')
    console.log(result)
  }
}
</script>

<style>
.btn {
  color: white;
  background: #EA5A49;
  margin-bottom: 20px;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 5px;
  font-size: 16px;
  line-height: 40px;
  height: 40px;
  width: 60%;
}
.btn:active {
  background: #a22A22;
}
.text-primary {
  color: #EA5149;
}
.text-footer {
  text-align: center;
  font-size: 12px;
}
</style>
