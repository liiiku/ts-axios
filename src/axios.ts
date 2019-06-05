import { AxiosInstance } from './types'
import Axios from './core/Axios'
import { extend } from './helpers/util'

function createInstance(): AxiosInstance {
  const context = new Axios()
  // instance 是一个函数
  const instance = Axios.prototype.request.bind(context)

  extend(instance, context)

  return instance as AxiosInstance
}

const axios = createInstance()

// 这样的话 axios 就拥有了request 方法，就可以像原来那样直接传递 config 使用，也拥有了 Axios 类中定义的 get, post 等等的原型属性和方法
// 调用 axios 方法实际上就是调用 request 方法 axios({})
export default axios
