<template>
  <div v-if="true">
    <h1>Hello!</h1>
    <h2>Vue.JS</h2>
    <button @click="test('lshs19')">ㅎㅇㅎㅇ</button>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'app',
  methods: {
    test (str) {
      console.log(str)

      axios.get('http://localhost:8019/member/detail/lshs19').then(res => {
        console.log(res)
        console.log('dddddddd')
      })
    }
  }
}
</script>

<style scoped>
.h2 {
  color: white;
  background-color: black;
}
</style>
