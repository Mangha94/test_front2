import axios from 'axios'

const getUserInfo = (uid, password) => {
  const loginData = {'memberID': uid, 'password': password}
  return axios.post('http://localhost:8019/loginAct', loginData)
}

// const isFinished = uid => {
//   return axios.get('/endpoint-for-is-finished', {
//     params: {
//       'memberID': uid
//     }
//   })
// }

export default {
  async login (uid, password) {
    try {
      const getUserInfoPromise = await getUserInfo(uid, password)
      if (!getUserInfoPromise.data.success) {
        return 'noAuth'
      }
      // const isFinishedPromise = await isFinished(uid)
      // const [userInfoResponse, isFinishedResponse] = await Promise.all([getUserInfoPromise, isFinishedPromise])
      const [userInfoResponse] = await Promise.all([getUserInfoPromise])
      // if (isFinishedResponse.data[0].CNT > 0) return 'done'
      // axios.defaults.headers.common['Authorization'] = userInfoResponse.jwt // Json Web Token을 request header에 넣는다
      return userInfoResponse
    } catch (err) {
      console.error(err)
    }
  }
}
