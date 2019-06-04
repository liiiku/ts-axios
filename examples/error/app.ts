import axios, { AxiosError } from '../../src/index'

axios({
  method: 'get',
  url: '/error/get1'
}).then((res) => {
  console.log(7, res)
}).catch((e) => {
  console.log(9, e)
})

axios({
  method: 'get',
  url: '/error/get'
}).then((res) => {
  console.log(16, res)
}).catch((e) => {
  console.log(18, e)
})

setTimeout(() => {
  axios({
    method: 'get',
    url: '/error/get'
  }).then((res) => {
    console.log(26, res)
  }).catch((e) => {
    console.log(28, e)
  })
}, 5000)

axios({
  method: 'get',
  url: '/error/timeout',
  timeout: 2000
}).then((res) => {
  console.log(37, res)
}).catch((e: AxiosError) => {
  console.log(39, e.message)
  console.log(40, e.code)
  console.log(41, e.config)
  console.log(42, e.request)
  console.log(43, e.isAxiosError)
})
