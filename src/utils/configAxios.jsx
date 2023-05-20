import axios from 'axios'
import { history } from '@/index'
import { useNavigate } from 'react-router-dom'
/* Cấu hình hệ thống */
export const DOMAIN = 'https://shop.cyberlearn.vn'
export const USER_LOGIN = 'userLogin'
export const TOKEN = 'accessToken'

const tokenCyberSoft =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA0MyIsIkhldEhhblN0cmluZyI6IjA0LzExLzIwMjMiLCJIZXRIYW5UaW1lIjoiMTY5OTA1NjAwMDAwMCIsIm5iZiI6MTY2OTQ4MjAwMCwiZXhwIjoxNjk5MjAzNjAwfQ.7A1g8RqPPK_ttr9NYitsWT7Cbe11nz4qye-QxZ_b8fk'

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

/* Cấu hình API Shoes Store */
export const http = axios.create({
  baseURL: DOMAIN,
  timeout: 30000,
})

/* Cấu hình interceptors Request API Shoes Store */
http.interceptors.request.use(
  (config) => {
    config = { ...config }
    const token = getStoreJSON(TOKEN)
    config.headers.Authorization = `Bearer ${token}`
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

/* Cấu hình API Movie */
export const movieAPI = axios.create({
  baseURL: 'https://movienew.cybersoft.edu.vn/api/',
  headers: {
    TokenCybersoft: tokenCyberSoft,
  },
})

/* Cấu hình interceptors Response API Movie */
http.interceptors.response.use(
  (result) => {
    return result
  },
  (error) => {
    // Xử lý cho response lỗi trả về
    if (error.response?.status === 401) {
      alert('Bạn chưa đăng nhập')
      history.push('/login')
      window.location.reload()
    }
    return Promise.reject(error)
  }
)

/* 
  Status Code Thông Dụng 
  - 200: Dữ liệu gửi đi và nhận về kết quả thành công (Get data API)
  - 201: Dữ liệu khởi tạo thành công (Created data API)
  - 400: Bad request (lỗi không tìm thấy API trên Server)
  - 401: Unauthorized (Lỗi không có quyền truy cập API do chưa xác thực)
  - 403: Forbidden (lỗi không có quyền truy cập vào API)
  - 404: Not found (Không tìm thấy URL API trên Server)
  - 500: Error in server (Lỗi xảy ra tại Server hoặc có thể do dữ liệu gửi đi sai định dạng BackEnd quy định)
*/
