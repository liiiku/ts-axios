// 对于 data 来说，不止有请求参数做处理，对于响应的 data 也要做处理
import { isPlainObject } from './util'

export function transformRequest(data: any): any {
  if (isPlainObject(data)) {
    return JSON.stringify(data)
  }

  return data
}

export function transformResponse(data: any): any {
  if (typeof data === 'string') {
    // 因为字符串类型不一定是json字符串，所以这里要用try...catch
    try {
      data = JSON.parse(data)
    } catch (e) {
      // do nothing
    }
  }
  return data
}
