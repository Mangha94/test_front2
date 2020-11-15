import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import HelloWorld from '@/components/HelloWorld'
import Main from '@/components/Main'
import store from '@/store/store'

Vue.use(Router)

const requireAuth = () => (from, to, next) => {
  if (store.getters.getIsAuth) return next() // isAuth === true면 페이지 이동
  next('/') // isAuth === false면 다시 로그인 화면으로 이동
}

export default new Router({
  routes: [
    {
      path: '/', // 첫 화면을 로그인 화면으로 설정한다
      name: 'Login',
      component: Login
    },
    {
      path: '/helloWorld', // 추가하는 path
      name: 'HelloWorld',
      component: HelloWorld, // 추가하는 컴포넌트
      beforeEnter: requireAuth()
    },
    {
      path: '/Main', // 추가하는 path
      name: 'Main',
      component: Main, // 추가하는 컴포넌트
      beforeEnter: requireAuth()
    }
  ]
})
