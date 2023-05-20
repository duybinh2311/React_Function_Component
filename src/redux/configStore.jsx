import { configureStore } from '@reduxjs/toolkit'
import appChatReducer from 'slices/appChatSlice'
import userReducer from 'slices/userSlice'
import filmSlice from 'slices/filmSlice'

export const store = configureStore({
  reducer: {
    appChatReducer,
    userReducer,
    filmSlice,
  },
})
