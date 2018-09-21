<template>
  <div>
    <h1>{{ msg }}</h1>
    <img :src="imgName" alt="旅行青蛙" />
    <el-button>按钮</el-button>
  </div>
</template>
<script>
import imgName from '@/assets/193-1P11Q50321-50.jpg'
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Hello,Webpack',
      imgName: imgName
    }
  }
}
</script>
<style scoped>
h1 {
  color: red;
}
</style>
