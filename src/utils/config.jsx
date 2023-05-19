import axios from 'axios'
/* Cấu hình hệ thống */
export const DOMAIN = 'https://shop.cyberlearn.vn'
export const USER_LOGIN = 'userLogin'
export const TOKEN = 'accessToken'

/* Cấu hình request gửi đi của axios */
export const http = axios.create({
  baseURL: DOMAIN, // domain của tất cả request
  timeout: 30000, // thời gian request tồn tại
})

export const { saveStoreJSON, getStoreJSON, clearStoreJSON } = {
  saveStoreJSON: (name, data) => {
    const string = JSON.stringify(data)
    localStorage.setItem(name, string)
  },
  getStoreJSON: (name) => {
    if (localStorage.getItem(name)) {
      const data = JSON.parse(localStorage.getItem(name))
      return data
    }
    return undefined
  },
  clearStoreJSON: (name) => {
    localStorage.removeItem(name)
  },
}
