<script>
import {request} from './utils/index'
export default {
  async created () {
    const data = await request('/weapp/test')
    console.log(data)
  }
}
</script>

<style>
</style>
