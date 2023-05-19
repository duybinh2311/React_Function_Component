import {
  TOKEN,
  USER_LOGIN,
  getStoreJSON,
  http,
  saveStoreJSON,
} from '@/utils/config'
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

const userReducer = createSlice({
  name: 'userReducer',
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

export const { loginReducer, userProfileReducer } = userReducer.actions

export default userReducer.reducer

export const loginActionAPI = async (userLogin) => {
  try {
    const result = await http.post('/api/Users/signin', userLogin)
    saveStoreJSON(USER_LOGIN, result.data.content)
    saveStoreJSON(TOKEN, result.data.content.accessToken)
    return result.data.content
  } catch (error) {
    throw error
  }
}

export const getProfileActionAPI = async () => {
  try {
    const accessToken = getStoreJSON(TOKEN)
    const result = await http.post(
      '/api/Users/getProfile',
      {},
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    )
    return result.data.content
  } catch (error) {
    throw error
  }
}
