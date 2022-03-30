import axios, { AxiosRequestConfig } from 'axios'
import NProgress from 'nprogress'

// 设置请求头和请求路径
axios.defaults.baseURL = ''
axios.defaults.timeout = 10000
axios.defaults.headers.post['Content-Type'] = 'application/json;charse=UFT-8'
axios.interceptors.request.use((config): AxiosRequestConfig<any> => {
  const token = window.sessionStorage.getItem('token')
  if (token) {
    config.headers.token = token
  }
  return config
})
// 响应拦截
axios.interceptors.response.use((res) => {
  if (res.data.code === 1) {
    sessionStorage.setItem('token', '')
    // token 过期操作
  }
  return res
})

interface ResType<T> {
  code: number
  data?: Text
  msg: string
  err?: string
}
interface Http {
  get<T>(url: string, params?: unknown): Promise<ResType<T>>
  post<T>(url: string, params?: unknown): Promise<ResType<T>>
}

const http: Http = {
  get(url, params) {
    return new Promise((resolve, reject) => {
      NProgress.start()
      axios
        .get(url, { params })
        .then((res) => {
          NProgress.done()
          resolve(res.data)
        })
        .catch((err) => {
          NProgress.done()
          reject(err.data)
        })
    })
  },
  post(url, params) {
    return new Promise((resolve, reject) => {
      NProgress.start()
      axios
        .post(url, JSON.stringify(params))
        .then((res) => {
          NProgress.done()
          resolve(res.data)
        })
        .catch((err) => {
          reject(err.data)
        })
    })
  },
}

export default http
