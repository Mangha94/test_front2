<template>
  <div>
    <h2>Log In</h2>
    <div class="alert-danger" v-if="errorState"> <!-- errorState가 있으면 표시한다 -->
      <p></p>
    </div>
    <form @submit="onSubmit">
      <label>
        <input type="text" placeholder="Enter your ID" name="uid" v-model="uid"/>
      </label>
      <label>
        <input type="password" placeholder="Enter your password" name="password" v-model="password"/>
      </label>
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

export default {
  name: 'Login',
  data: () => ({
    uid: '',
    password: ''
  }),
  methods: {
    ...mapActions(['login']),
    async onSubmit () {
      try {
        let loginResult = await this.login({uid: this.uid, password: this.password})
        console.log(loginResult) // 로그인 성공하면 true, 아니면 false
        if (loginResult) this.goToPages()
        else {
          alert('로그인에 실패했습니다.')
          location.href = 'http://localhost:8080'
        }
      } catch (err) {
        console.error(err)
      }
    },
    goToPages () {
      this.$router.push({
        name: 'Main'
      })
    }
  },
  computed: {
    ...mapGetters({
      errorState: 'getErrorState' // getter로 errorState를 받는다
    })
  }
}
</script>

<style>
.alert-danger p{
  color: red;
}
</style>
