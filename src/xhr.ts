import { AxiosRequestConfig } from './types'

// 因为整个函数体是没后返回任何数据的，所以设置为void
export default function xhr(config: AxiosRequestConfig): void {
  const { data = null, url, method = 'get' } = config

  const request = new XMLHttpRequest()
  request.open(method.toUpperCase(), url, true)
  request.send(data)
}
