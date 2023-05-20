import { history } from '@/index'
import {
  TOKEN,
  USER_LOGIN,
  getStoreJSON,
  http,
  saveStoreJSON,
} from '@/utils/configAxios'
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  userLogin: {
    email: getStoreJSON(USER_LOGIN)?.email || '',
    accessToken: getStoreJSON(USER_LOGIN)?.accessToken || '',
  },
  userProfile: {
    email: '',
    phone: '',
    name: '',
    avatar: '',
  },
  accessToken: getStoreJSON(TOKEN) || '',
}

const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    loginReducer: (state, action) => {
      state.userLogin = action.payload
    },
    userProfileReducer: (state, action) => {
      state.userProfile = { ...action.payload }
    },
  },
})

export const { loginReducer, userProfileReducer } = userSlice.actions

export default userSlice.reducer

export const loginActionAPI = async (userLogin) => {
  try {
    const result = await http.post('/api/Users/signin', userLogin)
    saveStoreJSON(USER_LOGIN, result.data.content)
    saveStoreJSON(TOKEN, result.data.content.accessToken)
    history.push('/profile')
    window.location.reload()
    return result.data.content
  } catch (error) {
    throw error
  }
}

export const getProfileActionAPI = async () => {
  try {
    const result = await http.post('/api/Users/getProfile')
    return result.data.content
  } catch (error) {
    console.log(error)
  }
}
