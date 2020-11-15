import loginAPI from './loginSv'

export default {
  async login (uid, password) {
    try {
      const loginResponse = await loginAPI.login(uid, password)
      return loginResponse
    } catch (err) {
      console.error(err)
    }
  }
}
