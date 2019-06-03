// get 请求，将参数拼接到 url 上，返回新的 url
import { isDate, isPlainObject } from './util'

function encode(val: string): string {
  return encodeURIComponent(val)
    .replace(/%40/g, '@')
    .replace(/%3A/ig, ':')
    .replace(/%24/g, '$')
    .replace(/%2C/ig, ',')
    .replace(/%20/g, '+')
    .replace(/%5B/ig, '[')
    .replace(/%5D/ig, ']')
}

export function buildURL(url: string, params?: any): string {
  if (!params) return url

  // 字符串类型的键值对数组
  const parts: string[] = []
  console.log(20, parts)

  // forEach return 是跳不出来的，是对到下一次循环
  Object.keys(params).forEach(key => {
    console.log(24, key)
    const val = params[key]
    console.log(26, val)
    if (val === null || typeof val === 'undefined') {
      return
    }

    // 全部统一成数组的形式
    let values = []
    if (Array.isArray(val)) {
      values = val
      key += '[]'
    } else {
      values = [val]
    }
    console.log(39, values)

    values.forEach(val => {
      console.log(42, val)
      if (isDate(val)) {
        val = val.toISOString()
      } else if (isPlainObject(val)) {
        val = JSON.stringify(val)
        console.log(47, val)
      }

      parts.push(`${encode(key)}=${encode(val)}`)
    })
  })
  console.log(51, parts)

  let serializedParams = parts.join('&')
  if (serializedParams) {
    const markIndex = url.indexOf('#')
    if (markIndex !== -1) {
      url = url.slice(0, markIndex)
    }
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams
  }

  return url
}
